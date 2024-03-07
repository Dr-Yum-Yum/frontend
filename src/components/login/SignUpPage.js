import React, { useState } from "react";
import "../shared/LoginPage.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    confirmPassword: "",
    username: "",
    nickname: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 구현합니다. 예를 들어, API 요청을 보낼 수 있습니다.
    console.log(formData);
  };

  return (
    <div className="login-page">
      <div className="login-page-header">
        <img src={require("../../img/logo_orange.png")} alt="냠냠박사" />
        <h1>회원가입</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-page-wide">
          <input
            type="text"
            name="userid"
            value={formData.userid}
            onChange={handleChange}
            placeholder="아이디"
            required
          />
          <input type="button" value="중복체크" />
        </div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호 확인"
          required
        />
        <div className="login-page-blank"></div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="이름"
          required
        />
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
        />
        <div className="login-page-wide">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
            required
          />
          <input type="button" value="중복체크" />
        </div>
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="전화번호"
          required
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUpPage;
