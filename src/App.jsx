import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert(1); // 얼럿창에 1을 띄움
  };

  return (
    <>
      <div>ID<input type="text" /></div>
      <div>password<input type="text" /></div>  
      <div><button onClick={handleClick}>회원가인</button></div>
      <div><button>로그인</button></div>
    </>
  )
}

export default App
