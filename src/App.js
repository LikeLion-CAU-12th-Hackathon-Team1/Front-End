import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import OAuth from './api/api_login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path="/oauth" element={<div>Loading...</div>}/*{<OAuth />}*/ /> {/* 여기 경로 수정하면 백한테 주소 리다이랙트 주소 수정 요청필요 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;