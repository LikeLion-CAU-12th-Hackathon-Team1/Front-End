import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import OneWorkationTextBox from './OneWorkationTextBox';
import OneWorkationTimeTableList from './OneWorkationTimeTableList';
import { formatDateWithDay, getSiggMap, getWorkPurposeMap, getWorkStyleMap } from '../../api/mappingData';
import { getThisAllReal } from '../../api/api_ThisAllTimeTable';
import OneWorkationDetail from './OneWorkationDetail';
import No from "../../assets/img/No.svg"
import dayjs from 'dayjs';
import { fetchClosestWorkation } from '../../api/api_Workation';

const OneWorkation = () => {

  const [click, setbuttonClick] = useState(false);
  const [data, setData] = useState({})
  const [dailyWorkationList, setDailyWorkationList] = useState([]); //하나의 데일리조회를 위한 리스트
  const [selectedDailyWorkationId, setSelectedDailyWorkationId] = useState(null); //일정한 데일리 id를 위한 상태관리
  const [recentWorkation, setRecentWorkation] = useState(null); // 최근 워케이션 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchClosestWorkation();
        if (response.data) {
          setRecentWorkation(response.data);
        }
        const result = await getThisAllReal();
        if (result && result.daily_workation_list) {
          setData(result);
          setDailyWorkationList(result.daily_workation_list);
        }
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const { start_date, end_date, sigg, work_style, work_purpose } = data ||{};

  // 데이터 매핑
  const workStyleText = getWorkStyleMap(work_style);
  const workPurposeText = getWorkPurposeMap(work_purpose);
  const SiggText = getSiggMap(sigg);

  const formattedStartDate = formatDateWithDay(start_date);
  const formattedEndDate = formatDateWithDay(end_date);
  
  const start = dayjs(start_date)
  const end = dayjs(end_date)

  const nightB = end.diff(start, 'day');
  const dayB = nightB+1;

  return (
    <Container>
      {recentWorkation ? (
        <>
          <OneWorkationTextBox workStyleText={workStyleText} workPurposeText={workPurposeText} SiggText={SiggText} formattedStartDate={formattedStartDate} formattedEndDate={formattedEndDate} nightB={nightB} dayB={dayB} />
          <OneWorkationTimeTableList setbuttonClick={setbuttonClick} nightB={nightB} dayB={dayB} dailyWorkationList={dailyWorkationList} setSelectedDailyWorkationId={setSelectedDailyWorkationId}/>
          {click ? (<OneWorkationDetail selectedDailyWorkationId={selectedDailyWorkationId} daily_workation_id={selectedDailyWorkationId}/>) : (<></>)}
        </>) : (
          <NoWorkation>워케이션을 등록해 주세요.<NoImg src = {No} /></NoWorkation>
        )}
    </Container>
  )
}

export default OneWorkation

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
cursor: default;
`;

const NoImg = styled.img`
  width: 7%;
  margin-top: 20px;
  cursor: pointer;
  
`