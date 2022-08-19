# Kinova Arm V1

This is the repository for the SmartSystems Lab's Kinova Arm programme

## Before Using 

For some reason, the kinova arm cannot connect to the wifi, so please use usb to control it. The code of driver and may part of robot controller is base on the [ros_kortex](https://github.com/Kinovarobotics/ros_kortex) and [kortex](https://github.com/Kinovarobotics/kortex) . Before sitting some enviroment or change any code please check the readme of them at first.

## Start Setting

After connecting to the robot, set your terminal workspace using ```cd catkin_workspace``` in terminal and do the ```catkin_make``` before you first using this file.

## Running the Programe

Every time before running, I recommand you to do ```source devel/setup.bash``` at your workspace. Then you can running ```roslaunch kortex_driver my_kortex_driver.launch``` to get everything start and get rviz. Adding ```RobotModel``` to get the kinova arm's position and adding ```MothinPlanning``` to planning the future position of the kinova arm in rivz.
Meanwhile you can open a new terminal and run ```roslaunch kortex_examples my_moveit.launch``` to start moveit and open another terminal and run ```rosrun odrive_interface teleop_keyboard_for_arm.py``` to start the keyboard controller for the kinova arm.

## Change been Made

### Robot Name
All the launch file's robot name part have been changed to ```my_gen3_lite```, the name also shows at topic part. If you want to change it please change all the launch file.

### my_moveit.py
Moveit has been changed to be a operatable python file.

### teleop_keyboard_for_arm.py
Teleop_keyboard_for_arm is a python file for control arm though teleop.
