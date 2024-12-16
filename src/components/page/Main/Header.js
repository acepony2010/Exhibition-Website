import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaShoppingCart, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../css/Main/Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);

  // setCartItems

  const cartPopupRef = useRef(null);
  const userIconRef = useRef(null);
  const cartIconRef = useRef(null);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };


  const handleClickOutside = (e) => {
    if (
      cartPopupRef.current && !cartPopupRef.current.contains(e.target) &&
      !userIconRef.current.contains(e.target) &&
      !cartIconRef.current.contains(e.target)
    ) {
      setShowCartPopup(false);
    }
  };


  const handleCartClick = (e) => {
    e.stopPropagation();
    setShowCartPopup((prevState) => !prevState);
  };


  const handleUserIconClick = (e) => {
    e.stopPropagation();
    toggleLogin();
  };


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="logo">
        <FaGlobe size={30} />
      </div>
      <div className="navigation">
        <Link to="/" className="nav-link">TRANG CHỦ</Link>
        <Link to="/tickets" className="nav-link">MUA VÉ</Link>
      </div>
      <div className="user-actions">
        <div className="user-icon" ref={userIconRef} onClick={handleUserIconClick}>
          <FaUser size={25} />
          {isLoggedIn ? (
            <div className="dropdown">
              <h3>THÔNG TIN TÀI KHOẢN</h3>
              <p>Lê Phú Thành</p>
              <ul>
                <li><a href="#account">Tài khoản của tôi</a></li>
                <li><a href="#address">Danh sách địa chỉ</a></li>
                <li><a href="#logout" onClick={() => setIsLoggedIn(false)}>Đăng xuất</a></li>
              </ul>
            </div>
          ) : (
            <div className="login-form">
              <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mật khẩu" />
              <button onClick={() => setIsLoggedIn(true)}>ĐĂNG NHẬP</button>
              <p>Khách hàng mới? <a href="#register">Tạo tài khoản</a></p>
              <p>Quên mật khẩu? <a href="#recover">Khôi phục mật khẩu</a></p>
            </div>
          )}
        </div>
        <div className="cart-icon" ref={cartIconRef} onClick={handleCartClick}>
          <FaShoppingCart size={25} />
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </div>
      {showCartPopup && (
        <div className="cart-popup" ref={cartPopupRef}>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h3>GIỎ HÀNG</h3>
              <p>Chưa có sản phẩm trong giỏ hàng...</p>
              <a href="#products">Trở về trang sản phẩm</a>
              <a href="#promotions">Khuyến mãi dành cho bạn</a>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.date} / {item.time}</p>
                    <p>{item.price}₫</p>
                  </div>
                </div>
              ))}
              <div className="cart-footer">
                <h3>Tổng tiền: {cartItems.reduce((total, item) => total + item.price, 0)}₫</h3>
                <button onClick={() => setShowCartPopup(false)}>XEM GIỎ HÀNG</button>
                <button onClick={() => alert('Thanh toán thành công!')}>THANH TOÁN</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
