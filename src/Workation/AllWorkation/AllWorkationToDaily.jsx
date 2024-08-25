import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DailyWorkationCom from '../DailyWorkation/DailyWorkationCom';
import Location from '../DailyWorkation/Location';
import { getdailyRetro } from '../../api/api_dailyTimeTable';
import NewFooter from "../../assets/img/NewFooter.svg";
import SideBar from '../../component/SideBar';

const AllWorkationToDaily = () => {
  const {id} = useParams();

  const [todayId, setTodayId] = useState(id);
  const [todayDate, setTodayDate] = useState();
  const [todayIndex, setTodayIndex] = useState();
  const [sigg, setSigg] = useState();
  // 이 컴포넌트 마운트 될 때마다 실행
  useEffect(() => {
    const fetchData = async () => {
      const getTodayId = await getdailyRetro(id);
        setTodayId(getTodayId.daily_workation_id);
        setTodayDate(getTodayId.date);
        setTodayIndex(getTodayId.day);
        setSigg(getTodayId.sigg);
        console.log(getTodayId);
      };
      fetchData();
  }, [todayId]);


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

export default AllWorkationToDaily;

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
const Footer = styled.div`
    width : 1440px;
    height: 314px;
    background-image: url(${NewFooter});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
`