import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import OneWorkationTextBox from './OneWorkationTextBox';
import OneWorkationTimeTableList from './OneWorkationTimeTableList';
import OneWorkationDetailPast from './OneWorkationDetailPast';
import axios from 'axios';
import { DateMap1, formatDateWithDay, getSiggMap, getWorkPurposeMap, getWorkStyleMap } from '../../api/mappingData';
import { getThisAll } from '../../api/api_ThisAllTimeTable';

const OneWorkationPast = ({workation_id}) => {

  const [click, setbuttonClick] = useState(false);
  const [data, setData] = useState({})
  const [dailyWorkationList, setDailyWorkationList] = useState([]); //하나의 데일리조회를 위한 리스트
  const [selectedDailyWorkationId, setSelectedDailyWorkationId] = useState(null); //일정한 데일리 id를 위한 상태관리

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getThisAll(workation_id);
        console.log('Fetched data:', result); // 응답 데이터 디버깅
        if (result && result.daily_workation_list) {
          setData(result);
          setDailyWorkationList(result.daily_workation_list);
        } else {
          console.error('Invalid response format:', result);
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
      <OneWorkationTextBox workStyleText={workStyleText} workPurposeText={workPurposeText}
        SiggText={SiggText} formattedStartDate={formattedStartDate}
        formattedEndDate={formattedEndDate} nightB={nightB} dayB={dayB} /> {/* 수정수정 */}
      <OneWorkationTimeTableList setbuttonClick={setbuttonClick} nightB={nightB} dayB={dayB} dailyWorkationList={dailyWorkationList} setSelectedDailyWorkationId={setSelectedDailyWorkationId}/>
      {click ? (<OneWorkationDetailPast workation_id={workation_id} daily_workation_id={selectedDailyWorkationId}/>) : (<></>)}
    </Container>
  )
}

export default OneWorkationPast

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