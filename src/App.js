import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import TimeTable from './Workation/DailyWorkation/DailyWorkation';
import MakeWorkation from './MakeWorkation/MakeWorkation';
import { Nav } from './Nav/Nav';
import BeforeLoginMakeWorkation from './MakeWorkation/BeforeLoginMakeWorkation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginAtom} from './recoil/isLoginAtom';
import AllWorkation from './Workation/AllWorkation/AllWorkation';
import PastWorkation from './Workation/PastWorkation/PastWorkation';
import OnePastWorkation from './Workation/PastWorkation/OnePastWorkation';
import BeforeLoginWorkation from './Workation/BeforeLogin/BeforeLoginWorkation';
import AllWorkationToDaily from './Workation/AllWorkation/AllWorkationToDaily';
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
          <Route path='/beforeTimeTable' element={<BeforeLoginWorkation />} />
          <Route path="/timetable/allWorkation" element={<AllWorkation />} />
          <Route path="/timetable/today" element={<TimeTable />} />
          <Route path="/timetable/today/:id" element={<AllWorkationToDaily />} />

          <Route path="/timetable/historyAll" element={<PastWorkation />}/>
          <Route path="/timetable/historyAll/:id" element={<OnePastWorkation />} />
          <Route path="/makeWorkation" element={<MakeWorkation />} />
          <Route path="/beforeLoginMakeWorkation" element={< BeforeLoginMakeWorkation/>} />
          
      </Routes>
      {isAlertModal && <AlertModal/>}
    </>
  );
}

export default App;