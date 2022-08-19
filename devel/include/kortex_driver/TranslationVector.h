// Generated by gencpp from file kortex_driver/TranslationVector.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_TRANSLATIONVECTOR_H
#define KORTEX_DRIVER_MESSAGE_TRANSLATIONVECTOR_H


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
struct TranslationVector_
{
  typedef TranslationVector_<ContainerAllocator> Type;

  TranslationVector_()
    : t_x(0.0)
    , t_y(0.0)
    , t_z(0.0)  {
    }
  TranslationVector_(const ContainerAllocator& _alloc)
    : t_x(0.0)
    , t_y(0.0)
    , t_z(0.0)  {
  (void)_alloc;
    }



   typedef float _t_x_type;
  _t_x_type t_x;

   typedef float _t_y_type;
  _t_y_type t_y;

   typedef float _t_z_type;
  _t_z_type t_z;





  typedef boost::shared_ptr< ::kortex_driver::TranslationVector_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::TranslationVector_<ContainerAllocator> const> ConstPtr;

}; // struct TranslationVector_

typedef ::kortex_driver::TranslationVector_<std::allocator<void> > TranslationVector;

typedef boost::shared_ptr< ::kortex_driver::TranslationVector > TranslationVectorPtr;
typedef boost::shared_ptr< ::kortex_driver::TranslationVector const> TranslationVectorConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::TranslationVector_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::TranslationVector_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::TranslationVector_<ContainerAllocator1> & lhs, const ::kortex_driver::TranslationVector_<ContainerAllocator2> & rhs)
{
  return lhs.t_x == rhs.t_x &&
    lhs.t_y == rhs.t_y &&
    lhs.t_z == rhs.t_z;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::TranslationVector_<ContainerAllocator1> & lhs, const ::kortex_driver::TranslationVector_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::TranslationVector_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::TranslationVector_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::TranslationVector_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::TranslationVector_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::TranslationVector_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::TranslationVector_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::TranslationVector_<ContainerAllocator> >
{
  static const char* value()
  {
    return "1c59f12cff6754b509028be4dd466647";
  }

  static const char* value(const ::kortex_driver::TranslationVector_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x1c59f12cff6754b5ULL;
  static const uint64_t static_value2 = 0x09028be4dd466647ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::TranslationVector_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/TranslationVector";
  }

  static const char* value(const ::kortex_driver::TranslationVector_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::TranslationVector_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"float32 t_x\n"
"float32 t_y\n"
"float32 t_z\n"
;
  }

  static const char* value(const ::kortex_driver::TranslationVector_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::TranslationVector_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.t_x);
      stream.next(m.t_y);
      stream.next(m.t_z);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct TranslationVector_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::TranslationVector_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::TranslationVector_<ContainerAllocator>& v)
  {
    s << indent << "t_x: ";
    Printer<float>::stream(s, indent + "  ", v.t_x);
    s << indent << "t_y: ";
    Printer<float>::stream(s, indent + "  ", v.t_y);
    s << indent << "t_z: ";
    Printer<float>::stream(s, indent + "  ", v.t_z);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_TRANSLATIONVECTOR_H