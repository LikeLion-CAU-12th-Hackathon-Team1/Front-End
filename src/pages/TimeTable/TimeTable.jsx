import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const TimeTable = () => {
  return (
    <Container>
    <NavDom>
            <AllBtn>전체일정</AllBtn>
            <TodayBtn>오늘일정</TodayBtn>
            <HistoryBtn>지난 워케이션</HistoryBtn>
    </NavDom>
      <Outlet />
    </Container>
   
  )
}

export default TimeTable;

const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  margin-top: 66px;
`
const NavDom = styled.div`
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