import React, { useState } from 'react';
import '../css/Tickets.css';

const Tickets = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dates = Array.from({ length: 26 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });

  const times = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === 'increase' ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  return (
    <div className="tickets-container">
      <h1>CHỌN NGÀY & GIỜ TRIỂN LÃM</h1>

      <div className="section">
        <h2>NGÀY TRIỂN LÃM:</h2>
        <div className="dates">
          {dates.map((date, index) => (
            <button
              key={index}
              className={`date-button ${selectedDate === date.toDateString() ? 'selected' : ''}`}
              onClick={() => setSelectedDate(date.toDateString())}
            >
              {date.getDate().toString().padStart(2, '0')}.{(date.getMonth() + 1)
                .toString()
                .padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>GIỜ TRIỂN LÃM:</h2>
        <div className="times">
          {times.map((time, index) => (
            <button
              key={index}
              className={`time-button ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <label>Số lượng:</label>
        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange('decrease')}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange('increase')}>+</button>
        </div>
      </div>

      <div className="section">
        <h3>Giá vé: <span>999,000₫</span></h3>
      </div>

      <div className="buttons">
        <button className="add-to-cart">THÊM VÀO GIỎ</button>
        <button className="buy-now">MUA NGAY</button>
      </div>
    </div>
  );
};

export default Tickets;
