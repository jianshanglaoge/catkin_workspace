;; Auto-generated. Do not edit!


(when (boundp 'odrive_interface::ArmKeyboard)
  (if (not (find-package "ODRIVE_INTERFACE"))
    (make-package "ODRIVE_INTERFACE"))
  (shadow 'ArmKeyboard (find-package "ODRIVE_INTERFACE")))
(unless (find-package "ODRIVE_INTERFACE::ARMKEYBOARD")
  (make-package "ODRIVE_INTERFACE::ARMKEYBOARD"))

(in-package "ROS")
;;//! \htmlinclude ArmKeyboard.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass odrive_interface::ArmKeyboard
  :super ros::object
  :slots (_header _x _y _z _joint _updown _holdrelease ))

(defmethod odrive_interface::ArmKeyboard
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:x __x) 0.0)
    ((:y __y) 0.0)
    ((:z __z) 0.0)
    ((:joint __joint) 0)
    ((:updown __updown) 0.0)
    ((:holdrelease __holdrelease) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _x (float __x))
   (setq _y (float __y))
   (setq _z (float __z))
   (setq _joint (round __joint))
   (setq _updown (float __updown))
   (setq _holdrelease (float __holdrelease))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:x
   (&optional __x)
   (if __x (setq _x __x)) _x)
  (:y
   (&optional __y)
   (if __y (setq _y __y)) _y)
  (:z
   (&optional __z)
   (if __z (setq _z __z)) _z)
  (:joint
   (&optional __joint)
   (if __joint (setq _joint __joint)) _joint)
  (:updown
   (&optional __updown)
   (if __updown (setq _updown __updown)) _updown)
  (:holdrelease
   (&optional __holdrelease)
   (if __holdrelease (setq _holdrelease __holdrelease)) _holdrelease)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float32 _x
    4
    ;; float32 _y
    4
    ;; float32 _z
    4
    ;; uint32 _joint
    4
    ;; float32 _updown
    4
    ;; float32 _holdrelease
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float32 _x
       (sys::poke _x (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _y
       (sys::poke _y (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _z
       (sys::poke _z (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; uint32 _joint
       (write-long _joint s)
     ;; float32 _updown
       (sys::poke _updown (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _holdrelease
       (sys::poke _holdrelease (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float32 _x
     (setq _x (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _y
     (setq _y (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _z
     (setq _z (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; uint32 _joint
     (setq _joint (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float32 _updown
     (setq _updown (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _holdrelease
     (setq _holdrelease (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get odrive_interface::ArmKeyboard :md5sum-) "978d84a3bc6b3fd8840bb7afff707204")
(setf (get odrive_interface::ArmKeyboard :datatype-) "odrive_interface/ArmKeyboard")
(setf (get odrive_interface::ArmKeyboard :definition-)
      "Header header
float32 x
float32 y
float32 z
uint32 joint
float32 updown
float32 holdrelease

================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
string frame_id

")



(provide :odrive_interface/ArmKeyboard "978d84a3bc6b3fd8840bb7afff707204")


