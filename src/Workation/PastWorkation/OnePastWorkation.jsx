import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import OneWorkationPast from '../EachWorkation/OneWorkationPast';

const OnePastWorkation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location= useLocation();
    //여기서 앞에서 받아온 workation_id로 햐서 ThisAllCom?에 넘기자..
    

    //메뉴바
    const goTodayTimeTable = () => {
      navigate('/timetable/today')
    }
  
    const goAllTimeTable = () => {
      navigate('/timetable/allWorkation')
    }
  
    const goLastTimeTable = () => {
      if (location.pathname.includes('/timetable/historyAll')) {
        navigate('/timetable/historyAll');
      } else {
        navigate('/timetable/historyAll');
      }
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
      </NavDom>
      <HistoryContent>
          <OneWorkationPast workation_id={id}/>
        </HistoryContent>
      </TopContainer>
      </Container>
      
     
    )
  }
  
  export default OnePastWorkation;

 const HistoryContent = styled.div`
    
 `

  //
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
    height: 19%;
    justify-content: space-between;
  `

  const AllBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #7A7A7A;
    cursor: pointer;
  `
  const TodayBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #7A7A7A;
    cursor: pointer;
  `
  const HistoryBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #222222;
    cursor: pointer;
  `