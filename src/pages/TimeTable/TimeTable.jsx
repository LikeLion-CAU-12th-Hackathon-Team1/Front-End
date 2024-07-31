import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OneDayTimeTable from '../../component_TimeTable/ForTimeTable/OneDayTimeTable';

const TimeTable = () => {

  const navigate = useNavigate();

  const goTodayTimeTable = () => {
    navigate('/timetable/today')
  }

  const goAllTimeTable = () => {
    navigate('/timetable/alltask')
  }

  const goLastTimeTable = () => {
    navigate('timetable/history')
  }
  return (
    <>
    <TopContainer>
    <NavDom>
      <AllBtn onClick={goAllTimeTable}>전체일정</AllBtn>
      <TodayBtn onClick={goTodayTimeTable}>오늘일정</TodayBtn>
      <HistoryBtn onClick = {goLastTimeTable}>지난 워케이션</HistoryBtn>
    </NavDom>
    <OneDayTimeTable/>
    </TopContainer>
    <BottomContainer>

    </BottomContainer>
    </>
    
   
  )
}

export default TimeTable;

const TopContainer = styled.div`
  width: 1228px;
  display: flex;
  flex-direction: row;
  margin-top: 66px;
  border: 1px solid black;
`

const BottomContainer = styled.div`
  width: 1228px;
  display: flex;
  flex-direction: row;
  margin-top: 66px;
  border: 1px solid black;
  height: 820px;
`

const NavDom = styled.div`
display: flex;
flex-direction: column;
  width: 188px;
  height: 730px; //오늘일정일때 사진 보이게하기
  font-size: 20px;
  font-weight: 700;
align-items:center;
justify-content: center;
`
const AllBtn = styled.div`
  width: 188px;
  height: 40px;
`
const TodayBtn = styled.div`
  width: 188px;
  height: 40px;
`
const HistoryBtn = styled.div`
  width: 188px;
  height: 40px;
`