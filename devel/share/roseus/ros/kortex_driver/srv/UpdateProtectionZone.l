;; Auto-generated. Do not edit!


(when (boundp 'kortex_driver::UpdateProtectionZone)
  (if (not (find-package "KORTEX_DRIVER"))
    (make-package "KORTEX_DRIVER"))
  (shadow 'UpdateProtectionZone (find-package "KORTEX_DRIVER")))
(unless (find-package "KORTEX_DRIVER::UPDATEPROTECTIONZONE")
  (make-package "KORTEX_DRIVER::UPDATEPROTECTIONZONE"))
(unless (find-package "KORTEX_DRIVER::UPDATEPROTECTIONZONEREQUEST")
  (make-package "KORTEX_DRIVER::UPDATEPROTECTIONZONEREQUEST"))
(unless (find-package "KORTEX_DRIVER::UPDATEPROTECTIONZONERESPONSE")
  (make-package "KORTEX_DRIVER::UPDATEPROTECTIONZONERESPONSE"))

(in-package "ROS")





(defclass kortex_driver::UpdateProtectionZoneRequest
  :super ros::object
  :slots (_input ))

(defmethod kortex_driver::UpdateProtectionZoneRequest
  (:init
   (&key
    ((:input __input) (instance kortex_driver::ProtectionZone :init))
    )
   (send-super :init)
   (setq _input __input)
   self)
  (:input
   (&rest __input)
   (if (keywordp (car __input))
       (send* _input __input)
     (progn
       (if __input (setq _input (car __input)))
       _input)))
  (:serialization-length
   ()
   (+
    ;; kortex_driver/ProtectionZone _input
    (send _input :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; kortex_driver/ProtectionZone _input
       (send _input :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; kortex_driver/ProtectionZone _input
     (send _input :deserialize buf ptr-) (incf ptr- (send _input :serialization-length))
   ;;
   self)
  )

(defclass kortex_driver::UpdateProtectionZoneResponse
  :super ros::object
  :slots (_output ))

(defmethod kortex_driver::UpdateProtectionZoneResponse
  (:init
   (&key
    ((:output __output) (instance kortex_driver::Empty :init))
    )
   (send-super :init)
   (setq _output __output)
   self)
  (:output
   (&rest __output)
   (if (keywordp (car __output))
       (send* _output __output)
     (progn
       (if __output (setq _output (car __output)))
       _output)))
  (:serialization-length
   ()
   (+
    ;; kortex_driver/Empty _output
    (send _output :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; kortex_driver/Empty _output
       (send _output :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; kortex_driver/Empty _output
     (send _output :deserialize buf ptr-) (incf ptr- (send _output :serialization-length))
   ;;
   self)
  )

(defclass kortex_driver::UpdateProtectionZone
  :super ros::object
  :slots ())

(setf (get kortex_driver::UpdateProtectionZone :md5sum-) "b1c7755249865d381b4b70557a125e12")
(setf (get kortex_driver::UpdateProtectionZone :datatype-) "kortex_driver/UpdateProtectionZone")
(setf (get kortex_driver::UpdateProtectionZone :request) kortex_driver::UpdateProtectionZoneRequest)
(setf (get kortex_driver::UpdateProtectionZone :response) kortex_driver::UpdateProtectionZoneResponse)

(defmethod kortex_driver::UpdateProtectionZoneRequest
  (:response () (instance kortex_driver::UpdateProtectionZoneResponse :init)))

(setf (get kortex_driver::UpdateProtectionZoneRequest :md5sum-) "b1c7755249865d381b4b70557a125e12")
(setf (get kortex_driver::UpdateProtectionZoneRequest :datatype-) "kortex_driver/UpdateProtectionZoneRequest")
(setf (get kortex_driver::UpdateProtectionZoneRequest :definition-)
      "ProtectionZone input

================================================================================
MSG: kortex_driver/ProtectionZone

ProtectionZoneHandle handle
string name
string application_data
bool is_enabled
ZoneShape shape
CartesianLimitation[] limitations
CartesianLimitation[] envelope_limitations
================================================================================
MSG: kortex_driver/ProtectionZoneHandle

uint32 identifier
uint32 permission
================================================================================
MSG: kortex_driver/ZoneShape

uint32 shape_type
Point origin
Base_RotationMatrix orientation
float32[] dimensions
float32 envelope_thickness
================================================================================
MSG: kortex_driver/Point

float32 x
float32 y
float32 z
================================================================================
MSG: kortex_driver/Base_RotationMatrix

Base_RotationMatrixRow row1
Base_RotationMatrixRow row2
Base_RotationMatrixRow row3
================================================================================
MSG: kortex_driver/Base_RotationMatrixRow

float32 column1
float32 column2
float32 column3
================================================================================
MSG: kortex_driver/CartesianLimitation

uint32 type
float32 translation
---
Empty output

================================================================================
MSG: kortex_driver/Empty
")

(setf (get kortex_driver::UpdateProtectionZoneResponse :md5sum-) "b1c7755249865d381b4b70557a125e12")
(setf (get kortex_driver::UpdateProtectionZoneResponse :datatype-) "kortex_driver/UpdateProtectionZoneResponse")
(setf (get kortex_driver::UpdateProtectionZoneResponse :definition-)
      "ProtectionZone input

================================================================================
MSG: kortex_driver/ProtectionZone

ProtectionZoneHandle handle
string name
string application_data
bool is_enabled
ZoneShape shape
CartesianLimitation[] limitations
CartesianLimitation[] envelope_limitations
================================================================================
MSG: kortex_driver/ProtectionZoneHandle

uint32 identifier
uint32 permission
================================================================================
MSG: kortex_driver/ZoneShape

uint32 shape_type
Point origin
Base_RotationMatrix orientation
float32[] dimensions
float32 envelope_thickness
================================================================================
MSG: kortex_driver/Point

float32 x
float32 y
float32 z
================================================================================
MSG: kortex_driver/Base_RotationMatrix

Base_RotationMatrixRow row1
Base_RotationMatrixRow row2
Base_RotationMatrixRow row3
================================================================================
MSG: kortex_driver/Base_RotationMatrixRow

float32 column1
float32 column2
float32 column3
================================================================================
MSG: kortex_driver/CartesianLimitation

uint32 type
float32 translation
---
Empty output

================================================================================
MSG: kortex_driver/Empty
")



(provide :kortex_driver/UpdateProtectionZone "b1c7755249865d381b4b70557a125e12")


