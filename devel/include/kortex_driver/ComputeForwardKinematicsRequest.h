// Generated by gencpp from file kortex_driver/ComputeForwardKinematicsRequest.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_COMPUTEFORWARDKINEMATICSREQUEST_H
#define KORTEX_DRIVER_MESSAGE_COMPUTEFORWARDKINEMATICSREQUEST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/JointAngles.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct ComputeForwardKinematicsRequest_
{
  typedef ComputeForwardKinematicsRequest_<ContainerAllocator> Type;

  ComputeForwardKinematicsRequest_()
    : input()  {
    }
  ComputeForwardKinematicsRequest_(const ContainerAllocator& _alloc)
    : input(_alloc)  {
  (void)_alloc;
    }



   typedef  ::kortex_driver::JointAngles_<ContainerAllocator>  _input_type;
  _input_type input;





  typedef boost::shared_ptr< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> const> ConstPtr;

}; // struct ComputeForwardKinematicsRequest_

typedef ::kortex_driver::ComputeForwardKinematicsRequest_<std::allocator<void> > ComputeForwardKinematicsRequest;

typedef boost::shared_ptr< ::kortex_driver::ComputeForwardKinematicsRequest > ComputeForwardKinematicsRequestPtr;
typedef boost::shared_ptr< ::kortex_driver::ComputeForwardKinematicsRequest const> ComputeForwardKinematicsRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator1> & lhs, const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator2> & rhs)
{
  return lhs.input == rhs.input;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator1> & lhs, const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "44544f4fe6207865aaa76a373c777e04";
  }

  static const char* value(const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x44544f4fe6207865ULL;
  static const uint64_t static_value2 = 0xaaa76a373c777e04ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/ComputeForwardKinematicsRequest";
  }

  static const char* value(const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "JointAngles input\n"
"\n"
"================================================================================\n"
"MSG: kortex_driver/JointAngles\n"
"\n"
"JointAngle[] joint_angles\n"
"================================================================================\n"
"MSG: kortex_driver/JointAngle\n"
"\n"
"uint32 joint_identifier\n"
"float32 value\n"
;
  }

  static const char* value(const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.input);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ComputeForwardKinematicsRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::ComputeForwardKinematicsRequest_<ContainerAllocator>& v)
  {
    s << indent << "input: ";
    s << std::endl;
    Printer< ::kortex_driver::JointAngles_<ContainerAllocator> >::stream(s, indent + "  ", v.input);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_COMPUTEFORWARDKINEMATICSREQUEST_H
