import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OneDayTimeTable from '../../component_TimeTable/ForTimeTable/OneDayTimeTable';
import Location from '../../component_Location/Location';
import recoLoca from '../../assets/img/recommendLoca.svg';
import { getDailyTodayId } from '../../api/api_dailyTimeTable';
import NewFooter from "../../assets/img/NewFooter.svg";
import No from "../../assets/img/No.svg";

const TimeTable = () => {

  const navigate = useNavigate();

  const goTodayTimeTable = () => {
    navigate('/timetable/today')
  }

  const goAllTimeTable = () => {
    navigate('/timetable/alltask')
  }

  const goLastTimeTable = () => {
    navigate('/timetable/historyAll')
  }


  const [todayId, setTodayId] = useState();
  const [todayDate, setTodayDate] = useState();
  const [todayIndex, setTodayIndex] = useState();
  const [sigg, setSigg] = useState();
  const [errorM, setErrorM] = useState(null);
  
  // 이 컴포넌트 마운트 될 때마다 실행
  // 에러 메세지 추가 - 그냥 애초에 투데이 아이디 유무로 리턴에서 삼항 연산자로 한다면?
  useEffect(() => {
    const fetchData = async () => {
      const getTodayId = await getDailyTodayId(); // 오늘의 워케이션 ID를 가져오는 API 호출
      if (getTodayId && getTodayId.errorMessage) { // 에러 메시지가 있으면
        setErrorM(getTodayId.errorMessage); // 에러 메시지를 상태에 저장
      } else if(getTodayId){
        setTodayId(getTodayId.daily_workation_id); // 오늘의 워케이션 ID를 상태에 저장
        setTodayDate(getTodayId.date); // 오늘의 날짜를 상태에 저장
        setTodayIndex(getTodayId.day); // 오늘의 인덱스를 상태에 저장
        setSigg(getTodayId.sigg); // 지역 정보를 상태에 저장
        console.log(getTodayId.day); // 오늘의 인덱스를 콘솔에 출력
      }
    };
    fetchData(); // fetchData 함수 호출
  }, []);

  if (errorM) { // 에러 메시지가 있으면 //주석
    return (
      <Container>
    <TopContainer>
    <NavDom>
      <BtnContainer>
      <AllBtn onClick={goAllTimeTable}>전체 일정</AllBtn>
      <TodayBtn onClick={goTodayTimeTable}>일일 일정</TodayBtn>
      <HistoryBtn onClick = {goLastTimeTable}>모든 워케이션</HistoryBtn>
      </BtnContainer>
    </NavDom>
    <NoWorkation>
        현재 진행 중인 워케이션이 없습니다.
        <NoImg src={No} />
      </NoWorkation>
    
    </TopContainer>
    
    </Container>
    );
  }

  const smoothScrollTo = (y)=>{
    window.scrollTo({
      top:y,
      left:0,
      behavior:'smooth'
    });
  }

  const goto = () => {
    smoothScrollTo(790); //2번째랜딩페이지로 위치이동
  }
  return (
    <Container>
    <TopContainer>
    <NavDom>
      <BtnContainer>
      <AllBtn onClick={goAllTimeTable}>전체 일정</AllBtn>
      <TodayBtn onClick={goTodayTimeTable}>일일 일정</TodayBtn>
      <HistoryBtn onClick = {goLastTimeTable}>모든 워케이션</HistoryBtn>
      </BtnContainer>
      
      <RecoLoca src={recoLoca} onClick={goto}/>
    </NavDom>
    {todayId && <OneDayTimeTable todayId={todayId} todayDate={todayDate} todayIndex={todayIndex} />}
    </TopContainer>
    <BottomContainer>
    <Location sigg={sigg}></Location>
    </BottomContainer>
    <Footer/>
    </Container>
    
   
  )
}

export default TimeTable;

const Container = styled.div`
  width:1228px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  margin-top: 20px;
`

const TopContainer = styled.div`
  /* width: 1228px; */
  display: flex;
  flex-direction: row;
  margin-top: 66px;
`

const BottomContainer = styled.div`
  /* width: 1228px; */
  display: flex;
  flex-direction: row;
  margin-top: 66px;
  height: 820px;
  margin-bottom: 10%;
`

const NavDom = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 188px; */
  height: 730px; //오늘일정일때 사진 보이게하기
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  justify-content:space-between;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  height: 19%;
  justify-content: space-between;
  cursor: default;
`

const RecoLoca = styled.img`
width: 188px;
cursor: pointer;
`
const AllBtn = styled.div`
  /* width: 188px; */
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: #7A7A7A;
  cursor: pointer;
`
const TodayBtn = styled.div`
  /* width: 188px; */
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: #222222;
  cursor: pointer;
`
const HistoryBtn = styled.div`
  /* width: 188px; */
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: #7A7A7A;
  cursor: pointer;
`

const Footer = styled.div`
    width : 1440px;
    height: 314px;
    background-image: url(${NewFooter});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: bottom; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
`
const NoWorkation = styled.div`
  width:1000px;
  margin-left: 20px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  background-color: #FFFAF0;
  flex-direction: column;
  cursor: default;
  /* margin-top: 5%; */
`;

const NoImg = styled.img`
  width: 7%;
  margin-top: 20px;
  cursor: pointer;
  
`