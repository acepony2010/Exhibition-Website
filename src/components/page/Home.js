import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const images = [
  '/img/banner/banner1.jpg',
  '/img/banner/banner2.jpg',
  '/img/banner/banner3.jpg',
  // Add more image paths as needed
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} alt="Banner" className="banner-image" />
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/tickets');
  };

  return (
    <div className="home-container">
      <Banner />
      <h1>Welcome to the Exhibition Event</h1>
      <p>Bước chân vào triển lãm, người xem như lạc vào không gian hào hùng của những năm kháng chiến chống Pháp. Các bức tranh tái hiện sinh động những trận đánh ác liệt, những khoảnh khắc xúc động của người dân Việt Nam trong cuộc chiến bảo vệ Tổ quốc. Qua từng nét vẽ, chúng ta như cảm nhận được ý chí sắt đá, tinh thần bất khuất của dân tộc Việt Nam.</p>
      <button className="btn-tickets" onClick={handleButtonClick}>
        Buy Tickets
      </button>
    </div>
  );
};

export default Home;