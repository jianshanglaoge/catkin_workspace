// Generated by gencpp from file odrive_interface/VelocityControl.msg
// DO NOT EDIT!


#ifndef ODRIVE_INTERFACE_MESSAGE_VELOCITYCONTROL_H
#define ODRIVE_INTERFACE_MESSAGE_VELOCITYCONTROL_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>

namespace odrive_interface
{
template <class ContainerAllocator>
struct VelocityControl_
{
  typedef VelocityControl_<ContainerAllocator> Type;

  VelocityControl_()
    : header()
    , axis0_velocity(0.0)
    , axis1_velocity(0.0)  {
    }
  VelocityControl_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , axis0_velocity(0.0)
    , axis1_velocity(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef float _axis0_velocity_type;
  _axis0_velocity_type axis0_velocity;

   typedef float _axis1_velocity_type;
  _axis1_velocity_type axis1_velocity;





  typedef boost::shared_ptr< ::odrive_interface::VelocityControl_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::odrive_interface::VelocityControl_<ContainerAllocator> const> ConstPtr;

}; // struct VelocityControl_

typedef ::odrive_interface::VelocityControl_<std::allocator<void> > VelocityControl;

typedef boost::shared_ptr< ::odrive_interface::VelocityControl > VelocityControlPtr;
typedef boost::shared_ptr< ::odrive_interface::VelocityControl const> VelocityControlConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::odrive_interface::VelocityControl_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::odrive_interface::VelocityControl_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::odrive_interface::VelocityControl_<ContainerAllocator1> & lhs, const ::odrive_interface::VelocityControl_<ContainerAllocator2> & rhs)
{
  return lhs.header == rhs.header &&
    lhs.axis0_velocity == rhs.axis0_velocity &&
    lhs.axis1_velocity == rhs.axis1_velocity;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::odrive_interface::VelocityControl_<ContainerAllocator1> & lhs, const ::odrive_interface::VelocityControl_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace odrive_interface

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::odrive_interface::VelocityControl_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::odrive_interface::VelocityControl_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::odrive_interface::VelocityControl_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::odrive_interface::VelocityControl_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::odrive_interface::VelocityControl_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::odrive_interface::VelocityControl_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::odrive_interface::VelocityControl_<ContainerAllocator> >
{
  static const char* value()
  {
    return "b59885a312e0b694846b6fdb25769d14";
  }

  static const char* value(const ::odrive_interface::VelocityControl_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xb59885a312e0b694ULL;
  static const uint64_t static_value2 = 0x846b6fdb25769d14ULL;
};

template<class ContainerAllocator>
struct DataType< ::odrive_interface::VelocityControl_<ContainerAllocator> >
{
  static const char* value()
  {
    return "odrive_interface/VelocityControl";
  }

  static const char* value(const ::odrive_interface::VelocityControl_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::odrive_interface::VelocityControl_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n"
"float32 axis0_velocity\n"
"float32 axis1_velocity\n"
"\n"
"================================================================================\n"
"MSG: std_msgs/Header\n"
"# Standard metadata for higher-level stamped data types.\n"
"# This is generally used to communicate timestamped data \n"
"# in a particular coordinate frame.\n"
"# \n"
"# sequence ID: consecutively increasing ID \n"
"uint32 seq\n"
"#Two-integer timestamp that is expressed as:\n"
"# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n"
"# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n"
"# time-handling sugar is provided by the client library\n"
"time stamp\n"
"#Frame this data is associated with\n"
"string frame_id\n"
;
  }

  static const char* value(const ::odrive_interface::VelocityControl_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::odrive_interface::VelocityControl_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.axis0_velocity);
      stream.next(m.axis1_velocity);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct VelocityControl_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::odrive_interface::VelocityControl_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::odrive_interface::VelocityControl_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "axis0_velocity: ";
    Printer<float>::stream(s, indent + "  ", v.axis0_velocity);
    s << indent << "axis1_velocity: ";
    Printer<float>::stream(s, indent + "  ", v.axis1_velocity);
  }
};

} // namespace message_operations
} // namespace ros

#endif // ODRIVE_INTERFACE_MESSAGE_VELOCITYCONTROL_H