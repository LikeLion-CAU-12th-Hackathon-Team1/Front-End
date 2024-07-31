// 시간표, 그래프, 투두, 회고 들어가는 박스
// 여기서 백이랑 통신 - 아래로 내려가는 변수들 다 여기서 관리

import React, { useState } from 'react'
import styled from 'styled-components';
import TodoListCom from '../TodoListCom';
import TimeTableCom from './TimeTableCom';
import GraphCom from '../GraphCom';
import RetrospectCom from '../RetrospectCom';

const OneDayTimeTable = () => {

    const date = "2024/07/23 (화)" // 추후 백 데이터
    const dayCount = "1일차" // 추후 백 데이터


  const [isTimeEditOn, setIsTimeEditOn] = useState(false); // 시간표 추가시 생성될 좌측하단컴포넌트 상태관리

  // work, rest 각각에 대한 시작, 종료 상태관리
  const [startWorkTime, setStartWorkTime] = useState("");
  const [endWorkTime, setEndWorkTime] = useState("");
  const [startRestTime, setStartRestTime] = useState("");
  const [endRestTime, setEndRestTime] = useState("");

  // 사용 안하는 중
  const handleTimeUpdate = (type, startTime, endTime) => {
    if (type === 'work') {
      setStartWorkTime(startTime);
      setEndWorkTime(endTime);
    } else {
      setStartRestTime(startTime);
      setEndRestTime(endTime);
    }
  };


  return (
    <Container>

        <Header>
            <DateContainer>
                <Date>{date}</Date>
                <DayCount>{dayCount}</DayCount>
            </DateContainer>

            <IndexContainer>
                <InnerIndexContainer>
                    <IndexBox1/>
                    <IndexText>Work</IndexText>
                </InnerIndexContainer>
                <InnerIndexContainer>
                    <IndexBox2/>
                    <IndexText>Rest</IndexText>
                </InnerIndexContainer>
            </IndexContainer>
        </Header>

      <ContentContainer>
        <TimeTableCom isTimeEditOn={isTimeEditOn} setIsTimeEditOn={setIsTimeEditOn} 
        startWorkTime={startWorkTime} setStartWorkTime={setStartWorkTime} 
        endWorkTime={endWorkTime} setEndWorkTime={setEndWorkTime}
        startRestTime={startRestTime} setStartRestTime={setStartRestTime} 
        endRestTime={endRestTime} setEndRestTime={setEndRestTime}
        handleTimeUpdate={handleTimeUpdate}
        ></TimeTableCom>
        <Sidebar>
            <GraphCom></GraphCom>
            {isTimeEditOn ? (<TodoListEditMode></TodoListEditMode>) : <TodoListCom/>}
            <RetrospectCom></RetrospectCom> 
        </Sidebar>
      </ContentContainer>
      
    </Container>
    
  )
}

export default OneDayTimeTable

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1020px;
  height: 730px;
  background-color: #FFFAF0;
  box-sizing: border-box;
`;

const Header = styled.div`
    width: 974px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 256px;
    height: 32px;
    gap: 20px;
    box-sizing: border-box;
`;

const Date = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.07em;
  color: #222222;
  width: 174px;
  height: 19px;
  box-sizing: border-box;
`;

const DayCount = styled.div`
  display: inline-block;
  width: 67px;
  height: 32px;
  background-color: #FED39D;
  border-radius: 4px;
  border: 0.5px solid #FF831C;
  padding: 4px 10px 4px 10px;
  box-sizing: border-box;
  gap: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #FF6B00;
`;

const IndexContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 180px;
    height: 30px;
    box-sizing: border-box;
    justify-content: space-between;
`;

const InnerIndexContainer = styled.div`
display: flex;
flex-direction: row;
    width: 82px;
    height: 30px;
    gap: 6px;
    box-sizing: border-box;
`

const IndexBox1 = styled.div`
  background-color: #FFB336;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
`;

const IndexBox2 = styled.div`
  background-color: #E3DCD0;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
`;

const IndexText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26.4px;
  color: #000000;
  box-sizing: border-box;
  letter-spacing: -0.02em;
  width: 46px;
  height: 15px;
  
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 974px;
    height: 662px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

const Sidebar = styled.div`
  width: 482px;
  height: 662px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const TodoListEditMode = styled.div`
  background-color: #FFF2D6;
  width: 482px;
  height: 320px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`






