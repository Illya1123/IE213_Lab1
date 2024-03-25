import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext4';
import './Bai4.css';

const Bai4 = () => {
    const { submitted } = useContext(FormDataContext);

    return (
        <div className="Bai4">
            <div style={{ padding: '10px' }}>
                {submitted ? <SubmittedContent /> : <FormInput />}
            </div>
        </div>
    );
};

const SubmittedContent = () => {
    const { studentName, teacher, className, date, method, unfinishTask } =
        useContext(FormDataContext);
    const formattedDate = new Date(date).toLocaleDateString('en-GB');

    return (
        <div className="SubmittedContent_B4">
            <h2 style={{ textAlign: 'center' }}>Thông tin phiếu theo dõi</h2>
            <div className="content">
                <p>
                    Tên học sinh: {studentName} - Lớp: {className}
                </p>
                <p>
                    Ngày đăng ký: {formattedDate} - Giáo viên phụ trách: {teacher}
                </p>
                <p>Những công việc đã được phân công nhưng chưa hoàn thành</p>
                <p>{unfinishTask}</p>
                <p style={{ textAlign: 'left' }}>Cam kết sẽ hoàn thành tại: {method}</p>
            </div>
        </div>
    );
};

const FormInput = () => {
    const {
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
    } = useContext(FormDataContext);

    return (
        <form onSubmit={handleSubmit}>
            <div className="TitleB4">
                <text>THEO DÕI HỌC TẬP</text>
            </div>
            <div className="Content2_B4">
                <label>Họ tên học sinh:</label>
                <input
                    value={studentName}
                    onChange={(e) => setstudentName(e.target.value)}
                    className="Input1_B4"
                    type="text"
                    name="studentName"
                    required
                    disabled={submitted}
                />
            </div>
            <div className="Content2_B4">
                <label>Giáo viên phụ trách:</label>
                <input
                    value={teacher}
                    onChange={(e) => setteacher(e.target.value)}
                    className="Input1_B4"
                    type="text"
                    name="teacher"
                    required
                    disabled={submitted}
                />
            </div>
            <div className="Content1_B4">
                <label>Lớp:</label>
                <input
                    value={className}
                    onChange={(e) => setclassName(e.target.value)}
                    className="Input2_B4"
                    type="text"
                    name="className"
                    required
                    disabled={submitted}
                />

                <label>Ngày:</label>
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="Input2_B4"
                    type="date"
                    name="date"
                    required
                    disabled={submitted}
                />
            </div>
            <label>Những việc phân công chưa làm:</label>
            <div className="Content_B4">
                <textarea
                    value={unfinishTask}
                    onChange={(e) => setunfinishTask(e.target.value)}
                    className="Input3_B4"
                    name="unfinishTask"
                    style={{ height: '80px' }}
                    required
                    disabled={submitted}
                />
            </div>
            <label>Chọn hình thức hoàn thành</label>
            <div className="Content_B4">
                <input
                    className="Checkbox_B4"
                    type="checkbox"
                    name="Tại lớp"
                    disabled={submitted}
                    checked={method === 'Tại lớp'}
                    onChange={() => setMethod('Tại lớp')}
                />
                <label>Những việc chưa làm sẽ được hoàn thành ngay tại lớp</label>
            </div>
            <div className="Content_B4">
                <input
                    className="Checkbox_B4"
                    type="checkbox"
                    name="Tại nhà"
                    disabled={submitted}
                    checked={method === 'Tại nhà'}
                    onChange={() => setMethod('Tại nhà')}
                />
                <label>
                    Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm
                    sau
                </label>
            </div>
            <div className="GhiNhan">
                <button className="Submit_B4" type="submit" disabled={submitted}>
                    Ghi Nhận
                </button>
            </div>
        </form>
    );
};

export default Bai4;
