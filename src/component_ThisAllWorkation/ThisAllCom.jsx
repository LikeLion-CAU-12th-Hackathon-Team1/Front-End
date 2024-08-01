import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ThisAllTop from './ThisAllTop';
import ThisAllMiddle from './ThisAllMiddle';
import ThisAllBottom from './ThisAllBottom';
import axios from 'axios';
import { DateMap1, formatDateWithDay, getSiggMap, getWorkPurposeMap, getWorkStyleMap } from '../api/mappingData';
import { getThisAll } from '../api/api_ThisAllTimeTable';

const ThisAllCom = () => {

  const [click, setbuttonClick] = useState(false);
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const workation_id = 35; // 추후 백에서 받아올 데이터
      const result = await getThisAll(workation_id);
      setData(result);
    };
    fetchData();
  }, []);

  const { start_date, end_date, sigg, work_style, work_purpose } = data;

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
      <ThisAllTop workStyleText={workStyleText} workPurposeText={workPurposeText}
        SiggText={SiggText} formattedStartDate={formattedStartDate}
        formattedEndDate={formattedEndDate} nightB={nightB} dayB={dayB} /> {/* 수정수정 */}
      <ThisAllMiddle setbuttonClick={setbuttonClick} nightB={nightB} dayB={dayB} />
      {click ? (<ThisAllBottom />) : (<></>)}
    </Container>
  )
}

export default ThisAllCom

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