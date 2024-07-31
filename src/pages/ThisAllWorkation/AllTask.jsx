import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import ThisAllCom from '../../component_ThisAllWorkation/ThisAllCom';

const AllTask = () => {

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
    return (
      <Container>
      <TopContainer>
      <NavDom>
        <BtnContainer>
        <AllBtn onClick={goAllTimeTable}>전체일정</AllBtn>
        <TodayBtn onClick={goTodayTimeTable}>오늘일정</TodayBtn>
        <HistoryBtn onClick = {goLastTimeTable}>지난 워케이션</HistoryBtn>
        </BtnContainer>
      </NavDom>
      <ThisAllCom></ThisAllCom>
      </TopContainer>
      </Container>
      
     
    )
  }
  
  export default AllTask;
  
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

  const AllBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #222222;
  `
  const TodayBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #7A7A7A;
  `
  const HistoryBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #7A7A7A;
  `
