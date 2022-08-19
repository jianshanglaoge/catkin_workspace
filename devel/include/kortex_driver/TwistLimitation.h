// Generated by gencpp from file kortex_driver/TwistLimitation.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_TWISTLIMITATION_H
#define KORTEX_DRIVER_MESSAGE_TWISTLIMITATION_H


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
struct TwistLimitation_
{
  typedef TwistLimitation_<ContainerAllocator> Type;

  TwistLimitation_()
    : linear(0.0)
    , angular(0.0)  {
    }
  TwistLimitation_(const ContainerAllocator& _alloc)
    : linear(0.0)
    , angular(0.0)  {
  (void)_alloc;
    }



   typedef float _linear_type;
  _linear_type linear;

   typedef float _angular_type;
  _angular_type angular;





  typedef boost::shared_ptr< ::kortex_driver::TwistLimitation_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::TwistLimitation_<ContainerAllocator> const> ConstPtr;

}; // struct TwistLimitation_

typedef ::kortex_driver::TwistLimitation_<std::allocator<void> > TwistLimitation;

typedef boost::shared_ptr< ::kortex_driver::TwistLimitation > TwistLimitationPtr;
typedef boost::shared_ptr< ::kortex_driver::TwistLimitation const> TwistLimitationConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::TwistLimitation_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::TwistLimitation_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::TwistLimitation_<ContainerAllocator1> & lhs, const ::kortex_driver::TwistLimitation_<ContainerAllocator2> & rhs)
{
  return lhs.linear == rhs.linear &&
    lhs.angular == rhs.angular;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::TwistLimitation_<ContainerAllocator1> & lhs, const ::kortex_driver::TwistLimitation_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::TwistLimitation_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::TwistLimitation_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::TwistLimitation_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
{
  static const char* value()
  {
    return "9d5c2dcd348ac8f76ce2a4307bd63a13";
  }

  static const char* value(const ::kortex_driver::TwistLimitation_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x9d5c2dcd348ac8f7ULL;
  static const uint64_t static_value2 = 0x6ce2a4307bd63a13ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/TwistLimitation";
  }

  static const char* value(const ::kortex_driver::TwistLimitation_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"float32 linear\n"
"float32 angular\n"
;
  }

  static const char* value(const ::kortex_driver::TwistLimitation_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.linear);
      stream.next(m.angular);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct TwistLimitation_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::TwistLimitation_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::TwistLimitation_<ContainerAllocator>& v)
  {
    s << indent << "linear: ";
    Printer<float>::stream(s, indent + "  ", v.linear);
    s << indent << "angular: ";
    Printer<float>::stream(s, indent + "  ", v.angular);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_TWISTLIMITATION_H
