; Auto-generated. Do not edit!


(cl:in-package odrive_interface-msg)


;//! \htmlinclude ArmKeyboard.msg.html

(cl:defclass <ArmKeyboard> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (x
    :reader x
    :initarg :x
    :type cl:float
    :initform 0.0)
   (y
    :reader y
    :initarg :y
    :type cl:float
    :initform 0.0)
   (z
    :reader z
    :initarg :z
    :type cl:float
    :initform 0.0)
   (joint
    :reader joint
    :initarg :joint
    :type cl:integer
    :initform 0)
   (updown
    :reader updown
    :initarg :updown
    :type cl:float
    :initform 0.0)
   (holdrelease
    :reader holdrelease
    :initarg :holdrelease
    :type cl:float
    :initform 0.0))
)

(cl:defclass ArmKeyboard (<ArmKeyboard>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <ArmKeyboard>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'ArmKeyboard)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name odrive_interface-msg:<ArmKeyboard> is deprecated: use odrive_interface-msg:ArmKeyboard instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:header-val is deprecated.  Use odrive_interface-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'x-val :lambda-list '(m))
(cl:defmethod x-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:x-val is deprecated.  Use odrive_interface-msg:x instead.")
  (x m))

(cl:ensure-generic-function 'y-val :lambda-list '(m))
(cl:defmethod y-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:y-val is deprecated.  Use odrive_interface-msg:y instead.")
  (y m))

(cl:ensure-generic-function 'z-val :lambda-list '(m))
(cl:defmethod z-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:z-val is deprecated.  Use odrive_interface-msg:z instead.")
  (z m))

(cl:ensure-generic-function 'joint-val :lambda-list '(m))
(cl:defmethod joint-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:joint-val is deprecated.  Use odrive_interface-msg:joint instead.")
  (joint m))

(cl:ensure-generic-function 'updown-val :lambda-list '(m))
(cl:defmethod updown-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:updown-val is deprecated.  Use odrive_interface-msg:updown instead.")
  (updown m))

(cl:ensure-generic-function 'holdrelease-val :lambda-list '(m))
(cl:defmethod holdrelease-val ((m <ArmKeyboard>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader odrive_interface-msg:holdrelease-val is deprecated.  Use odrive_interface-msg:holdrelease instead.")
  (holdrelease m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <ArmKeyboard>) ostream)
  "Serializes a message object of type '<ArmKeyboard>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'x))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'y))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'z))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'joint)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'joint)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'joint)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'joint)) ostream)
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'updown))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'holdrelease))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <ArmKeyboard>) istream)
  "Deserializes a message object of type '<ArmKeyboard>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'x) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'y) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'z) (roslisp-utils:decode-single-float-bits bits)))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'joint)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'joint)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'joint)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'joint)) (cl:read-byte istream))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'updown) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'holdrelease) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<ArmKeyboard>)))
  "Returns string type for a message object of type '<ArmKeyboard>"
  "odrive_interface/ArmKeyboard")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'ArmKeyboard)))
  "Returns string type for a message object of type 'ArmKeyboard"
  "odrive_interface/ArmKeyboard")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<ArmKeyboard>)))
  "Returns md5sum for a message object of type '<ArmKeyboard>"
  "978d84a3bc6b3fd8840bb7afff707204")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'ArmKeyboard)))
  "Returns md5sum for a message object of type 'ArmKeyboard"
  "978d84a3bc6b3fd8840bb7afff707204")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<ArmKeyboard>)))
  "Returns full string definition for message of type '<ArmKeyboard>"
  (cl:format cl:nil "Header header~%float32 x~%float32 y~%float32 z~%uint32 joint~%float32 updown~%float32 holdrelease~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'ArmKeyboard)))
  "Returns full string definition for message of type 'ArmKeyboard"
  (cl:format cl:nil "Header header~%float32 x~%float32 y~%float32 z~%uint32 joint~%float32 updown~%float32 holdrelease~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <ArmKeyboard>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     4
     4
     4
     4
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <ArmKeyboard>))
  "Converts a ROS message object to a list"
  (cl:list 'ArmKeyboard
    (cl:cons ':header (header msg))
    (cl:cons ':x (x msg))
    (cl:cons ':y (y msg))
    (cl:cons ':z (z msg))
    (cl:cons ':joint (joint msg))
    (cl:cons ':updown (updown msg))
    (cl:cons ':holdrelease (holdrelease msg))
))
