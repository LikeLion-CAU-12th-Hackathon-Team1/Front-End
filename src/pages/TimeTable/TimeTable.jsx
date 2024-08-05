import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OneDayTimeTable from '../../component_TimeTable/ForTimeTable/OneDayTimeTable';
import Location from '../../component_Location/Location';
import recoLoca from '../../assets/img/recommendLoca.svg';
import { getDailyTodayId } from '../../api/api_dailyTimeTable';
import NewFooter from "../../assets/img/NewFooter.svg";

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

  // 이 컴포넌트 마운트 될 때마다 실행
  useEffect(() => {
    const fetchData = async () => {
      const getTodayId = await getDailyTodayId();
      setTodayId(getTodayId.daily_workation_id);
      setTodayDate(getTodayId.date);
      setTodayIndex(getTodayId.day);
      setSigg(getTodayId.sigg);
      console.log(getTodayId.day);
      };
      fetchData();
  }, [todayId]);


  return (
    <Container>
    <TopContainer>
    <NavDom>
      <BtnContainer>
      <AllBtn onClick={goAllTimeTable}>전체일정</AllBtn>
      <TodayBtn onClick={goTodayTimeTable}>오늘일정</TodayBtn>
      <HistoryBtn onClick = {goLastTimeTable}>지난 워케이션</HistoryBtn>
      </BtnContainer>
      
      <RecoLoca src={recoLoca}/>
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
  width: 1228px;
  display: flex;
  flex-direction: row;
  margin-top: 66px;
`

const BottomContainer = styled.div`
  width: 1228px;
  display: flex;
  flex-direction: row;
  margin-top: 66px;
  height: 820px;
  margin-bottom: 10%;
`

const NavDom = styled.div`
display: flex;
flex-direction: column;
  width: 188px;
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
`

const RecoLoca = styled.img`
width: 188px;
`
const AllBtn = styled.div`
  width: 188px;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: #7A7A7A;
`
const TodayBtn = styled.div`
  width: 188px;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: #222222;
`
const HistoryBtn = styled.div`
  width: 188px;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: #7A7A7A;
`

const Footer = styled.div`
    width : 1440px;
    height: 314px;
    background-image: url(${NewFooter});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
`