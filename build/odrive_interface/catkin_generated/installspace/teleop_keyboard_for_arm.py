#!/usr/bin/env python2

from __future__ import print_function

import threading

from odrive_interface.msg import ArmKeyboard

import roslib; roslib.load_manifest('teleop_twist_keyboard')
import rospy

import math

import sys
from select import select

if sys.platform == 'win32':
    import msvcrt
else:
    import termios
    import tty


ArmMsg = ArmKeyboard

msg = """
Reading from the keyboard  and Publishing!
---------------------------
Moving at xz space:
        w     
   a    s    d
Movint forward and backward
   q farther
   e closer
Change state from each joint:
---------------------------
j : up (pi/8)
l : down (-pi/8)
k : change joint
i : hold
, : release
CTRL-C to quit
"""

moveBindings = {
        'q':(0.1,0,0),
        'e':(-0.1,0,0),
        'a':(0,0.1,0),
        'd':(0,-0.1,0),
        'w':(0,0,0.1),
        's':(0,0,-0.1),
    }

angleBindings={
        'j':math.pi/8,
        'l':-math.pi/8,
    }
jointBindings={
        'k':-1,
}
gripperBindings={
        'i':-0.1,
        ',':0.1,
}



class PublishThread(threading.Thread):
    def __init__(self, rate):
        super(PublishThread, self).__init__()
        self.publisher = rospy.Publisher('my_gen3_lite/arm_controller', ArmMsg, queue_size = 1)
        self.x = 0
        self.y = 0
        self.z = 0
        self.joint = 5
        self.updown = 0.0
        self.holdrelease = 0
        self.condition = threading.Condition()
        self.done = False
        if rate != 0.0:
            self.timeout = 1.0 / rate
        else:
            self.timeout = None
        self.start()

    def wait_for_subscribers(self):
        i = 0
        while not rospy.is_shutdown() and self.publisher.get_num_connections() == 0:
            if i == 4:
                print("Waiting for subscriber to connect to {}".format(self.publisher.name))
            rospy.sleep(0.5)
            i += 1
            i = i % 5
        if rospy.is_shutdown():
            raise Exception("Got shutdown request before subscribers connected")

    def update(self, x, y, z, joint, updown, holdrelease):
        self.condition.acquire()
        self.x = x
        self.y = y
        self.z = z
        self.joint = joint
        self.updown = updown
        self.holdrelease = holdrelease
        # Notify publish thread that we have a new message.
        self.condition.notify()
        self.condition.release()

    def stop(self):
        self.done = True
        self.update(0, 0, 0, 5, 0, 0)
        self.join()

    def run(self):
        arm_msg = ArmMsg()

        while not self.done:
            self.condition.acquire()
            # Wait for a new message or timeout.
            self.condition.wait(self.timeout)

            # Copy state into twist message.
            arm_msg.x = self.x
            arm_msg.y = self.y
            arm_msg.z = self.z
            arm_msg.joint = self.joint
            arm_msg.updown = self.updown
            arm_msg.holdrelease = self.holdrelease

            self.condition.release()

            # Publish.
            self.publisher.publish(arm_msg)

        # Publish stop message when thread exits.
        arm_msg.x = 0
        arm_msg.y = 0
        arm_msg.z = 0
        arm_msg.joint = 5
        arm_msg.updown = 0
        arm_msg.holdrelease = 0
        self.publisher.publish(arm_msg)


def getKey(settings, timeout):
    if sys.platform == 'win32':
        # getwch() returns a string on Windows
        key = msvcrt.getwch()
    else:
        tty.setraw(sys.stdin.fileno())
        # sys.stdin.read() returns a string on Linux
        rlist, _, _ = select([sys.stdin], [], [], timeout)
        if rlist:
            key = sys.stdin.read(1)
        else:
            key = ''
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, settings)
    return key

def saveTerminalSettings():
    if sys.platform == 'win32':
        return None
    return termios.tcgetattr(sys.stdin)

def restoreTerminalSettings(old_settings):
    if sys.platform == 'win32':
        return
    termios.tcsetattr(sys.stdin, termios.TCSADRAIN, old_settings)


if __name__=="__main__":
    settings = saveTerminalSettings()

    rospy.init_node('my_teleop_keyboard')

    repeat = rospy.get_param("~repeat_rate", 0.0)
    key_timeout = rospy.get_param("~key_timeout", 0.5)

    pub_thread = PublishThread(repeat)

    x = 0
    y = 0
    z = 0
    joint = 5
    updown = 0
    holdrelease = 0
    status = 0
    try:
        pub_thread.wait_for_subscribers()
        pub_thread.update(x, y, z, joint, updown, holdrelease)

        print(msg)
        print("current joint is number %s",joint)
        while(1):
            key = getKey(settings, key_timeout)
            if key in moveBindings.keys():
                x = moveBindings[key][0]
                y = moveBindings[key][1]
                z = moveBindings[key][2]
                updown = 0
                holdrelease = 0
            elif key in angleBindings.keys():
                x = 0
                y = 0
                z = 0
                holdrelease = 0
                updown = angleBindings[key]
            elif key in jointBindings.keys():
                joint += jointBindings[key]
                x = 0
                y = 0
                z = 0
                updown = 0
                holdrelease = 0
                if joint < 0:
                    joint = 5
                print("current joint is number",joint)
                if (status == 14):
                    print(msg)
                status = (status + 1) % 15
            elif key in gripperBindings.keys():
                x = 0
                y = 0
                z = 0
                updown = 0
                holdrelease = gripperBindings[key]
            else:
                if key == '':
                    continue
                x = 0
                y = 0
                z = 0
                updown = 0
                holdrelease = 0
                if (key == '\x03'):
                    break
            pub_thread.update(x, y, z, joint, updown, holdrelease)

    except Exception as e:
        print(e)

    finally:
        pub_thread.stop()
        restoreTerminalSettings(settings)
