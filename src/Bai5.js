import React from 'react';
import { FormDataContext } from './FormDataContext5';
import './Bai5.css';
import FormInput from './FormIn5';

function Bai5() {
  const { submitted } = React.useContext(FormDataContext);

  return (
    <div className="Bai5">
      <div style={{ padding: '10px' }}>
        {submitted ? (
          <SubmittedContent />
        ) : (
          <div>
            <FormInput />
          </div>
        )}
      </div>
    </div>
  );
}

const SubmittedContent = () => {
  const {
    name,
    guest,
    address,
    age,
    date,
    location,
    gender,
    method,
    request,
    eventType,
  } = React.useContext(FormDataContext);
  const formattedRequests = request.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  const currentDate = new Date().toLocaleString();
  const formattedDate = new Date(date).toLocaleDateString('en-GB');
  return (
    <div className="SubmittedContent_B5">
      <h2 className='H2'>THÔNG TIN ĐẶT CHỖ</h2>
      <div className="content">
        <div className="KH">
        <h4>Thông tin khách hàng</h4>
        <p>Họ tên: {name} - Độ tuổi: {age} / Giới tính: {gender}</p>
        <p>Địa chỉ: {address}</p>
        </div>
        <div className="DC">
        <h4>Thông tin đặt chỗ</h4>
        <p>Số khách tham gia bữa tiệc: {guest} - Ngày đặt tiệc: {formattedDate}</p>
        <p>Loại tiệc: - {eventType} / Địa điểm: {location}</p>
        </div>
        <div className="YC">
        <h4><i>Các yêu cầu kèm theo: </i></h4>
        <pre style={{ paddingLeft: '5%' }}>{formattedRequests}</pre>
        </div>
        <p style={{textAlign: "center"}}><i>Quý khách biết đến nhà hàng của chúng tôi qua:  {method.join(", ")}</i></p>
        <p>Chúng tôi nhận được thông tin đặt chỗ của quý khách vào lúc: <b>{currentDate}</b></p>
      </div>
    </div>
  );
};

export default Bai5;