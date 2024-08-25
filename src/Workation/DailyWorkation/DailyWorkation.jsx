import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DailyWorkationCom from '../DailyWorkation/DailyWorkationCom';
import Location from './Location';
import { getDailyTodayId } from '../../api/api_dailyTimeTable';
import NewFooter from "../../assets/img/NewFooter.svg";
import No from "../../assets/img/No.svg";
import SideBar from '../../component/SideBar';

const DailyWorkation = () => {

  const [todayId, setTodayId] = useState();
  const [todayDate, setTodayDate] = useState();
  const [todayIndex, setTodayIndex] = useState();
  const [sigg, setSigg] = useState();
  const [errorM, setErrorM] = useState(null);

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
    fetchData();
  }, []);

  if (errorM) {
    return (
      <Container>
        <TopContainer>
          <SideBar/>
          <NoWorkation>현재 진행 중인 워케이션이 없습니다.<NoImg src={No} /></NoWorkation>
        </TopContainer>
      </Container>
    );
  }

  return (
    <Container>
      <TopContainer>
        <SideBar/>
        {todayId && <DailyWorkationCom todayId={todayId} todayDate={todayDate} todayIndex={todayIndex} />}
      </TopContainer>
      <BottomContainer>
        <Location sigg={sigg}></Location>
        </BottomContainer>
      <Footer/>
    </Container>
    
   
  )
}

export default DailyWorkation;

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
  /* width: 1228px; */
  display: flex;
  flex-direction: row;
  margin-top: 66px;
  height: 820px;
  margin-bottom: 10%;
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