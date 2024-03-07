import React, { useState } from "react";
import "../shared/LoginPage.css";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 처리
    console.log(loginData);
  };

  return (
    <div className="login-page">
      <div className="login-page-header">
        <img src={require("../../img/logo_orange.png")} alt="냠냠박사" />
        <h1>냠냠박사</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          placeholder="아이디"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <button type="submit">로그인</button>
      </form>
      <div className="login-page-wide">
        <a href="/signup">회원가입</a>
        <a href="/signup">아이디/비밀번호 찾기</a>
      </div>
    </div>
  );
}

export default LoginPage;
