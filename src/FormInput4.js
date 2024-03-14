import React, { useContext } from 'react';
import { FormDataContext4 } from './FormDataContext4';
const FormInput4 = () => {
  const {
    name,
    setName,
    teacher,
    setTeacher,
    ClassRoom,
    setClassRoom,
    date,
    setDate,
    work,
    setWork,
    commit,
    setCommit,
    handleSubmit,
    submitted,
  } = useContext(FormDataContext4);
  const handleCheckboxChange = (value) => {
    if (commit.includes(value)) {
      setCommit(commit.filter((item) => item !== value));
    } else {
      setCommit([...commit, value]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <div className="TitleHT">
        <text>THEO DÕI HỌC TẬP</text>
      </div>
      <div className="ContentHT">
        <label>Họ tên học sinh:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="InputHT"
          type="text"
          name="name"
          required
          disabled={submitted}
        />
      </div>
      <div className="ContentHT">
        <label>Giáo viên phụ trách:</label>
        <input
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          className="InputHT"
          type="text"
          name="teacher"
          required
          disabled={submitted}
        />
      </div>
      <div className="ContentLop">
        <label>Lớp:</label>
        <input
          value={ClassRoom}
          onChange={(e) => setClassRoom(e.target.value)}
          className="InputLop"
          type="text"
          name="ClassRoom"
          required
          disabled={submitted}
        />
        <label>Ngày:</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="InputLop"
          type="date"
          name="date"
          required
          disabled={submitted}
        />
      </div>
      <p>Những việc phân công chưa làm:</p> 
      <div className="ContentHT">
        <textarea
          value={work}
          onChange={(e) => setWork(e.target.value)}
          className="InputHT"
          name="work"
          style={{ height: '80px' }}
          required
          disabled={submitted}
        />
      </div>
      <p>Chọn hình thức hoàn thành</p>
      <div className="ContentHTHT">
  <input
    className="CheckboxHT"
    type="checkbox"
    name="Tại Lớp"
    disabled={submitted}
    checked={commit.includes('Tại Lớp')}
    onChange={() => handleCheckboxChange('Tại Lớp')}
  />
  <label> Những việc chưa làm sẽ được hoàn thành ngay tại lớp </label>
</div>
<div className="ContentHTHT">
  <input
    className="CheckboxHT"
    type="checkbox"
    name="Tại Nhà"
    disabled={submitted}
    checked={commit.includes('Tại Nhà')}
    onChange={() => handleCheckboxChange('Tại Nhà')}
  />
  <label> Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau </label>
</div>
      <div className="GhiNhan">
        <button className="SubmitHT" type="submit" disabled={submitted}>
          Ghi nhận
        </button>
      </div>
    </form>
  );
};

export default FormInput4;