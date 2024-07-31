import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import TimeTable from './pages/TimeTable/TimeTable';
import Today from './pages/TimeTable/Today';
import MakeT from './pages/MakeTimetable/MakeT';
import History from './pages/TimeTable/History';
import { Nav } from './pages/Nav';
import BeforeMakeT from './pages/MakeTimetable/BeforeMakeT';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginAtom, isMyPageModalAtom } from './recoil/isLoginAtom';
import { loginHandler } from './api/api_login';
import AllTask from './pages/TimeTable/AllTask';
import OneDayTimeTable from './component_TimeTable/ForTimeTable/OneDayTimeTable';

function App() {
    const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 전역상태 로그인 여부
    const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 마이페이지 모달 상태

  // 로그인 상태 판단(액세스 토큰 존재여부)
  const isLogin = () => {
    if(localStorage.getItem("access")){
        setIsLogin(true);
    } else{
        setIsLogin(false);   
    }
}

useEffect(()=> {
  isLogin();
},[])

  return (
    <>
      <Nav />
      <Routes>
        <Route path = "/" element={<Home />}/>
          <Route path = "/login" element={<Login />}></Route>
          <Route path="/oauth" element={<div>Loading...</div>}/*{<OAuth />}*/ /> {/* 여기 경로 수정하면 백한테 주소 리다이랙트 주소 수정 요청필요 */}
          {/* <Route path="/timetable" element={<TimeTable />} > */}
          <Route path="/timetable/alltask" element={<AllTask />} />
          <Route path="/timetable/today" element={<TimeTable />} />
          <Route path="/timetable/history" element={<History />} />
          <Route path="/makeT" element={<MakeT />} />
          <Route path="/beforeMakeT" element={< BeforeMakeT/>} />
          
      </Routes>
    </>
  );
}

export default App;