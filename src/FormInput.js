import React, { useState, useContext } from 'react';
import { FormDataContext } from './FormDataContext5';

const FormInput = () => {
  const {
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
  } = useContext(FormDataContext);

  const handleEventTypeChange = (value) => {
    if (eventType.includes(value)) {
      setEventType(eventType.filter((type) => type !== value));
    } else {
      setEventType([...eventType, value]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="Title">
        <text>THÔNG TIN ĐẶT CHỖ</text>
      </div>
      <div className="Content1">
        <label>Số khách tham dự bữa tiệc của quý khách:</label>
        <input
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          className="Input2"
          type="number"
          name="guest"
          required
          disabled={submitted}
        />
        <label>Ngày:</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="Input2"
          type="date"
          name="date"
          required
          disabled={submitted}
        />
      </div>
      <div className="Content2">
      <label>Loại tiệc:</label>
      <input
        className="Checkbox"
        type="checkbox"
        name="Tiệc Sáng"
        disabled={submitted}
        checked={eventType.includes('Tiệc Sáng')}
        onChange={() => handleEventTypeChange('Tiệc Sáng')}
      />
      <label> Tiệc sáng </label>
      <input
        className="Checkbox"
        type="checkbox"
        name="Tiệc Trưa"
        disabled={submitted}
        checked={eventType.includes('Tiệc Trưa')}
        onChange={() => handleEventTypeChange('Tiệc Trưa')}
      />
      <label> Tiệc trưa </label>
      <input
        className="Checkbox"
        type="checkbox"
        name="Tiệc Tối"
        disabled={submitted}
        checked={eventType.includes('Tiệc Tối')}
        onChange={() => handleEventTypeChange('Tiệc Tối')}
      />
      <label> Tiệc tối </label>
    </div>
        <div className="Content2">
  <label>Địa điểm:</label>
  <div className="RadioGroup">
    <input
      type="radio"
      id="inside"
      name="inside"
      value="Trong nhà"
      checked={location === "Trong nhà"}
      onChange={(e) => setLocation(e.target.value)}
      disabled={submitted}
    />
    <label htmlFor="Trong nhà">Trong nhà</label>
    <input
      type="radio"
      id="outside"
      name="outside"
      value="Ngoài trời"
      checked={location === "Ngoài trời"}
      onChange={(e) => setLocation(e.target.value)}
      disabled={submitted}
    />
    <label htmlFor="Ngoài trời">Ngoài trời</label>
  </div>
</div>
      <div className="Content2">
        <label>Tên quý khách:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="Input2"
          type="text"
          name="name"
          required
          disabled={submitted}
        />
      {/* </div>
      <div className="Content"> */}
        <label>Địa chỉ liên lạc:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="Input3"
          name="address"
          required
          disabled={submitted}
        />
      </div>
      <div className="Content2">
  <label>Độ tuổi:</label>
  <select
    value={age}
    onChange={(e) => setAge(e.target.value)}
    className="Input3"
    name="age"
    required
    disabled={submitted}
  >
    <option value="">Độ tuổi</option>
    <option value="Dưới 19 tuổi">Dưới 19 tuổi</option>
    <option value="Từ 19 đến 34 tuổi">Từ 19 đến 34 tuổi</option>
    <option value="Từ 34 đến 60 tuổi">Từ 34 đến 60 tuổi</option>
    <option value="Trên 60 tuổi">Trên 60 tuổi</option>
  </select>
  <label>Giới tính:</label>
  <div className="RadioGroup">
    <input
      type="radio"
      id="male"
      name="gender"
      value="Nam"
      checked={gender === "Nam"}
      onChange={(e) => setGender(e.target.value)}
      required
      disabled={submitted}
    />
    <label htmlFor="male">Nam</label>
    <input
      type="radio"
      id="female"
      name="gender"
      value="Nữ"
      checked={gender === "Nữ"}
      onChange={(e) => setGender(e.target.value)}
      required
      disabled={submitted}
    />
    <label htmlFor="female">Nữ</label>
  </div>
</div>
<div className="Content2"> 
<label>Quý khách biết đến nhà hàng của chúng tôi qua:</label> 
<select 
value={method} 
onChange={(e) => setMethod(Array.from(e.target.selectedOptions, option => option.value))} 
className="Input4" 
name="method" 
required 
disabled={submitted} 
multiple 
> 
<option value="Báo chí">Báo chí</option> 
<option value="Đài phát thanh">Đài phát thanh</option> 
<option value="Tivi">Tivi</option> 
</select> 
</div>
<p>Các yêu cầu khác của quý khách:</p>
      <div className="Content2">
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          className="Input1"
          name="request"
          style={{ height: '80px' }}
          required
          disabled={submitted}
        />
      </div>
      
      <div className="DatCho">
        <button className="Submit" type="submit" disabled={submitted}>
          Đặt chỗ
        </button>
      </div>
    </form>
  );
};

export default FormInput;