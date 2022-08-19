// Generated by gencpp from file kortex_driver/RobotEventNotificationList.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_ROBOTEVENTNOTIFICATIONLIST_H
#define KORTEX_DRIVER_MESSAGE_ROBOTEVENTNOTIFICATIONLIST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/RobotEventNotification.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct RobotEventNotificationList_
{
  typedef RobotEventNotificationList_<ContainerAllocator> Type;

  RobotEventNotificationList_()
    : notifications()  {
    }
  RobotEventNotificationList_(const ContainerAllocator& _alloc)
    : notifications(_alloc)  {
  (void)_alloc;
    }



   typedef std::vector< ::kortex_driver::RobotEventNotification_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::kortex_driver::RobotEventNotification_<ContainerAllocator> >::other >  _notifications_type;
  _notifications_type notifications;





  typedef boost::shared_ptr< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> const> ConstPtr;

}; // struct RobotEventNotificationList_

typedef ::kortex_driver::RobotEventNotificationList_<std::allocator<void> > RobotEventNotificationList;

typedef boost::shared_ptr< ::kortex_driver::RobotEventNotificationList > RobotEventNotificationListPtr;
typedef boost::shared_ptr< ::kortex_driver::RobotEventNotificationList const> RobotEventNotificationListConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator1> & lhs, const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator2> & rhs)
{
  return lhs.notifications == rhs.notifications;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator1> & lhs, const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
{
  static const char* value()
  {
    return "31f7be45a79909d8e884dbb37990a7f2";
  }

  static const char* value(const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x31f7be45a79909d8ULL;
  static const uint64_t static_value2 = 0xe884dbb37990a7f2ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/RobotEventNotificationList";
  }

  static const char* value(const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"RobotEventNotification[] notifications\n"
"================================================================================\n"
"MSG: kortex_driver/RobotEventNotification\n"
"\n"
"uint32 event\n"
"DeviceHandle handle\n"
"Timestamp timestamp\n"
"UserProfileHandle user_handle\n"
"Connection connection\n"
"================================================================================\n"
"MSG: kortex_driver/DeviceHandle\n"
"\n"
"uint32 device_type\n"
"uint32 device_identifier\n"
"uint32 order\n"
"================================================================================\n"
"MSG: kortex_driver/Timestamp\n"
"\n"
"uint32 sec\n"
"uint32 usec\n"
"================================================================================\n"
"MSG: kortex_driver/UserProfileHandle\n"
"\n"
"uint32 identifier\n"
"uint32 permission\n"
"================================================================================\n"
"MSG: kortex_driver/Connection\n"
"\n"
"UserProfileHandle user_handle\n"
"string connection_information\n"
"uint32 connection_identifier\n"
;
  }

  static const char* value(const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.notifications);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct RobotEventNotificationList_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::RobotEventNotificationList_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::RobotEventNotificationList_<ContainerAllocator>& v)
  {
    s << indent << "notifications[]" << std::endl;
    for (size_t i = 0; i < v.notifications.size(); ++i)
    {
      s << indent << "  notifications[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::kortex_driver::RobotEventNotification_<ContainerAllocator> >::stream(s, indent + "    ", v.notifications[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_ROBOTEVENTNOTIFICATIONLIST_H
