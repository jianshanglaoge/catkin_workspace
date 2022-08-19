# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/GetOptionInformationRequest.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class GetOptionInformationRequest(genpy.Message):
  _md5sum = "e66b1b0de1a710df3ff2cc0bc64b9ced"
  _type = "kortex_driver/GetOptionInformationRequest"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """OptionIdentifier input

================================================================================
MSG: kortex_driver/OptionIdentifier

uint32 sensor
uint32 option"""
  __slots__ = ['input']
  _slot_types = ['kortex_driver/OptionIdentifier']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       input

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(GetOptionInformationRequest, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.input is None:
        self.input = kortex_driver.msg.OptionIdentifier()
    else:
      self.input = kortex_driver.msg.OptionIdentifier()

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
      _x = self
      buff.write(_get_struct_2I().pack(_x.input.sensor, _x.input.option))
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
      if self.input is None:
        self.input = kortex_driver.msg.OptionIdentifier()
      end = 0
      _x = self
      start = end
      end += 8
      (_x.input.sensor, _x.input.option,) = _get_struct_2I().unpack(str[start:end])
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
      _x = self
      buff.write(_get_struct_2I().pack(_x.input.sensor, _x.input.option))
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
      if self.input is None:
        self.input = kortex_driver.msg.OptionIdentifier()
      end = 0
      _x = self
      start = end
      end += 8
      (_x.input.sensor, _x.input.option,) = _get_struct_2I().unpack(str[start:end])
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
# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/GetOptionInformationResponse.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class GetOptionInformationResponse(genpy.Message):
  _md5sum = "9eb358fd0dbe985fd71dfcb2e8ac705f"
  _type = "kortex_driver/GetOptionInformationResponse"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """OptionInformation output

================================================================================
MSG: kortex_driver/OptionInformation

uint32 sensor
uint32 option
bool supported
bool read_only
float32 minimum
float32 maximum
float32 step
float32 default_value"""
  __slots__ = ['output']
  _slot_types = ['kortex_driver/OptionInformation']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       output

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(GetOptionInformationResponse, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.output is None:
        self.output = kortex_driver.msg.OptionInformation()
    else:
      self.output = kortex_driver.msg.OptionInformation()

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
      _x = self
      buff.write(_get_struct_2I2B4f().pack(_x.output.sensor, _x.output.option, _x.output.supported, _x.output.read_only, _x.output.minimum, _x.output.maximum, _x.output.step, _x.output.default_value))
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
      if self.output is None:
        self.output = kortex_driver.msg.OptionInformation()
      end = 0
      _x = self
      start = end
      end += 26
      (_x.output.sensor, _x.output.option, _x.output.supported, _x.output.read_only, _x.output.minimum, _x.output.maximum, _x.output.step, _x.output.default_value,) = _get_struct_2I2B4f().unpack(str[start:end])
      self.output.supported = bool(self.output.supported)
      self.output.read_only = bool(self.output.read_only)
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
      _x = self
      buff.write(_get_struct_2I2B4f().pack(_x.output.sensor, _x.output.option, _x.output.supported, _x.output.read_only, _x.output.minimum, _x.output.maximum, _x.output.step, _x.output.default_value))
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
      if self.output is None:
        self.output = kortex_driver.msg.OptionInformation()
      end = 0
      _x = self
      start = end
      end += 26
      (_x.output.sensor, _x.output.option, _x.output.supported, _x.output.read_only, _x.output.minimum, _x.output.maximum, _x.output.step, _x.output.default_value,) = _get_struct_2I2B4f().unpack(str[start:end])
      self.output.supported = bool(self.output.supported)
      self.output.read_only = bool(self.output.read_only)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_2I2B4f = None
def _get_struct_2I2B4f():
    global _struct_2I2B4f
    if _struct_2I2B4f is None:
        _struct_2I2B4f = struct.Struct("<2I2B4f")
    return _struct_2I2B4f
class GetOptionInformation(object):
  _type          = 'kortex_driver/GetOptionInformation'
  _md5sum = '0af2e58d9822a8c26f4c5a66d0d6015b'
  _request_class  = GetOptionInformationRequest
  _response_class = GetOptionInformationResponse