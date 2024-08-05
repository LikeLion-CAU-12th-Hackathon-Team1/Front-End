import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import TimeTable from './pages/TimeTable/TimeTable';
import Today from './pages/TimeTable/Today';
import MakeT from './pages/MakeTimetable/MakeT';
import { Nav } from './pages/Nav';
import BeforeMakeT from './pages/MakeTimetable/BeforeMakeT';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoginAtom, isMyPageModalAtom } from './recoil/isLoginAtom';
import { loginHandler } from './api/api_login';
import AllTask from './pages/ThisAllWorkation/AllTask';
import OneDayTimeTable from './component_TimeTable/ForTimeTable/OneDayTimeTable';
import HistoryAll from './pages/PastWorkation/HistoryAll';
import OnePast from './component_PastWorkation/OneCom/OnePast';
import BeforeTimeTable from './pages/TimeTable/BeforeTimeTable';
import ThisAllWorkationToTimeTable from './pages/ThisAllWorkation/ThisAllWorkationToTimeTable';
import { alertModalAtom } from './recoil/alertAtom';
import AlertModal from './component/AlertModal';
import { timer } from './api/api_alert';

function App() {
    const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 전역상태 로그인 여부
    const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 마이페이지 모달 상태

    const [isAlertModal, setAlertModal] = useRecoilState(alertModalAtom); // 알림 모달 상태

  // 로그인 상태 판단(액세스 토큰 존재여부)
  const isLogin = () => {
    if(localStorage.getItem("access")){
        setIsLogin(true);
    } else{
        setIsLogin(false);   
    }
}

useEffect(() => {
  isLogin();
}, []); //수정수정

useEffect(() => {
  if(isLoginValue){
    const checkTimer = async () => {
      const response = await timer();
      if (response.exists) {
          setAlertModal(true);
      }
  };

  checkTimer();
  const interval = setInterval(checkTimer, 600000);

  return () => clearInterval(interval);
  }
  
}, [isLoginValue, setAlertModal]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path = "/" element={<Home />}/>
          {/* <Route path = "/login" element={<Login />}></Route> */}
          <Route path="/oauth" element={<div>Loading...</div>}/*{<OAuth />}*/ /> {/* 여기 경로 수정하면 백한테 주소 리다이랙트 주소 수정 요청필요 */}
          {/* <Route path="/timetable" element={<TimeTable />} > */}
          <Route path='/beforeTimeTable' element={<BeforeTimeTable />} />
          <Route path="/timetable/alltask" element={<AllTask />} />
          <Route path="/timetable/today" element={<TimeTable />} />
          <Route path="/timetable/today/:id" element={<ThisAllWorkationToTimeTable />} />

          <Route path="/timetable/historyAll" element={<HistoryAll />}/>
          <Route path="/timetable/historyAll/:id" element={<OnePast />} />
    
          {/* <Route path="/timetable/historyEach" element={<HistoryEach />} /> */}
          <Route path="/makeT" element={<MakeT />} />
          <Route path="/beforeMakeT" element={< BeforeMakeT/>} />
          
      </Routes>
      {isAlertModal && <AlertModal/>}
    </>
  );
}

export default App;