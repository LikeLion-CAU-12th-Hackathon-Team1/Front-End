import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InnerOneTimeTable from './OneWorkationTimeTable';
import { getDailyAllTable } from '../../api/api_dailyTimeTable';

const OneWorkationTimeTableEach = ({item, setbuttonClick,clickedItem, setClickedItem, dailyWorkationId, setSelectedDailyWorkationId}) => {

  const [dailyAllTable, setDailyAllTable] = useState([])// 데일리 시간표 상태 관리 - 하루 시간표 불러올 때 사용

  const handleOnclick = () => {
    const newClicked = clickedItem === item ? null : item;
    setClickedItem(newClicked);
    setbuttonClick(newClicked !== null);
    if (setSelectedDailyWorkationId) {
      setSelectedDailyWorkationId(dailyWorkationId); // 선택된 daily_workation_id 설정
    } //선택된 해당 날짜의 데일리아이디
  }

  useEffect(() => {
    if (dailyWorkationId){
      const fetchData = async() =>{
        const dailyTableData = await getDailyAllTable(dailyWorkationId);
        setDailyAllTable(dailyTableData);
      };
      fetchData();
    }
  }, [dailyWorkationId])

  return (
    <Container>
      <DayCount onClick={handleOnclick} $clicked={clickedItem === item}>{item}일차</DayCount>
      <Table $clicked={clickedItem===item}>
      {[...Array(24).keys()].map(hour => (
        <InnerOneTimeTable key={hour} hour={hour} clickedItem={clickedItem} dailyWorkationId={dailyWorkationId} dailyAllTable={dailyAllTable} />
      ))}    
      </Table>
    </Container>
    
  )
}

export default OneWorkationTimeTableEach

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right:1.3%;
  margin-left: 0.3%;
  cursor: default;
`

const DayCount = styled.div`
  display: inline-block;
  width: 24%;
  text-align: center;
  background-color: ${({ $clicked }) => ($clicked ? '#FF6B00' : '#FED39D')};;
  border-radius: 4px;
  border: 0.5px solid #FF831C;
  box-sizing: border-box;
  gap: 10px;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: ${({ $clicked }) => ($clicked ? '#FFFFFF' : '#FF6B00')};
  margin-bottom: 3%;
  font-family: 'AppleSDGothicNeoSB', sans-serif;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Table = styled.div`
width: 306px;
height: 416px;
background-color: #FFF2D6;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
border: ${({ $clicked }) => ($clicked ? '1px solid #FF831C' : 'none')};
border-radius: 4px;
cursor: default;
`
