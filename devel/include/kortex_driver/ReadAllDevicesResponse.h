// Generated by gencpp from file kortex_driver/ReadAllDevicesResponse.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_READALLDEVICESRESPONSE_H
#define KORTEX_DRIVER_MESSAGE_READALLDEVICESRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/DeviceHandles.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct ReadAllDevicesResponse_
{
  typedef ReadAllDevicesResponse_<ContainerAllocator> Type;

  ReadAllDevicesResponse_()
    : output()  {
    }
  ReadAllDevicesResponse_(const ContainerAllocator& _alloc)
    : output(_alloc)  {
  (void)_alloc;
    }



   typedef  ::kortex_driver::DeviceHandles_<ContainerAllocator>  _output_type;
  _output_type output;





  typedef boost::shared_ptr< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> const> ConstPtr;

}; // struct ReadAllDevicesResponse_

typedef ::kortex_driver::ReadAllDevicesResponse_<std::allocator<void> > ReadAllDevicesResponse;

typedef boost::shared_ptr< ::kortex_driver::ReadAllDevicesResponse > ReadAllDevicesResponsePtr;
typedef boost::shared_ptr< ::kortex_driver::ReadAllDevicesResponse const> ReadAllDevicesResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator2> & rhs)
{
  return lhs.output == rhs.output;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "a298fcf8896256a81f2b64c04ef7cfae";
  }

  static const char* value(const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xa298fcf8896256a8ULL;
  static const uint64_t static_value2 = 0x1f2b64c04ef7cfaeULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/ReadAllDevicesResponse";
  }

  static const char* value(const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "DeviceHandles output\n"
"\n"
"================================================================================\n"
"MSG: kortex_driver/DeviceHandles\n"
"\n"
"DeviceHandle[] device_handle\n"
"================================================================================\n"
"MSG: kortex_driver/DeviceHandle\n"
"\n"
"uint32 device_type\n"
"uint32 device_identifier\n"
"uint32 order\n"
;
  }

  static const char* value(const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.output);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ReadAllDevicesResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::ReadAllDevicesResponse_<ContainerAllocator>& v)
  {
    s << indent << "output: ";
    s << std::endl;
    Printer< ::kortex_driver::DeviceHandles_<ContainerAllocator> >::stream(s, indent + "  ", v.output);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_READALLDEVICESRESPONSE_H
