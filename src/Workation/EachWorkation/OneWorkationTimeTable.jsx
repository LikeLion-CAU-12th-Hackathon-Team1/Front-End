import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const OneWorkationTimeTable = ({hour, dailyWorkationId }) => {
  const [isWork, setIsWork] = useState(false);
  const [isRest, setIsRest] = useState(false);

  useEffect(() => {
    const fetchTimeData = async () => {
        try {
          const token = localStorage.getItem('access');
          const response = await axios.get(`https://saengchaein.r-e.kr/workation/daily/${dailyWorkationId}/time/`, {
            headers: {
              Authorization: `Bearer ${token}` // Authorization 헤더 설정
            }
          });
  
            const dailyAllTable = response.data;
            dailyAllTable.forEach((item) => {
                const start = parseInt(item.start_time.substring(0, 2));
                let end = Math.ceil(parseInt(item.end_time.substring(0, 2)));

                if(item.end_time === '235959'){
                  end = Math.ceil(parseInt(item.end_time.substring(0, 2)))+1;
                }


                if (item.sort === 1) { // work
                    if (hour >= start && hour < end) {
                        setIsWork(true);
                    } else if (hour >= start && hour <= end && hour === 24) {
                        setIsWork(true);
                    }
                } else if (item.sort === 2) { // rest
                    if (hour >= start && hour < end) {
                        setIsRest(true);
                    } else if (hour >= start && hour <= end && hour === 24) {
                        setIsRest(true);
                    }
                }
            });
        } catch (error) {
            console.error('Error fetching time data:', error);
        }
    };

    if (dailyWorkationId) {
        fetchTimeData();
    }
}, [dailyWorkationId, hour]);





  return (
    <Container>
        <WorkTable $isActive={isWork}></WorkTable>
        <RestTable $isActive={isRest}></RestTable>
    </Container>
  )
}

export default OneWorkationTimeTable

const Container = styled.div`
display:flex;
flex-direction: row;
width : 300px;
height: 16px;
align-items:center;
justify-content:center;
`
const WorkTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  height: 16px;
  background-color: ${({ $isActive }) => ($isActive ? '#FFA837' : '#FFFFFF')};
  border-radius: 100px;
  margin-right: 15px;
`
const RestTable = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  height: 16px;
  background-color: ${({ $isActive }) => ($isActive ? '#E3DCD0' : '#FFFFFF')};
  border-radius: 100px;
  `