import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import recoLoca from '../assets/img/recommendLoca.svg';

const SideBar = () => {
    const navigate = useNavigate();

    const goTodayTimeTable = () => {
      navigate('/timetable/today')
    }
  
    const goAllTimeTable = () => {
      navigate('/timetable/allWorkation')
    }
  
    const goLastTimeTable = () => {
      navigate('/timetable/pastWorkation')
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
    <NavDom>
        <BtnContainer>
            <AllBtn onClick={goAllTimeTable}>전체 일정</AllBtn>
            <TodayBtn onClick={goTodayTimeTable}>일일 일정</TodayBtn>
            <HistoryBtn onClick = {goLastTimeTable}>모든 워케이션</HistoryBtn>
        </BtnContainer>

        <RecoLoca src={recoLoca} onClick={goto}/>
      </NavDom>
  )
}

export default SideBar

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
  const RecoLoca = styled.img`
  width: 188px;
  cursor: pointer;
  `