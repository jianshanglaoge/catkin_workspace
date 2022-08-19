// Generated by gencpp from file kortex_driver/SystemTime.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_SYSTEMTIME_H
#define KORTEX_DRIVER_MESSAGE_SYSTEMTIME_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace kortex_driver
{
template <class ContainerAllocator>
struct SystemTime_
{
  typedef SystemTime_<ContainerAllocator> Type;

  SystemTime_()
    : sec(0)
    , min(0)
    , hour(0)
    , mday(0)
    , mon(0)
    , year(0)  {
    }
  SystemTime_(const ContainerAllocator& _alloc)
    : sec(0)
    , min(0)
    , hour(0)
    , mday(0)
    , mon(0)
    , year(0)  {
  (void)_alloc;
    }



   typedef uint32_t _sec_type;
  _sec_type sec;

   typedef uint32_t _min_type;
  _min_type min;

   typedef uint32_t _hour_type;
  _hour_type hour;

   typedef uint32_t _mday_type;
  _mday_type mday;

   typedef uint32_t _mon_type;
  _mon_type mon;

   typedef uint32_t _year_type;
  _year_type year;





  typedef boost::shared_ptr< ::kortex_driver::SystemTime_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::SystemTime_<ContainerAllocator> const> ConstPtr;

}; // struct SystemTime_

typedef ::kortex_driver::SystemTime_<std::allocator<void> > SystemTime;

typedef boost::shared_ptr< ::kortex_driver::SystemTime > SystemTimePtr;
typedef boost::shared_ptr< ::kortex_driver::SystemTime const> SystemTimeConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::SystemTime_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::SystemTime_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::SystemTime_<ContainerAllocator1> & lhs, const ::kortex_driver::SystemTime_<ContainerAllocator2> & rhs)
{
  return lhs.sec == rhs.sec &&
    lhs.min == rhs.min &&
    lhs.hour == rhs.hour &&
    lhs.mday == rhs.mday &&
    lhs.mon == rhs.mon &&
    lhs.year == rhs.year;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::SystemTime_<ContainerAllocator1> & lhs, const ::kortex_driver::SystemTime_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::SystemTime_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::SystemTime_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::SystemTime_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::SystemTime_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::SystemTime_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::SystemTime_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::SystemTime_<ContainerAllocator> >
{
  static const char* value()
  {
    return "c3c3b4e6f22b647897641173820f05db";
  }

  static const char* value(const ::kortex_driver::SystemTime_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xc3c3b4e6f22b6478ULL;
  static const uint64_t static_value2 = 0x97641173820f05dbULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::SystemTime_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/SystemTime";
  }

  static const char* value(const ::kortex_driver::SystemTime_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::SystemTime_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"uint32 sec\n"
"uint32 min\n"
"uint32 hour\n"
"uint32 mday\n"
"uint32 mon\n"
"uint32 year\n"
;
  }

  static const char* value(const ::kortex_driver::SystemTime_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::SystemTime_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.sec);
      stream.next(m.min);
      stream.next(m.hour);
      stream.next(m.mday);
      stream.next(m.mon);
      stream.next(m.year);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct SystemTime_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::SystemTime_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::SystemTime_<ContainerAllocator>& v)
  {
    s << indent << "sec: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.sec);
    s << indent << "min: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.min);
    s << indent << "hour: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.hour);
    s << indent << "mday: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.mday);
    s << indent << "mon: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.mon);
    s << indent << "year: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.year);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_SYSTEMTIME_H