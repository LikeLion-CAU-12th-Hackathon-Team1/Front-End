import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ThisAllTop from './ThisAllTop';
import ThisAllMiddle from './ThisAllMiddle';
import ThisAllBottom from './ThisAllBottom';
import axios from 'axios';
import { DateMap1, formatDateWithDay, getSiggMap, getWorkPurposeMap, getWorkStyleMap } from '../api/mappingData';
import { getThisAll, getThisAllReal } from '../api/api_ThisAllTimeTable';
import ThisAllBottomReal from './ThisAllBottomReal';
import No from "../assets/img/No.svg"

const ThisAllComReal = ({workation_id}) => {

  const [click, setbuttonClick] = useState(false);
  const [data, setData] = useState({})
  const [dailyWorkationList, setDailyWorkationList] = useState([]); //하나의 데일리조회를 위한 리스트
  const [selectedDailyWorkationId, setSelectedDailyWorkationId] = useState(null); //일정한 데일리 id를 위한 상태관리
  const [recentWorkation, setRecentWorkation] = useState(null); // 최근 워케이션 상태

  useEffect(() => {
    const fetchClosestWorkation = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get('https://saengchaein.r-e.kr/workation/closest/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data) {
          setRecentWorkation(response.data);
        }
      } catch (error) {
        console.error('Error fetching closest workation:', error);
      }
    };
    fetchClosestWorkation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // const workation_id = 35; // 추후 백에서 받아올 데이터
      try {
        const result = await getThisAllReal();
        console.log('Fetched data:', result); // 응답 데이터 디버깅
        console.log(result.daily_workation_list)
        if (result && result.daily_workation_list) {
          setData(result);
          setDailyWorkationList(result.daily_workation_list);
        } else {
          console.error(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [workation_id]);

  const { start_date, end_date, sigg, work_style, work_purpose } = data ||{};

  // 데이터 매핑
  const workStyleText = getWorkStyleMap(work_style);
  const workPurposeText = getWorkPurposeMap(work_purpose);
  const SiggText = getSiggMap(sigg);

  const formattedStartDate = formatDateWithDay(start_date);
  const formattedEndDate = formatDateWithDay(end_date);

  const nightB = parseInt(end_date-start_date);
  const dayB = nightB+1;

  return (
    
    <Container>
      {recentWorkation ? (
        <>
          <ThisAllTop workStyleText={workStyleText} workPurposeText={workPurposeText}
          SiggText={SiggText} formattedStartDate={formattedStartDate}
          formattedEndDate={formattedEndDate} nightB={nightB} dayB={dayB} /> {/* 수정수정 */}
        <ThisAllMiddle setbuttonClick={setbuttonClick} nightB={nightB} dayB={dayB} dailyWorkationList={dailyWorkationList} setSelectedDailyWorkationId={setSelectedDailyWorkationId}/>
        {click ? (<ThisAllBottomReal workation_id={workation_id} daily_workation_id={selectedDailyWorkationId}/>) : (<></>)}
        </>) : (
          <NoWorkation>
            워케이션을 등록해 주세요.
            <NoImg src = {No} />
          </NoWorkation>
        )}
    
    </Container>
  )
}

export default ThisAllComReal

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1020px;
  background-color: #FFFAF0;
  box-sizing: border-box;
  border-top: 66px;
  border-radius: 6px;
  padding: 18px 17px 18px 17px;
`;

const NoWorkation = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
font-weight: 700;
color: #000000;
text-align: center;
background-color: #FFFAF0;
flex-direction: column;
`;
const NoImg = styled.img`
  width: 7%;
  margin-top: 20px;
`