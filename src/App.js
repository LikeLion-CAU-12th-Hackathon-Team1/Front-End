import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TimeTable from './pages/TimeTable/TimeTable';
import MakeT from './pages/MakeTimetable/MakeT';
import { Nav } from './pages/Nav';
import BeforeMakeT from './pages/MakeTimetable/BeforeMakeT';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginAtom} from './recoil/isLoginAtom';
import AllTask from './pages/ThisAllWorkation/AllTask';
import HistoryAll from './pages/PastWorkation/HistoryAll';
import OnePast from './component_PastWorkation/OneCom/OnePast';
import BeforeTimeTable from './pages/TimeTable/BeforeTimeTable';
import ThisAllWorkationToTimeTable from './pages/ThisAllWorkation/ThisAllWorkationToTimeTable';
import { alertModalAtom } from './recoil/alertAtom';
import AlertModal from './component/AlertModal';
import { timer } from './api/api_alert';

function App() {
    const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 전역상태 로그인 여부
    //const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 마이페이지 모달 상태

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
}, []);

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
          <Route path="/oauth" element={<div>Loading...</div>}/>
          <Route path='/beforeTimeTable' element={<BeforeTimeTable />} />
          <Route path="/timetable/alltask" element={<AllTask />} />
          <Route path="/timetable/today" element={<TimeTable />} />
          <Route path="/timetable/today/:id" element={<ThisAllWorkationToTimeTable />} />

          <Route path="/timetable/historyAll" element={<HistoryAll />}/>
          <Route path="/timetable/historyAll/:id" element={<OnePast />} />
          <Route path="/makeT" element={<MakeT />} />
          <Route path="/beforeMakeT" element={< BeforeMakeT/>} />
          
      </Routes>
      {isAlertModal && <AlertModal/>}
    </>
  );
}

export default App;