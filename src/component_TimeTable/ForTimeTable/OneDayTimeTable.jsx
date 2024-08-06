import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListCom from '../TodoListCom';
import TimeTableCom from './TimeTableCom';
import GraphCom from '../GraphCom';
import RetrospectCom from '../RetrospectCom';
import { getDailyAllTable, getdailyRetro, getDailyTodayId, getDailyTodo, getGraph, getTimeTodo } from '../../api/api_dailyTimeTable'; // 수정수정
import { formatDate} from '../../api/mappingData';
import day from "../../assets/img/day2.svg";
import ii from "../../assets/img/iI.svg";
import GOne from "../../assets/img/GOne.svg"

const OneDayTimeTable = ({ todayId, todayDate, todayIndex }) => {

  const formatedDate = formatDate(todayDate)
  const date = formatedDate; // 추후 백 데이터
  const dayCount = `${todayIndex}일차`; // 추후 백 데이터

  const [isTimeEditOn, setIsTimeEditOn] = useState(false); // 시간표 추가시 생성될 좌측하단컴포넌트 상태관리

  //time_worktation_id 얻기위한 상태관리
  const [toGetWorkId, setToGetWorkId] = useState(null);
  const [toGetRestId, setToGetRestId] = useState(null);

  // work, rest 각각에 대한 시작, 종료 상태관리
  const [startWorkTime, setStartWorkTime] = useState("");
  const [endWorkTime, setEndWorkTime] = useState("");
  const [startRestTime, setStartRestTime] = useState("");
  const [endRestTime, setEndRestTime] = useState("");

  // api로 받거나 줄 데이터 관리 상태
  const [memo, setMemo] = useState(""); // 회고 관리
  const [dailyAllTable, setDailyAllTable] = useState([]); // 데일리 시간표 상태 관리 - 하루 시간표 불러올 때 사용
  const [graphRatio, setGraphRatio] = useState(0);
  const [dailyAllTodo, setDailyAllTodo] = useState([]); // 전체투두 또는 타임블록 투두 조회시 사용
  const [getTimeId, setTimeId] = useState(null); // 클릭블록 time_worktation_id 따로 관리

  useEffect(() => {
    if (todayId) {
      const fetchData = async () => {
        // 회고 내용 불러오기
        const daily_workation_id = todayId;
        const retroData = await getdailyRetro(daily_workation_id);
        setMemo(retroData.memo); // 회고 내용을 상태에 저장

        // 데일리 시간표 불러오기
        const dailyTableData = await getDailyAllTable(daily_workation_id);
        setDailyAllTable(dailyTableData);

        // 그래프 데이터 불러오기
        const getGraphData = await getGraph(daily_workation_id);
        //console.log(getGraphData.data);
        setGraphRatio(getGraphData.ratio);

        // 전체 하루 투두 불러오기
        const dailyTodoData = await getDailyTodo(daily_workation_id);
        //console.log(dailyTodoData.data)
        setDailyAllTodo(dailyTodoData)

        
      };
      fetchData();
    }
  }, [todayId]);

  // 이하는 타임블록 투두 불러와서 출력하기 위한 것
  useEffect(()=>{
    if(getTimeId){
      const fetchData = async () => {
        // 타임블록 투두 불러오기
          const time_workation_id = getTimeId
          const timeBlockTodoData = await getTimeTodo(time_workation_id);
          setDailyAllTodo(timeBlockTodoData)
          console.log("콘솔확인콘솔확인")
        }
      fetchData();
    }
      
  }, [getTimeId])

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


  //가이드창 띄우기
  const [isOpen, setIsOpen] = useState(false);
  const GuideModal1 = ()=> {
    setIsOpen(!isOpen);
  }


  return (
    <Container>
      <Header>
        <DateContainer>
          <DImg src={day} />
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
          <Icon src={ii} onClick={GuideModal1}/>
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
          setToGetWorkId={setToGetWorkId} toGetWorkId={toGetWorkId}
          toGetRestId={toGetRestId} setToGetRestId={setToGetRestId}
          setTimeId={setTimeId}
        ></TimeTableCom>
        <Sidebar>
          <GraphCom graphRatio={graphRatio}></GraphCom>
          {isTimeEditOn ? (
            <TodoListEditMode></TodoListEditMode>
          ) : (
            <TodoListCom dailyAllTodo={dailyAllTodo} toGetWorkId={toGetWorkId} toGetRestId={toGetRestId} getTimeId={getTimeId}/>
          )}
          <RetrospectCom memo={memo} setMemo={setMemo} todayId={todayId}></RetrospectCom>
        </Sidebar>
      </ContentContainer>


      {isOpen && (
        <ModalOverlay onClick={GuideModal1}>
          <GuideImg src={GOne} />
        </ModalOverlay>
      )}
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
  width: 45%;
  height: 32px;
  gap: 20px;
  box-sizing: border-box;
  align-items: center;
`;

const DImg = styled.img`
  width: 40px;
`
const Date = styled.div`
  font-family: 'AppleSDGothicNeoB', sans-serif; //오늘일정 글씨체
  /* font-weight: 700; */
  font-size: 28px;
  line-height: 26px;
  letter-spacing: -0.07em;
  color: #222222;
  /* width: 90%; */
  /* height: 19px; */
  box-sizing: border-box;
  cursor: default;
`;
const Icon = styled.img`
  width: 25px;
`

const DayCount = styled.div`
  display: inline-block;
  /* width: 20%; */
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
  cursor: default;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 22%;
  height: 30px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
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
  /* font-weight: 500; */
  font-size: 20px;
  line-height: 26.4px;
  color: #000000;
  box-sizing: border-box;
  letter-spacing: -0.02em;
  /* width: 46px; */
  height: 15px;
  font-family: 'AppleSDGothicNeoB', sans-serif;
  margin-top: 3px;
  cursor: default;
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
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(105, 105, 105, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
// `;
const ModalOverlay = styled.div`
  position: absolute; // fixed에서 absolute로 변경
  top: 20%; // 상단에서의 위치를 적절히 조정
  left: 50%;
  transform: translate(-45%, -21%); // 위치를 조정하여 시간표 위로 이동
  width: 100%; // 크기를 적절히 조정
  height: 100%; // 크기를 적절히 조정
  /* background: rgba(0, 0, 0, 0.5); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;


const GuideImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;