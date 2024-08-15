import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import OneWorkation from '../EachWorkation/OneWorkation';

const AllWorkation = () => {
  //사용자가 아무런 workation_id가 없을때 ,,,


  const navigate = useNavigate();
  //전체 기록 띄우기 위해 workationID makeT.jsx에서 저장값
  //const workationId = useRecoilValue(workationIdAtom);

    const goTodayTimeTable = () => {
      navigate('/timetable/today')
    }
  
    const goAllTimeTable = () => {
      navigate('/timetable/allWorkation')
    }
  
    const goLastTimeTable = () => {
      navigate('/timetable/pastWorkation')
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
          <OneWorkation/>
      </TopContainer>
      </Container>
      
     
    )
  }
  
  export default AllWorkation;
  
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
    cursor: pointer;
  `

  const AllBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #222222;
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
    color: #7A7A7A;
  `