import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [guest, setGuest] = useState(0);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [method, setMethod] = useState('');
  const [request, setRequest] = useState('');
  const [eventType, setEventType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Xử lý logic để xuất toàn bộ nội dung đã nhập tại đây
    console.log("Họ tên:", name);
    console.log("Độ tuổi:", age);
    console.log("Giới tính:", gender);
    console.log("Địa chỉ",address);
    console.log("Số khách tham dự bữa tiệc:", guest);
    console.log("Ngày đặt tiệc", date);
    console.log("Các yêu cầu kèm theo", request);
    console.log("Loại tiệc", eventType);
    console.log("Quý khách biết đến nhà hàng của chúng tôi thông qua:", method);
  };

  const resetForm = () => {
    setGuest('');
    setDate('');
    setName('');
    setAge('');
    setAddress('');
    setLocation('');
    setGender('');
    setMethod('');
    setRequest('');
    setEventType('');
    setSubmitted(false);
  };

  const contextValue = {
    guest,
    setGuest,
    name,
    setName,
    age,
    setAge,
    address,
    setAddress,
    date,
    setDate,
    location,
    setLocation,
    gender,
    setGender,
    method,
    setMethod,
    request,
    setRequest,
    eventType,
    setEventType,
    submitted,
    handleSubmit,
    resetForm,
  };

  return (
    <FormDataContext.Provider value={contextValue}>
      {children}
    </FormDataContext.Provider>
  );
};