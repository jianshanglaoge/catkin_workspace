;; Auto-generated. Do not edit!


(when (boundp 'kortex_driver::RobotEventNotification)
  (if (not (find-package "KORTEX_DRIVER"))
    (make-package "KORTEX_DRIVER"))
  (shadow 'RobotEventNotification (find-package "KORTEX_DRIVER")))
(unless (find-package "KORTEX_DRIVER::ROBOTEVENTNOTIFICATION")
  (make-package "KORTEX_DRIVER::ROBOTEVENTNOTIFICATION"))

(in-package "ROS")
;;//! \htmlinclude RobotEventNotification.msg.html


(defclass kortex_driver::RobotEventNotification
  :super ros::object
  :slots (_event _handle _timestamp _user_handle _connection ))

(defmethod kortex_driver::RobotEventNotification
  (:init
   (&key
    ((:event __event) 0)
    ((:handle __handle) (instance kortex_driver::DeviceHandle :init))
    ((:timestamp __timestamp) (instance kortex_driver::Timestamp :init))
    ((:user_handle __user_handle) (instance kortex_driver::UserProfileHandle :init))
    ((:connection __connection) (instance kortex_driver::Connection :init))
    )
   (send-super :init)
   (setq _event (round __event))
   (setq _handle __handle)
   (setq _timestamp __timestamp)
   (setq _user_handle __user_handle)
   (setq _connection __connection)
   self)
  (:event
   (&optional __event)
   (if __event (setq _event __event)) _event)
  (:handle
   (&rest __handle)
   (if (keywordp (car __handle))
       (send* _handle __handle)
     (progn
       (if __handle (setq _handle (car __handle)))
       _handle)))
  (:timestamp
   (&rest __timestamp)
   (if (keywordp (car __timestamp))
       (send* _timestamp __timestamp)
     (progn
       (if __timestamp (setq _timestamp (car __timestamp)))
       _timestamp)))
  (:user_handle
   (&rest __user_handle)
   (if (keywordp (car __user_handle))
       (send* _user_handle __user_handle)
     (progn
       (if __user_handle (setq _user_handle (car __user_handle)))
       _user_handle)))
  (:connection
   (&rest __connection)
   (if (keywordp (car __connection))
       (send* _connection __connection)
     (progn
       (if __connection (setq _connection (car __connection)))
       _connection)))
  (:serialization-length
   ()
   (+
    ;; uint32 _event
    4
    ;; kortex_driver/DeviceHandle _handle
    (send _handle :serialization-length)
    ;; kortex_driver/Timestamp _timestamp
    (send _timestamp :serialization-length)
    ;; kortex_driver/UserProfileHandle _user_handle
    (send _user_handle :serialization-length)
    ;; kortex_driver/Connection _connection
    (send _connection :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint32 _event
       (write-long _event s)
     ;; kortex_driver/DeviceHandle _handle
       (send _handle :serialize s)
     ;; kortex_driver/Timestamp _timestamp
       (send _timestamp :serialize s)
     ;; kortex_driver/UserProfileHandle _user_handle
       (send _user_handle :serialize s)
     ;; kortex_driver/Connection _connection
       (send _connection :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint32 _event
     (setq _event (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; kortex_driver/DeviceHandle _handle
     (send _handle :deserialize buf ptr-) (incf ptr- (send _handle :serialization-length))
   ;; kortex_driver/Timestamp _timestamp
     (send _timestamp :deserialize buf ptr-) (incf ptr- (send _timestamp :serialization-length))
   ;; kortex_driver/UserProfileHandle _user_handle
     (send _user_handle :deserialize buf ptr-) (incf ptr- (send _user_handle :serialization-length))
   ;; kortex_driver/Connection _connection
     (send _connection :deserialize buf ptr-) (incf ptr- (send _connection :serialization-length))
   ;;
   self)
  )

(setf (get kortex_driver::RobotEventNotification :md5sum-) "b007c688b887811439b885aca5e71931")
(setf (get kortex_driver::RobotEventNotification :datatype-) "kortex_driver/RobotEventNotification")
(setf (get kortex_driver::RobotEventNotification :definition-)
      "
uint32 event
DeviceHandle handle
Timestamp timestamp
UserProfileHandle user_handle
Connection connection
================================================================================
MSG: kortex_driver/DeviceHandle

uint32 device_type
uint32 device_identifier
uint32 order
================================================================================
MSG: kortex_driver/Timestamp

uint32 sec
uint32 usec
================================================================================
MSG: kortex_driver/UserProfileHandle

uint32 identifier
uint32 permission
================================================================================
MSG: kortex_driver/Connection

UserProfileHandle user_handle
string connection_information
uint32 connection_identifier
")



(provide :kortex_driver/RobotEventNotification "b007c688b887811439b885aca5e71931")


