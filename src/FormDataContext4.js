import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [studentName, setstudentName] = useState('');
  const [date, setDate] = useState('');
  const [className, setclassName] = useState('');
  const [teacher, setteacher] = useState('');
  const [method, setMethod] = useState('');
  const [unfinishTask, setunfinishTask] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Xử lý logic để xuất toàn bộ nội dung đã nhập tại đây
    console.log("Tên học sinh:", studentName);
    console.log("Lớp:", className);
    console.log("Ngày đăng ký:", date);
    console.log("Giáo viên phụ trách:",teacher);
    console.log("Những công việc đã được phân công nhưng chưa hoàn thành:", unfinishTask);
    console.log("Cam kết sẽ hoàn thành tại", method);
  };

  const resetForm = () => {
    setstudentName('');
    setclassName('');
    setDate('');
    setteacher('');
    setunfinishTask('');
    setMethod('');
    setSubmitted(false);
  };

  const contextValue = {
    studentName,
    setstudentName,
    teacher,
    setteacher,
    className,
    setclassName,
    date,
    setDate,
    method,
    setMethod,
    unfinishTask,
    setunfinishTask,
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