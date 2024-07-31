import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const AllTask = () => {

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
    <Container>
      <NavDom>
        <AllBtn onClick={goAllTimeTable}>전체일정</AllBtn>
        <TodayBtn onClick={goTodayTimeTable}>오늘일정</TodayBtn>
        <HistoryBtn onClick = {goLastTimeTable}>지난 워케이션</HistoryBtn>
      </NavDom>
    </Container>
  )
}

export default AllTask

const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  margin-top: 66px;
`
const NavDom = styled.div`
display: flex;
flex-direction: column;
  width: 188px;
  height: 694px; //오늘일정일때 사진 보이게하기
  font-size: 20px;
  font-weight: 700;
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