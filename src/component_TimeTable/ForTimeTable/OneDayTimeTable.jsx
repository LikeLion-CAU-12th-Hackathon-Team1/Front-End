import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListCom from '../TodoListCom';
import TimeTableCom from './TimeTableCom';
import GraphCom from '../GraphCom';
import RetrospectCom from '../RetrospectCom';
import { getDailyAllTable, getdailyRetro, getDailyTodayId, getGraph } from '../../api/api_dailyTimeTable'; // 수정수정

const OneDayTimeTable = ({ todayId }) => {

  const date = "2024/07/23 (화)"; // 추후 백 데이터
  const dayCount = "1일차"; // 추후 백 데이터

  const [isTimeEditOn, setIsTimeEditOn] = useState(false); // 시간표 추가시 생성될 좌측하단컴포넌트 상태관리

  // work, rest 각각에 대한 시작, 종료 상태관리
  const [startWorkTime, setStartWorkTime] = useState("");
  const [endWorkTime, setEndWorkTime] = useState("");
  const [startRestTime, setStartRestTime] = useState("");
  const [endRestTime, setEndRestTime] = useState("");

  // api로 받거나 줄 데이터 관리 상태
  const [memo, setMemo] = useState(""); // 회고 관리
  const [dailyAllTable, setDailyAllTable] = useState([]); // 데일리 시간표 상태 관리 - 하루 시간표 불러올 때 사용
  const [graphRatio, setGraphRatio] = useState(0);

  useEffect(() => {
    if (todayId) { // 수정수정
      const fetchData = async () => {
        // 회고 내용 불러오기
        const daily_workation_id = todayId;
        const retroData = await getdailyRetro(daily_workation_id);
        setMemo(retroData.memo); // 회고 내용을 상태에 저장

        // 데일리 시간표 불러오기
        const dailyTableData = await getDailyAllTable(daily_workation_id);
        setDailyAllTable(dailyTableData);

        // 그래프 데이터 불러오기
        const getGraphData = await getGraph(daily_workation_id); // 수정수정
        console.log(getGraphData.ratio);
        setGraphRatio(getGraphData.ratio);
      };

      fetchData();
    }
  }, [todayId]);

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
            <IndexBox1 />
            <IndexText>Work</IndexText>
          </InnerIndexContainer>
          <InnerIndexContainer>
            <IndexBox2 />
            <IndexText>Rest</IndexText>
          </InnerIndexContainer>
        </IndexContainer>
      </Header>

      <ContentContainer>
        <TimeTableCom
          isTimeEditOn={isTimeEditOn}
          setIsTimeEditOn={setIsTimeEditOn}
          startWorkTime={startWorkTime}
          setStartWorkTime={setStartWorkTime}
          endWorkTime={endWorkTime}
          setEndWorkTime={setEndWorkTime}
          startRestTime={startRestTime}
          setStartRestTime={setStartRestTime}
          endRestTime={endRestTime}
          setEndRestTime={setEndRestTime}
          handleTimeUpdate={handleTimeUpdate}
          dailyAllTable={dailyAllTable}
          todayId={todayId}
        ></TimeTableCom>
        <Sidebar>
          <GraphCom graphRatio={graphRatio}></GraphCom>
          {isTimeEditOn ? (
            <TodoListEditMode></TodoListEditMode>
          ) : (
            <TodoListCom />
          )}
          <RetrospectCom memo={memo} setMemo={setMemo} todayId={todayId}></RetrospectCom>
        </Sidebar>
      </ContentContainer>
    </Container>
  );
};

export default OneDayTimeTable;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1020px;
  height: 730px;
  background-color: #fffaF0;
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
  background-color: #fed39d;
  border-radius: 4px;
  border: 0.5px solid #ff831c;
  padding: 4px 10px 4px 10px;
  box-sizing: border-box;
  gap: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ff6b00;
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
`;

const IndexBox1 = styled.div`
  background-color: #ffb336;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
`;

const IndexBox2 = styled.div`
  background-color: #e3dcd0;
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
`;

const Sidebar = styled.div`
  width: 482px;
  height: 662px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const TodoListEditMode = styled.div`
  background-color: #fff2d6;
  width: 482px;
  height: 320px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;