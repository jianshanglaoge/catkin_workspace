# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/BaseCyclic_Command.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class BaseCyclic_Command(genpy.Message):
  _md5sum = "79e9d628025fc54837a4192c98fc5b9f"
  _type = "kortex_driver/BaseCyclic_Command"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """
uint32 frame_id
ActuatorCommand[] actuators
InterconnectCyclic_Command interconnect
================================================================================
MSG: kortex_driver/ActuatorCommand

uint32 command_id
uint32 flags
float32 position
float32 velocity
float32 torque_joint
float32 current_motor
================================================================================
MSG: kortex_driver/InterconnectCyclic_Command

InterconnectCyclic_MessageId command_id
uint32 flags
InterconnectCyclic_Command_tool_command oneof_tool_command
================================================================================
MSG: kortex_driver/InterconnectCyclic_MessageId

uint32 identifier
================================================================================
MSG: kortex_driver/InterconnectCyclic_Command_tool_command

GripperCyclic_Command[] gripper_command
================================================================================
MSG: kortex_driver/GripperCyclic_Command

GripperCyclic_MessageId command_id
uint32 flags
MotorCommand[] motor_cmd
================================================================================
MSG: kortex_driver/GripperCyclic_MessageId

uint32 identifier
================================================================================
MSG: kortex_driver/MotorCommand

uint32 motor_id
float32 position
float32 velocity
float32 force"""
  __slots__ = ['frame_id','actuators','interconnect']
  _slot_types = ['uint32','kortex_driver/ActuatorCommand[]','kortex_driver/InterconnectCyclic_Command']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       frame_id,actuators,interconnect

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(BaseCyclic_Command, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.frame_id is None:
        self.frame_id = 0
      if self.actuators is None:
        self.actuators = []
      if self.interconnect is None:
        self.interconnect = kortex_driver.msg.InterconnectCyclic_Command()
    else:
      self.frame_id = 0
      self.actuators = []
      self.interconnect = kortex_driver.msg.InterconnectCyclic_Command()

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self.frame_id
      buff.write(_get_struct_I().pack(_x))
      length = len(self.actuators)
      buff.write(_struct_I.pack(length))
      for val1 in self.actuators:
        _x = val1
        buff.write(_get_struct_2I4f().pack(_x.command_id, _x.flags, _x.position, _x.velocity, _x.torque_joint, _x.current_motor))
      _x = self
      buff.write(_get_struct_2I().pack(_x.interconnect.command_id.identifier, _x.interconnect.flags))
      length = len(self.interconnect.oneof_tool_command.gripper_command)
      buff.write(_struct_I.pack(length))
      for val1 in self.interconnect.oneof_tool_command.gripper_command:
        _v1 = val1.command_id
        _x = _v1.identifier
        buff.write(_get_struct_I().pack(_x))
        _x = val1.flags
        buff.write(_get_struct_I().pack(_x))
        length = len(val1.motor_cmd)
        buff.write(_struct_I.pack(length))
        for val2 in val1.motor_cmd:
          _x = val2
          buff.write(_get_struct_I3f().pack(_x.motor_id, _x.position, _x.velocity, _x.force))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.actuators is None:
        self.actuators = None
      if self.interconnect is None:
        self.interconnect = kortex_driver.msg.InterconnectCyclic_Command()
      end = 0
      start = end
      end += 4
      (self.frame_id,) = _get_struct_I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.actuators = []
      for i in range(0, length):
        val1 = kortex_driver.msg.ActuatorCommand()
        _x = val1
        start = end
        end += 24
        (_x.command_id, _x.flags, _x.position, _x.velocity, _x.torque_joint, _x.current_motor,) = _get_struct_2I4f().unpack(str[start:end])
        self.actuators.append(val1)
      _x = self
      start = end
      end += 8
      (_x.interconnect.command_id.identifier, _x.interconnect.flags,) = _get_struct_2I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.interconnect.oneof_tool_command.gripper_command = []
      for i in range(0, length):
        val1 = kortex_driver.msg.GripperCyclic_Command()
        _v2 = val1.command_id
        start = end
        end += 4
        (_v2.identifier,) = _get_struct_I().unpack(str[start:end])
        start = end
        end += 4
        (val1.flags,) = _get_struct_I().unpack(str[start:end])
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        val1.motor_cmd = []
        for i in range(0, length):
          val2 = kortex_driver.msg.MotorCommand()
          _x = val2
          start = end
          end += 16
          (_x.motor_id, _x.position, _x.velocity, _x.force,) = _get_struct_I3f().unpack(str[start:end])
          val1.motor_cmd.append(val2)
        self.interconnect.oneof_tool_command.gripper_command.append(val1)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self.frame_id
      buff.write(_get_struct_I().pack(_x))
      length = len(self.actuators)
      buff.write(_struct_I.pack(length))
      for val1 in self.actuators:
        _x = val1
        buff.write(_get_struct_2I4f().pack(_x.command_id, _x.flags, _x.position, _x.velocity, _x.torque_joint, _x.current_motor))
      _x = self
      buff.write(_get_struct_2I().pack(_x.interconnect.command_id.identifier, _x.interconnect.flags))
      length = len(self.interconnect.oneof_tool_command.gripper_command)
      buff.write(_struct_I.pack(length))
      for val1 in self.interconnect.oneof_tool_command.gripper_command:
        _v3 = val1.command_id
        _x = _v3.identifier
        buff.write(_get_struct_I().pack(_x))
        _x = val1.flags
        buff.write(_get_struct_I().pack(_x))
        length = len(val1.motor_cmd)
        buff.write(_struct_I.pack(length))
        for val2 in val1.motor_cmd:
          _x = val2
          buff.write(_get_struct_I3f().pack(_x.motor_id, _x.position, _x.velocity, _x.force))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.actuators is None:
        self.actuators = None
      if self.interconnect is None:
        self.interconnect = kortex_driver.msg.InterconnectCyclic_Command()
      end = 0
      start = end
      end += 4
      (self.frame_id,) = _get_struct_I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.actuators = []
      for i in range(0, length):
        val1 = kortex_driver.msg.ActuatorCommand()
        _x = val1
        start = end
        end += 24
        (_x.command_id, _x.flags, _x.position, _x.velocity, _x.torque_joint, _x.current_motor,) = _get_struct_2I4f().unpack(str[start:end])
        self.actuators.append(val1)
      _x = self
      start = end
      end += 8
      (_x.interconnect.command_id.identifier, _x.interconnect.flags,) = _get_struct_2I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.interconnect.oneof_tool_command.gripper_command = []
      for i in range(0, length):
        val1 = kortex_driver.msg.GripperCyclic_Command()
        _v4 = val1.command_id
        start = end
        end += 4
        (_v4.identifier,) = _get_struct_I().unpack(str[start:end])
        start = end
        end += 4
        (val1.flags,) = _get_struct_I().unpack(str[start:end])
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        val1.motor_cmd = []
        for i in range(0, length):
          val2 = kortex_driver.msg.MotorCommand()
          _x = val2
          start = end
          end += 16
          (_x.motor_id, _x.position, _x.velocity, _x.force,) = _get_struct_I3f().unpack(str[start:end])
          val1.motor_cmd.append(val2)
        self.interconnect.oneof_tool_command.gripper_command.append(val1)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_2I = None
def _get_struct_2I():
    global _struct_2I
    if _struct_2I is None:
        _struct_2I = struct.Struct("<2I")
    return _struct_2I
_struct_2I4f = None
def _get_struct_2I4f():
    global _struct_2I4f
    if _struct_2I4f is None:
        _struct_2I4f = struct.Struct("<2I4f")
    return _struct_2I4f
_struct_I3f = None
def _get_struct_I3f():
    global _struct_I3f
    if _struct_I3f is None:
        _struct_I3f = struct.Struct("<I3f")
    return _struct_I3f
