;; Auto-generated. Do not edit!


(when (boundp 'kortex_driver::GetTwistSoftLimitation)
  (if (not (find-package "KORTEX_DRIVER"))
    (make-package "KORTEX_DRIVER"))
  (shadow 'GetTwistSoftLimitation (find-package "KORTEX_DRIVER")))
(unless (find-package "KORTEX_DRIVER::GETTWISTSOFTLIMITATION")
  (make-package "KORTEX_DRIVER::GETTWISTSOFTLIMITATION"))
(unless (find-package "KORTEX_DRIVER::GETTWISTSOFTLIMITATIONREQUEST")
  (make-package "KORTEX_DRIVER::GETTWISTSOFTLIMITATIONREQUEST"))
(unless (find-package "KORTEX_DRIVER::GETTWISTSOFTLIMITATIONRESPONSE")
  (make-package "KORTEX_DRIVER::GETTWISTSOFTLIMITATIONRESPONSE"))

(in-package "ROS")





(defclass kortex_driver::GetTwistSoftLimitationRequest
  :super ros::object
  :slots (_input ))

(defmethod kortex_driver::GetTwistSoftLimitationRequest
  (:init
   (&key
    ((:input __input) (instance kortex_driver::Empty :init))
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
    ;; kortex_driver/Empty _input
    (send _input :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; kortex_driver/Empty _input
       (send _input :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; kortex_driver/Empty _input
     (send _input :deserialize buf ptr-) (incf ptr- (send _input :serialization-length))
   ;;
   self)
  )

(defclass kortex_driver::GetTwistSoftLimitationResponse
  :super ros::object
  :slots (_output ))

(defmethod kortex_driver::GetTwistSoftLimitationResponse
  (:init
   (&key
    ((:output __output) (instance kortex_driver::TwistLimitation :init))
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
    ;; kortex_driver/TwistLimitation _output
    (send _output :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; kortex_driver/TwistLimitation _output
       (send _output :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; kortex_driver/TwistLimitation _output
     (send _output :deserialize buf ptr-) (incf ptr- (send _output :serialization-length))
   ;;
   self)
  )

(defclass kortex_driver::GetTwistSoftLimitation
  :super ros::object
  :slots ())

(setf (get kortex_driver::GetTwistSoftLimitation :md5sum-) "69b1f43d97a46e21f8b8586022fd23ec")
(setf (get kortex_driver::GetTwistSoftLimitation :datatype-) "kortex_driver/GetTwistSoftLimitation")
(setf (get kortex_driver::GetTwistSoftLimitation :request) kortex_driver::GetTwistSoftLimitationRequest)
(setf (get kortex_driver::GetTwistSoftLimitation :response) kortex_driver::GetTwistSoftLimitationResponse)

(defmethod kortex_driver::GetTwistSoftLimitationRequest
  (:response () (instance kortex_driver::GetTwistSoftLimitationResponse :init)))

(setf (get kortex_driver::GetTwistSoftLimitationRequest :md5sum-) "69b1f43d97a46e21f8b8586022fd23ec")
(setf (get kortex_driver::GetTwistSoftLimitationRequest :datatype-) "kortex_driver/GetTwistSoftLimitationRequest")
(setf (get kortex_driver::GetTwistSoftLimitationRequest :definition-)
      "Empty input

================================================================================
MSG: kortex_driver/Empty
---
TwistLimitation output

================================================================================
MSG: kortex_driver/TwistLimitation

float32 linear
")

(setf (get kortex_driver::GetTwistSoftLimitationResponse :md5sum-) "69b1f43d97a46e21f8b8586022fd23ec")
(setf (get kortex_driver::GetTwistSoftLimitationResponse :datatype-) "kortex_driver/GetTwistSoftLimitationResponse")
(setf (get kortex_driver::GetTwistSoftLimitationResponse :definition-)
      "Empty input

================================================================================
MSG: kortex_driver/Empty
---
TwistLimitation output

================================================================================
MSG: kortex_driver/TwistLimitation

float32 linear
")



(provide :kortex_driver/GetTwistSoftLimitation "69b1f43d97a46e21f8b8586022fd23ec")


