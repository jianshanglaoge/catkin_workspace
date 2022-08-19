// Generated by gencpp from file kortex_driver/GetAllJointsTorqueHardLimitationResponse.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GETALLJOINTSTORQUEHARDLIMITATIONRESPONSE_H
#define KORTEX_DRIVER_MESSAGE_GETALLJOINTSTORQUEHARDLIMITATIONRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/JointsLimitationsList.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct GetAllJointsTorqueHardLimitationResponse_
{
  typedef GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> Type;

  GetAllJointsTorqueHardLimitationResponse_()
    : output()  {
    }
  GetAllJointsTorqueHardLimitationResponse_(const ContainerAllocator& _alloc)
    : output(_alloc)  {
  (void)_alloc;
    }



   typedef  ::kortex_driver::JointsLimitationsList_<ContainerAllocator>  _output_type;
  _output_type output;





  typedef boost::shared_ptr< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> const> ConstPtr;

}; // struct GetAllJointsTorqueHardLimitationResponse_

typedef ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<std::allocator<void> > GetAllJointsTorqueHardLimitationResponse;

typedef boost::shared_ptr< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse > GetAllJointsTorqueHardLimitationResponsePtr;
typedef boost::shared_ptr< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse const> GetAllJointsTorqueHardLimitationResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator2> & rhs)
{
  return lhs.output == rhs.output;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "51e6c4b6163d0d3c0b0ad680758e82f2";
  }

  static const char* value(const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x51e6c4b6163d0d3cULL;
  static const uint64_t static_value2 = 0x0b0ad680758e82f2ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/GetAllJointsTorqueHardLimitationResponse";
  }

  static const char* value(const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "JointsLimitationsList output\n"
"\n"
"================================================================================\n"
"MSG: kortex_driver/JointsLimitationsList\n"
"\n"
"JointLimitation[] joints_limitations\n"
"================================================================================\n"
"MSG: kortex_driver/JointLimitation\n"
"\n"
"uint32 joint_identifier\n"
"uint32 type\n"
"float32 value\n"
;
  }

  static const char* value(const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.output);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct GetAllJointsTorqueHardLimitationResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::GetAllJointsTorqueHardLimitationResponse_<ContainerAllocator>& v)
  {
    s << indent << "output: ";
    s << std::endl;
    Printer< ::kortex_driver::JointsLimitationsList_<ContainerAllocator> >::stream(s, indent + "  ", v.output);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GETALLJOINTSTORQUEHARDLIMITATIONRESPONSE_H
