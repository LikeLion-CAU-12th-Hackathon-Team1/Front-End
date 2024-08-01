import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tagorange from "../../src/assets/img/tagorange.svg";
import loca from "../../src/assets/img/loca.svg";
import day from "../../src/assets/img/day.svg";
import axios from 'axios';
import { getToken, token } from '../api/api_login';
import { DateMap1, formatDateWithDay, getSiggMap, getWorkPurposeMap, getWorkStyleMap } from '../api/mappingData';

const ThisAllTop = ( {workation_id} ) => {
  //백에서 받은 데이터 넣기(날짜, 지역, 스타일)
const baseURL = `https://saengchaein.r-e.kr`;
const [data, setData] = useState(null);
const token = localStorage.getItem('access');

//워케이션 아이디는 지난회고 페이지에서 받아온걸로



useEffect(() => {
  const handleThisAll = async (workation_id) => {
    // const token = getToken();
    try {
      const response = await axios.get(`${baseURL}/workation/1/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setData(response.data); // 데이터를 설정
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleThisAll(workation_id);
}, []); 

if (data === null) {
  return <div>Loading...</div>;
}

const { start_date, end_date, sigg, work_style, work_purpose } = data;

//데이터매핑
const workStyleText = getWorkStyleMap(work_style);
const workPurposeText = getWorkPurposeMap(work_purpose);
const SiggText = getSiggMap(sigg);

const formattedStartDate = formatDateWithDay(start_date);
const formattedEndDate = formatDateWithDay(end_date);

const nightB = end_date - start_date;
const dayB = nightB +1;

  return (
    <Container>
      <ImgBox>
      <Img src={day} />
      <Img src={loca} />
      <Img src={tagorange} />
      </ImgBox>
      <TextBox>
      <Text>{formattedStartDate } ~ {formattedEndDate} [{nightB}박 ${dayB}일]</Text>
      <Text>'{SiggText}'에서 만나요!</Text>
      <Text>{workPurposeText} {workStyleText} </Text>
      </TextBox>
    </Container>
    
  )
}

export default ThisAllTop

const Container = styled.div`
  width: 95%;
  /* height: 173px; */
  border-radius: 8px;
  border: 1px solid #FEE0AA;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  /* flex-direction: column; */
  padding : 24px 10px 24px 10px;
`
const ImgBox = styled.div`
  width: 32px;
  border-color: red;
`
const Img = styled.img`
  width: 32px;
  margin: 4px 0;
`
const TextBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
const Text = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin: 7px 10px; //글자사이간격이걸로조절하기
  font-size: 24px;
  font-weight: 600;

`