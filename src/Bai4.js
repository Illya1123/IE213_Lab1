import React from 'react';
import { FormDataContext } from './FormDataContext4';
import './Bai4.css';
import FormInput from './FormIn4';

function Bai4() {
  const { submitted } = React.useContext(FormDataContext);

  return (
    <div className="Bai4">
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
    studentName,
    teacher,
    className,
    date,
    method,
    unfinishTask,
  } = React.useContext(FormDataContext);
  const formattedDate = new Date(date).toLocaleDateString('en-GB');
  return (
    <div className="SubmittedContent_B4">
      <h2 style={{textAlign: "center"}}>Thông tin phiếu theo dõi</h2>
      <div className="content">
        <p>Tên học sinh: {studentName} - Lớp: {className}</p>
        <p>Ngày đăng ký: {formattedDate} - Giáo viên phụ trách: {teacher}</p>
        <p>Những công việc đã được phân công nhưng chưa hoàn thành</p>
        <p>{unfinishTask}</p>
        <p style={{textAlign: "left"}}>Cam kết sẽ hoàn thành tại:  {method}</p>
      </div>
    </div>
  );
};

export default Bai4;