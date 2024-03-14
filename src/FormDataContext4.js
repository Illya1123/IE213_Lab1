import React, { createContext, useState } from 'react';
export const FormDataContext4 = createContext();

export const FormDataProvider4 = ({ children }) => {
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [ClassRoom, setClassRoom] = useState('');
  const [date, setDate] = useState('');
  const [work, setWork] = useState('');
  const [commit, setCommit] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Xử lý logic để xuất toàn bộ nội dung đã nhập tại đây
    console.log("Họ tên học sinh:", name);
    console.log("Giáo viên phụ trách:", teacher);
    console.log("Lớp:", ClassRoom);
    console.log("Ngày:", date);
    console.log("Những việc phân công chưa làm:", work);
    console.log("Cam kết sẽ hoàn thành tại:", commit)
  };

  const resetForm = () => {
    setName('');
    setTeacher('');
    setClassRoom('');
    setDate('');
    setWork('');
    setCommit('');
    setSubmitted(false);
  };

  const contextValue = {
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
    submitted,
    handleSubmit,
    resetForm,
  };

  return (
    <FormDataContext4.Provider value={contextValue}>
      {children}
    </FormDataContext4.Provider>
  );
};