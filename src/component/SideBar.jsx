import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import recoLoca from '../assets/img/recommendLoca.svg';

const SideBar = () => {
    const navigate = useNavigate();
    const locations = useLocation();
    const [selectedSide, setSelectedSide] = useState(null); // 선택된 메뉴 상태 추가
    useEffect(()=> {
        if (locations.pathname.includes('/allWorkation')) {
            setSelectedSide('allWorkation');
        } else if (locations.pathname.includes('/today')) {
            setSelectedSide('today');
        } else if (locations.pathname.includes('/pastWorkation')) {
            setSelectedSide('pastWorkation');
        } else {
            setSelectedSide(null);
        }
    }, [locations]);

    const goTodayTimeTable = () => {
        setSelectedSide('today')
      navigate('/timetable/today')
    }
  
    const goAllTimeTable = () => {
        setSelectedSide('allWorkation')
      navigate('/timetable/allWorkation')
    }
  
    const goLastTimeTable = () => {
        setSelectedSide('pastWorkation')
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
            <AllBtn onClick={goAllTimeTable} selected={selectedSide === 'allWorkation'}>전체 일정</AllBtn>
            <TodayBtn onClick={goTodayTimeTable} selected={selectedSide === 'today'}>일일 일정</TodayBtn>
            <HistoryBtn onClick = {goLastTimeTable} selected={selectedSide === 'pastWorkation'}>모든 워케이션</HistoryBtn>
        </BtnContainer>
        {selectedSide === 'today'? <RecoLoca src={recoLoca} onClick={goto}/>:(<></>)}
        
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
    color: ${props => props.selected ? ' #222222' : '#7a7a7a'};
    cursor: pointer;
  `
  const TodayBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: ${props => props.selected ? ' #222222' : '#7a7a7a'};
    cursor: pointer;
  `
  const HistoryBtn = styled.div`
    width: 188px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
    color: ${props => props.selected ? ' #222222' : '#7a7a7a'};
  `
  const RecoLoca = styled.img`
  width: 188px;
  margin-right: 20px;
  cursor: pointer;
  `