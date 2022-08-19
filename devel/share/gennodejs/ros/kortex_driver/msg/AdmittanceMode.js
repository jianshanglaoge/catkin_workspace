// Auto-generated. Do not edit!

// (in-package kortex_driver.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class AdmittanceMode {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
    }
    else {
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type AdmittanceMode
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type AdmittanceMode
    let len;
    let data = new AdmittanceMode(null);
    return data;
  }

  static getMessageSize(object) {
    return 0;
  }

  static datatype() {
    // Returns string type for a message object
    return 'kortex_driver/AdmittanceMode';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1a52f2d7eb92e509117483a6b9c79ce1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    uint32 UNSPECIFIED_ADMITTANCE_MODE = 0
    
    uint32 CARTESIAN = 1
    
    uint32 JOINT = 2
    
    uint32 NULL_SPACE = 3
    
    uint32 DISABLED = 4
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new AdmittanceMode(null);
    return resolved;
    }
};

// Constants for message
AdmittanceMode.Constants = {
  UNSPECIFIED_ADMITTANCE_MODE: 0,
  CARTESIAN: 1,
  JOINT: 2,
  NULL_SPACE: 3,
  DISABLED: 4,
}

module.exports = AdmittanceMode;
