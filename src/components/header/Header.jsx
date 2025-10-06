import React, { useState, useEffect } from "react";
import "./Header.css"; // Создадим отдельный CSS файл

const Header = () => {
  const [username, setUsername] = useState("--");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Проверка статуса аутентификации
    const authData = localStorage.getItem("authData");
    if (authData) {
      try {
        const parsedData = JSON.parse(authData);
        setUsername(parsedData.username || "--");
        setAccessToken(parsedData.access_token || "");
      } catch (error) {
        console.error("Error parsing auth data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Очистка данных аутентификации
    localStorage.removeItem("authData");

    // Перенаправление на страницу входа
    window.location.href = "/sign_in";

    // Здесь может быть API для logout (не срочное изменение)
    // Будет вызывать API для отзыва access+refresh токенов
  };

  return (
    <header>
      <div className="header-content">
        <h2>Voyload AI fast way logistic</h2>
        <div className="user-info">
          <span>Welcome,</span>
          <span id="userDisplay">{username}</span>
          <button className="logout-btn" id="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
