import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; // 대소문자 에러 무시 - 얘 또 왜 이러는지 모르게씀...
import Login from './pages/Login';
import OAuth from './api/api_login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path="/oauth" element={<OAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
