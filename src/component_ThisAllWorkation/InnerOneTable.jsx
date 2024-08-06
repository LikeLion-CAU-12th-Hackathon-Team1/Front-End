import React, { useState } from 'react'
import styled from 'styled-components';
import InnerOneTimeTable from './InnerOneTimeTable';

const InnerOneTable = ({item, setbuttonClick,clickedItem, setClickedItem, dailyWorkationId, setSelectedDailyWorkationId}) => {

  const [clicked, setClicked] = useState(false);

  const handleOnclick = () => {
    const newClicked = clickedItem === item ? null : item;
    setClickedItem(newClicked);
    setbuttonClick(newClicked !== null);
    if (setSelectedDailyWorkationId) {
      setSelectedDailyWorkationId(dailyWorkationId); // 선택된 daily_workation_id 설정
    } //선택된 해당 날짜의 데일리아이디
  }

  return (
    <Container>
    <DayCount onClick={handleOnclick} $clicked={clickedItem === item}>{item}일차</DayCount>
    <Table $clicked={clickedItem===item}>
        {/* {[0,1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23].map((_, index)=>{
        return(
        <InnerOneTimeTable key={index}></InnerOneTimeTable>
        )})} */}
         {[...Array(24).keys()].map(hour => (
                    <InnerOneTimeTable key={hour} hour={hour} clickedItem={clickedItem} dailyWorkationId={dailyWorkationId} />
                ))}
        
    </Table>
    </Container>
    
  )
}

export default InnerOneTable

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
  /* height: 32px; */
  text-align: center;
  background-color: ${({ $clicked }) => ($clicked ? '#FF6B00' : '#FED39D')};;
  border-radius: 4px;
  border: 0.5px solid #FF831C;
  /* padding: 4px 10px ; */
  box-sizing: border-box;
  gap: 10px;
  /* font-weight: 550; */
  font-size: 20px;
  /* line-height: 24px; */
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
//padding: 16px 14px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
border: ${({ $clicked }) => ($clicked ? '1px solid #FF831C' : 'none')};
border-radius: 4px;
cursor: default;
`
