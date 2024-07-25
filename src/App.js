import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import OAuth from './api/api_login';
import TimeTable from './pages/TimeTable';
import Today from './pages/Today';
import MakeT from './pages/MakeT';
import History from './pages/History';
import { Nav } from './pages/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path = "/" element={<Home />}/>
          <Route path = "/login" element={<Login />}></Route>
          <Route path="/oauth" element={<div>Loading...</div>}/*{<OAuth />}*/ /> {/* 여기 경로 수정하면 백한테 주소 리다이랙트 주소 수정 요청필요 */}
          <Route path="/timetable" element={<TimeTable />}>
            <Route path=":num" element={<Today />} />
            <Route path="make" element={<MakeT />} />
          </Route>
          <Route path="/history" element={<History />} />
        
      </Routes>
    </>
  );
}

export default App;