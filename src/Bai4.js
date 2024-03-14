import React from 'react';
import { FormDataContext4 } from './FormDataContext4';
import './Bai4.css';
import FormInput4 from './FormInput4';

function Bai4() {
  const { submitted } = React.useContext(FormDataContext4);

  return (
    <div className="Bai4">
      <div>
        {submitted ? (
          <SubmittedContent />
        ) : (
          <div>
            <FormInput4 />
          </div>
        )}
      </div>
    </div>
  );
}

const SubmittedContent = () => {
  const {
    name,
    teacher,
    ClassRoom,
    date,
    work,
    commit,
  } = React.useContext(FormDataContext4);
  const formattedDate = new Date(date).toLocaleDateString('en-GB');
  const formattedCommit = commit.join(' - ');
  return (
    <div className="SubmittedContentHT">
      <h2>Thông tin phiếu theo dõi</h2>
      <div className="content">
        <p>Tên học sinh: {name} - Lớp: {ClassRoom}</p>
        <p>Ngày đăng ký: {formattedDate} - Giáo viên phụ trách: {teacher}</p>
        <p>Những công việc đã được phân công nhưng chưa hoàn thành:</p>
        <p> {work}</p>
        <p>Cam kết sẽ hoàn thành tại: {formattedCommit}</p>
      </div>
    </div>
  );
};

export default Bai4;