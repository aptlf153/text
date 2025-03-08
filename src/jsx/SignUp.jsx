import { useState } from 'react'
import '../css/App.css'
import { auth } from '/src/firebase-config.js';  // Firebase 초기화된 auth 가져오기
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState(""); // ✅ 이메일 상태 추가
  const [password, setPassword] = useState(""); // ✅ 비밀번호 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 추가

  const handleClick = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        alert("회원가입 성공");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode} : ${errorMessage}`);
        // ..
      });

  };

  const loginGo = () => {
    navigate("/"); // "/signup" 경로로 이동
  }

  return <>
        <div>
          ID{" "}
          <input
            type="text"
            className="EmailInput"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ✅ 상태 업데이트
          />
        </div>

        <div>
          Password{" "}
          <input
            type="password"
            className="PasswordInput"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // ✅ 상태 업데이트
          />
        </div>

      <div>
        <button onClick={handleClick}>회원가입</button>
        <button onClick={loginGo}>로그인하러 가기</button>
      </div>
  </>
}

export default Signup;
