import { useState } from 'react';
import '../css/App.css';
import { auth } from '/src/firebase-config.js';  // Firebase 초기화된 auth 가져오기
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState(""); // ✅ 이메일 상태 추가
  const [password, setPassword] = useState(""); // ✅ 비밀번호 상태 추가
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handleClick = () => {
    navigate("/signup"); // "/signup" 경로로 이동
  };

  const loginClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("로그인 성공");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <div>
        ID{" "}
        <input
          type="text"
          className="EmailInput"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 상태 업데이트
        />
      </div>

      <div>
        Password{" "}
        <input
          type="password"
          className="PasswordInput"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
        />
      </div>

      <div>
        <button onClick={handleClick}>회원가입 하기</button> {/* 회원가입 버튼 */}
      </div>

      <div>
        <button onClick={loginClick}>로그인</button> {/* 로그인 버튼 */}
      </div>
    </>
  );
}

// 최상위 컴포넌트에서 Router와 Routes 설정
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* 기본 페이지 */}
        <Route path="/signup" element={<SignUp />} /> {/* /signup 경로에서 SignUp 컴포넌트 렌더링 */}
      </Routes>
    </Router>
  );
}

export default Main;
