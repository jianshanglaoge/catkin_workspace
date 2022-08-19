// Generated by gencpp from file kortex_driver/GpioConfigurationList.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GPIOCONFIGURATIONLIST_H
#define KORTEX_DRIVER_MESSAGE_GPIOCONFIGURATIONLIST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/Base_GpioConfiguration.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct GpioConfigurationList_
{
  typedef GpioConfigurationList_<ContainerAllocator> Type;

  GpioConfigurationList_()
    : port_configurations()  {
    }
  GpioConfigurationList_(const ContainerAllocator& _alloc)
    : port_configurations(_alloc)  {
  (void)_alloc;
    }



   typedef std::vector< ::kortex_driver::Base_GpioConfiguration_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::kortex_driver::Base_GpioConfiguration_<ContainerAllocator> >::other >  _port_configurations_type;
  _port_configurations_type port_configurations;





  typedef boost::shared_ptr< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> const> ConstPtr;

}; // struct GpioConfigurationList_

typedef ::kortex_driver::GpioConfigurationList_<std::allocator<void> > GpioConfigurationList;

typedef boost::shared_ptr< ::kortex_driver::GpioConfigurationList > GpioConfigurationListPtr;
typedef boost::shared_ptr< ::kortex_driver::GpioConfigurationList const> GpioConfigurationListConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::GpioConfigurationList_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::GpioConfigurationList_<ContainerAllocator1> & lhs, const ::kortex_driver::GpioConfigurationList_<ContainerAllocator2> & rhs)
{
  return lhs.port_configurations == rhs.port_configurations;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::GpioConfigurationList_<ContainerAllocator1> & lhs, const ::kortex_driver::GpioConfigurationList_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
{
  static const char* value()
  {
    return "2692838fc0bc85259f7645a61387ad92";
  }

  static const char* value(const ::kortex_driver::GpioConfigurationList_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x2692838fc0bc8525ULL;
  static const uint64_t static_value2 = 0x9f7645a61387ad92ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/GpioConfigurationList";
  }

  static const char* value(const ::kortex_driver::GpioConfigurationList_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"Base_GpioConfiguration[] port_configurations\n"
"================================================================================\n"
"MSG: kortex_driver/Base_GpioConfiguration\n"
"\n"
"uint32 port_number\n"
"GpioPinConfiguration[] pin_configurations\n"
"================================================================================\n"
"MSG: kortex_driver/GpioPinConfiguration\n"
"\n"
"uint32 pin_id\n"
"uint32 pin_property\n"
"bool output_enable\n"
"bool default_output_value\n"
;
  }

  static const char* value(const ::kortex_driver::GpioConfigurationList_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.port_configurations);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct GpioConfigurationList_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::GpioConfigurationList_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::GpioConfigurationList_<ContainerAllocator>& v)
  {
    s << indent << "port_configurations[]" << std::endl;
    for (size_t i = 0; i < v.port_configurations.size(); ++i)
    {
      s << indent << "  port_configurations[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::kortex_driver::Base_GpioConfiguration_<ContainerAllocator> >::stream(s, indent + "    ", v.port_configurations[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GPIOCONFIGURATIONLIST_H
