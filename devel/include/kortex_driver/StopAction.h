// Generated by gencpp from file kortex_driver/StopAction.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_STOPACTION_H
#define KORTEX_DRIVER_MESSAGE_STOPACTION_H

#include <ros/service_traits.h>


#include <kortex_driver/StopActionRequest.h>
#include <kortex_driver/StopActionResponse.h>


namespace kortex_driver
{

struct StopAction
{

typedef StopActionRequest Request;
typedef StopActionResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct StopAction
} // namespace kortex_driver


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::kortex_driver::StopAction > {
  static const char* value()
  {
    return "f335b819dc59099fe3124b36f140ad07";
  }

  static const char* value(const ::kortex_driver::StopAction&) { return value(); }
};

template<>
struct DataType< ::kortex_driver::StopAction > {
  static const char* value()
  {
    return "kortex_driver/StopAction";
  }

  static const char* value(const ::kortex_driver::StopAction&) { return value(); }
};


// service_traits::MD5Sum< ::kortex_driver::StopActionRequest> should match
// service_traits::MD5Sum< ::kortex_driver::StopAction >
template<>
struct MD5Sum< ::kortex_driver::StopActionRequest>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::StopAction >::value();
  }
  static const char* value(const ::kortex_driver::StopActionRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::StopActionRequest> should match
// service_traits::DataType< ::kortex_driver::StopAction >
template<>
struct DataType< ::kortex_driver::StopActionRequest>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::StopAction >::value();
  }
  static const char* value(const ::kortex_driver::StopActionRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::kortex_driver::StopActionResponse> should match
// service_traits::MD5Sum< ::kortex_driver::StopAction >
template<>
struct MD5Sum< ::kortex_driver::StopActionResponse>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::StopAction >::value();
  }
  static const char* value(const ::kortex_driver::StopActionResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::StopActionResponse> should match
// service_traits::DataType< ::kortex_driver::StopAction >
template<>
struct DataType< ::kortex_driver::StopActionResponse>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::StopAction >::value();
  }
  static const char* value(const ::kortex_driver::StopActionResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_STOPACTION_H