import './Bai1.css';
import React, { useState } from 'react';

function Bai1() {
    const [diemHK1, setDiemHK1] = useState(0);
    const [diemHK2, setDiemHK2] = useState(0);
    const [diemTB, setDiemTB] = useState(0);
    const [ketQua, setKetQua] = useState('');
    const [xepLoai, setXepLoai] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const diemTrungBinh = (parseFloat(diemHK1) + parseFloat(diemHK2) * 2) / 3;
        setDiemTB(diemTrungBinh);

        if (diemTrungBinh >= 8) {
            setXepLoai('Giỏi');
        } else if (diemTrungBinh >= 6.5) {
            setXepLoai('Khá');
        } else if (diemTrungBinh >= 5) {
            setXepLoai('Trung bình');
        } else {
            setXepLoai('Yếu');
        }

        if (diemTrungBinh >= 5) {
            setKetQua('Được lên lớp');
        } else {
            setKetQua('Ở lại lớp');
        }
    };

    return (
        <form className="Bai1" onSubmit={handleSubmit}>
            <div className="Title">
                <text>Kết quả học tập</text>
            </div>
            <div style={{ padding: '20px' }}>
                <div className="Content">
                    <label>Điểm HK1:</label>
                    <input
                        value={diemHK1}
                        onChange={(e) => setDiemHK1(e.target.value)}
                        className="Input"
                        type="number"
                        name="diemHK1"
                        min="0"
                        max="10"
                        step="0.1"
                        required
                        disabled={ketQua !== ''}
                    />
                </div>
                <div className="Content">
                    <label>Điểm HK2:</label>
                    <input
                        value={diemHK2}
                        onChange={(e) => setDiemHK2(e.target.value)}
                        className="Input"
                        type="number"
                        name="diemHK2"
                        min="0"
                        max="10"
                        step="0.1"
                        required
                        disabled={ketQua !== ''}
                    />
                </div>
                <div className="Content">
                    <label>Điểm TB:</label>
                    <input
                        value={diemTB.toFixed(2)}
                        className="Input"
                        type="text"
                        name="diemTB"
                        readOnly
                        disabled
                    />
                </div>
                <div className="Content">
                    <label>Kết quả:</label>
                    <input
                        value={ketQua}
                        className="Input"
                        type="text"
                        name="ketQua"
                        readOnly
                        disabled
                    />
                </div>
                <div className="Content">
                    <label>Xếp loại học lực:</label>
                    <input
                        value={xepLoai}
                        className="Input"
                        type="text"
                        name="xepLoai"
                        readOnly
                        disabled
                    />
                </div>
            </div>
            <div className='XemKetQua'>
                <input
                    className="Submit"
                    type="submit"
                    value="Xem Kết quả"
                    disabled={ketQua !== ''}
                />
            </div>
        </form>
    );
}

export default Bai1;
