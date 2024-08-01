import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OneWorkation from './OneWorkation'
import axios from 'axios';
import { formatDateWithDay, getSiggMap } from '../api/mappingData';
import { useNavigate } from 'react-router-dom';

const HistoryAllCom = () => {
    //백에서 갯수 받아온 만큼 배열 돌리기
    const baseURL = `https://saengchaein.r-e.kr`;
    const [data, setData] = useState(null);
    const token = localStorage.getItem('access');

    const navigate = useNavigate();

//워케이션 아이디는 지난회고 페이지에서 받아온걸로



useEffect(() => {
  const handleThisAll = async () => {
    try {
      const response = await axios.get(`${baseURL}/workation/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setData(response.data); // 데이터를 설정
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleThisAll();
}, []); 

if (data === null) {
  return <div>Loading...</div>;
}

const handleOne = (workation_id)=> {
    navigate(`/timetable/historyAll/${workation_id}`);
}

  return (
    <Container>
        <TitleBox>
            <Time>시간순</Time>
        </TitleBox>
        <ContentBox>
            {data.map((workation, index)=>{
                 const { start_date, end_date, sigg, workation_id } = workation;
                 const SiggText = getSiggMap(sigg);
                 const formattedStartDate = formatDateWithDay(start_date);
                 const formattedEndDate = formatDateWithDay(end_date);

                return(
                < OneWorkation
                key={workation_id}
                workation_id={workation_id} 
                SiggText={SiggText}
                formattedStartDate={formattedStartDate}
                formattedEndDate={formattedEndDate}
                onClick={()=> handleOne(workation_id)}
                />
                ) 
            })}
            
        </ContentBox>
    </Container>
  )
}

export default HistoryAllCom

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 98%;
  background-color: #FFFAF0;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
    width: 94%;
    height: 7%;
    /* border:2px solid black; */
    margin-top: 2%;
`

const Time = styled.div`
    width: 50%;
    height: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.6px;
    letter-spacing: -0.02em;
    color: #7A7A7A;
    
`
const ContentBox = styled.div`
    width: 94.5%;
    height:auto;
    max-height: 720px;
    overflow-y: auto;
    margin-bottom: 4%;
`