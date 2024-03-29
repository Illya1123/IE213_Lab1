import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext5';
import './Bai5.css';

const Bai5 = () => {
    const { submitted } = useContext(FormDataContext);

    return (
        <div className="Bai5">
            <div style={{ padding: '10px' }}>
                {submitted ? <SubmittedContent /> : <FormContent />}
            </div>
        </div>
    );
};

const SubmittedContent = () => {
    const { name, guest, address, age, date, location, gender, method, request, eventType } =
        useContext(FormDataContext);

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
            <h2 className="H2">THÔNG TIN ĐẶT CHỖ</h2>
            <div className="content">
                <div className="KH">
                    <h4>Thông tin khách hàng</h4>
                    <p>
                        Họ tên: {name} - Độ tuổi: {age} / Giới tính: {gender}
                    </p>
                    <p>Địa chỉ: {address}</p>
                </div>
                <div className="DC">
                    <h4>Thông tin đặt chỗ</h4>
                    <p>
                        Số khách tham gia bữa tiệc: {guest} - Ngày đặt tiệc: {formattedDate}
                    </p>
                    <p>
                        Loại tiệc: - {eventType} / Địa điểm: {location}
                    </p>
                </div>
                <div className="YC">
                    <h4>
                        <i>Các yêu cầu kèm theo: </i>
                    </h4>
                    <pre style={{ paddingLeft: '5%' }}>{formattedRequests}</pre>
                </div>
                <p style={{ textAlign: 'center' }}>
                    <i>Quý khách biết đến nhà hàng của chúng tôi qua: {method.join(', ')}</i>
                </p>
                <p>
                    Chúng tôi nhận được thông tin đặt chỗ của quý khách vào lúc:{' '}
                    <b>{currentDate}</b>
                </p>
            </div>
        </div>
    );
};

const FormContent = () => {
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

    return (
        <form onSubmit={handleSubmit}>
            <div className="TitleB5">
                <text>THÔNG TIN ĐẶT CHỖ</text>
            </div>
            <div className="Content1_B5">
                <label>Số khách tham dự bữa tiệc của quý khách:</label>
                <input
                    value={guest}
                    onChange={(e) => setGuest(e.target.value)}
                    className="Input2_B5"
                    type="number"
                    name="guest"
                    required
                    disabled={submitted}
                />
                <label>Ngày:</label>
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="Input2_B5"
                    type="date"
                    name="date"
                    required
                    disabled={submitted}
                />
            </div>
            <div className="Content2_B5">
                <label>Loại tiệc:</label>
                <input
                    className="Checkbox_B5"
                    type="checkbox"
                    name="Tiệc Sáng"
                    disabled={submitted}
                    checked={eventType === 'Tiệc Sáng'}
                    onChange={() => setEventType('Tiệc Sáng')}
                />
                <label> Tiệc sáng </label>
                <input
                    className="Checkbox_B5"
                    type="checkbox"
                    name="Tiệc Trưa"
                    disabled={submitted}
                    checked={eventType === 'Tiệc Trưa'}
                    onChange={() => setEventType('Tiệc Trưa')}
                />
                <label> Tiệc trưa </label>
                <input
                    className="Checkbox_B5"
                    type="checkbox"
                    name="TiecToi"
                    disabled={submitted}
                    checked={eventType === 'Tiệc Tối'}
                    onChange={() => setEventType('Tiệc Tối')}
                />
                <label> Tiệc tối </label>
            </div>
            <div className="Content2_B5">
                <label>Địa điểm:</label>
                <div className="RadioGroup_B5">
                    <input
                        type="radio"
                        id="inside"
                        name="inside"
                        value="Trong nhà"
                        checked={location === 'Trong nhà'}
                        onChange={(e) => setLocation(e.target.value)}
                        disabled={submitted}
                    />
                    <label htmlFor="Trong nhà">Trong nhà</label>
                    <input
                        type="radio"
                        id="outside"
                        name="outside"
                        value="Ngoài trời"
                        checked={location === 'Ngoài trời'}
                        onChange={(e) => setLocation(e.target.value)}
                        disabled={submitted}
                    />
                    <label htmlFor="Ngoài trời">Ngoài trời</label>
                </div>
            </div>
            <div className="Content2_B5">
                <label>Tên quý khách:</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="Input2_B5"
                    type="text"
                    name="name"
                    required
                    disabled={submitted}
                />
                <label>Địa chỉ liên lạc:</label>
                <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="Input3_B5"
                    name="address"
                    required
                    disabled={submitted}
                />
            </div>
            <div className="Content2_B5">
                <label>Độ tuổi:</label>
                <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="Input3_B5"
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
                <div className="RadioGroup_B5">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Nam"
                        checked={gender === 'Nam'}
                        onChange={(e) => setGender(e.target.value)}
                        disabled={submitted}
                    />
                    <label htmlFor="male">Nam</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Nữ"
                        checked={gender === 'Nữ'}
                        onChange={(e) => setGender(e.target.value)}
                        disabled={submitted}
                    />
                    <label htmlFor="female">Nữ</label>
                </div>
            </div>
            <div className="Content2_B5">
                <label>Quý khách biết đến nhà hàng của chúng tôi qua:</label>
                <select
                    value={method}
                    onChange={(e) =>
                        setMethod(Array.from(e.target.selectedOptions, (option) => option.value))
                    }
                    className="Input4_B5"
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
            <label>Các yêu cầu khác của quý khách:</label>
            <div className="Content2_B5">
                <textarea
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="Input1_B5"
                    name="request"
                    style={{ height: '80px' }}
                    required
                    disabled={submitted}
                />
            </div>

            <div className="DatCho">
                <button className="Submit_B5" type="submit" disabled={submitted}>
                    Đặt chỗ
                </button>
            </div>
        </form>
    );
};

export default Bai5;
