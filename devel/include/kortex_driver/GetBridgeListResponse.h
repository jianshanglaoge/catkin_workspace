// Generated by gencpp from file kortex_driver/GetBridgeListResponse.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GETBRIDGELISTRESPONSE_H
#define KORTEX_DRIVER_MESSAGE_GETBRIDGELISTRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/BridgeList.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct GetBridgeListResponse_
{
  typedef GetBridgeListResponse_<ContainerAllocator> Type;

  GetBridgeListResponse_()
    : output()  {
    }
  GetBridgeListResponse_(const ContainerAllocator& _alloc)
    : output(_alloc)  {
  (void)_alloc;
    }



   typedef  ::kortex_driver::BridgeList_<ContainerAllocator>  _output_type;
  _output_type output;





  typedef boost::shared_ptr< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> const> ConstPtr;

}; // struct GetBridgeListResponse_

typedef ::kortex_driver::GetBridgeListResponse_<std::allocator<void> > GetBridgeListResponse;

typedef boost::shared_ptr< ::kortex_driver::GetBridgeListResponse > GetBridgeListResponsePtr;
typedef boost::shared_ptr< ::kortex_driver::GetBridgeListResponse const> GetBridgeListResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator2> & rhs)
{
  return lhs.output == rhs.output;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bf36ac202e627c34848b7cda25e6a013";
  }

  static const char* value(const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xbf36ac202e627c34ULL;
  static const uint64_t static_value2 = 0x848b7cda25e6a013ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/GetBridgeListResponse";
  }

  static const char* value(const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "BridgeList output\n"
"\n"
"================================================================================\n"
"MSG: kortex_driver/BridgeList\n"
"\n"
"BridgeConfig[] bridgeConfig\n"
"================================================================================\n"
"MSG: kortex_driver/BridgeConfig\n"
"\n"
"uint32 device_identifier\n"
"uint32 bridgetype\n"
"BridgePortConfig port_config\n"
"BridgeIdentifier bridge_id\n"
"================================================================================\n"
"MSG: kortex_driver/BridgePortConfig\n"
"\n"
"uint32 target_port\n"
"uint32 out_port\n"
"================================================================================\n"
"MSG: kortex_driver/BridgeIdentifier\n"
"\n"
"uint32 bridge_id\n"
;
  }

  static const char* value(const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.output);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct GetBridgeListResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::GetBridgeListResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::GetBridgeListResponse_<ContainerAllocator>& v)
  {
    s << indent << "output: ";
    s << std::endl;
    Printer< ::kortex_driver::BridgeList_<ContainerAllocator> >::stream(s, indent + "  ", v.output);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GETBRIDGELISTRESPONSE_H
