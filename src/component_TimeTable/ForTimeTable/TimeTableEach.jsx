// 각 시간별 시간표 컴포넌ㅌ

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { delDailyTimeBlock } from '../../api/api_dailyTimeTable';

const TimeTableEach = ({ timeLabel, workId, restId, setIsTimeEditOn,
  startWorkTime, setStartWorkTime, endWorkTime, setEndWorkTime,
  startRestTime, setStartRestTime, endRestTime, setEndRestTime,
  handleTimeUpdate, isTimeEditOn, dailyAllTable,setToGetWorkId, toGetWorkId,
  toGetRestId, setToGetRestId,
  setTimeBlockId}) => {

  // work rest 일정이 있는지 상태관리
  const [isWork, setIsWork] = useState(false);
  const [isRest, setIsRest] = useState(false);
    
  // 시간계산
  const workTime = workId / 2;
  const restTime = parseInt(restId / 2);

  // work rest 각각에 대한 추가 버튼 함수
  const handleAddWork = () => {
    if (startRestTime){
      alert("Rest Table에서 지정해주세요!!")
    } else{
      if (isRest) {
        alert("중복시간 입력할 수 없습니다");
      } else {
        if (!isWork) {
          setIsWork(true);
          setIsTimeEditOn(true);
          setEndWorkTime(`${workTime+1}:00`)
          if (!startWorkTime) {
            setStartWorkTime(`${workTime}:00`);
            setEndWorkTime(`${workTime+1}:00`)
            console.log(workTime)
          } else if(startWorkTime && parseInt(startWorkTime.split(":")[0]) > workTime){
            setStartWorkTime(`${workTime}:00`);
            setEndWorkTime(`${parseInt(startWorkTime.split(":")[0])+1}:00`);
            console.log(workTime)
          }
        }
      }
    }
  };

  const handleAddRest = () => {
    if (startWorkTime){
      alert("Work Table에서 지정해주세요!!")
    } else {
      if (isWork) {
        alert("중복시간 입력할 수 없습니다");
      } else {
        if (!isRest) {
          setIsRest(true);
          setIsTimeEditOn(true);
          setEndRestTime(`${restTime+1}:00`)
          if (!startRestTime) {
            setStartRestTime(`${restTime}:00`);
            setEndRestTime(`${restTime+1}:00`)
          } else if(startRestTime && parseInt(startRestTime.split(":")[0]) > restTime){
            setStartRestTime(`${restTime}:00`);
            setEndRestTime(`${parseInt(startRestTime.split(":")[0])+1}:00`);
          }
        }
      }

    }
    
  };

  

  // 삭제 함수
  const handleDelWork = async () => {
      if (isWork) {
        if(window.confirm("정말 삭제하시겠습니까?")){
          //console.log(workId);
          // dailyAllTable의 sort가 1인 것 찾아야 함
          for(let i = 0; i < dailyAllTable.length; i++){
            const clickedWorkTime = (workId / 2);
            const formatStartTime = parseInt(dailyAllTable[i].start_time)/10000
            const formatEndtime = parseInt(dailyAllTable[i].end_time)/10000
            if(dailyAllTable[i].sort === 1 && clickedWorkTime>=formatStartTime &&clickedWorkTime<=formatEndtime){
              // 이제 타임워케이션 아이디 넣기
            const workIdToDel = dailyAllTable[i].time_workation_id;
            setToGetWorkId(workIdToDel)
            console.log(workIdToDel)
            await delDailyTimeBlock(workIdToDel);
            window.location.reload();
            break;
          }
        }
          setIsWork(false);
          //setIsTimeEditOn(false);
          setStartWorkTime("");
          setEndWorkTime("");
        }
      }
  };

  const handleDelRest = async () => {
    if (isRest) {
      if(window.confirm("정말 삭제하시겠습니까?")){
        //console.log(restId);
        for(let i = 0; i < dailyAllTable.length; i++){
          const clickedRestTime = parseInt(restId / 2);
          const formatStartTime = parseInt(dailyAllTable[i].start_time)/10000
          const formatEndtime = parseInt(dailyAllTable[i].end_time)/10000
          if(dailyAllTable[i].sort === 2 && clickedRestTime>=formatStartTime &&clickedRestTime<=formatEndtime){
            // 이제 타임워케이션 아이디 넣기
            const restIdToDel = dailyAllTable[i].time_workation_id;
            setToGetRestId(restIdToDel)
            console.log(restIdToDel)
            await delDailyTimeBlock(restIdToDel);
            window.location.reload();
            break;
          }
        }
        setIsRest(false);
        //setIsTimeEditOn(false);
        setStartRestTime("");
        setEndRestTime("");
    }
  }
  };


  // 블록 클릭시 실행되어 해당 타임 아이디 가져올 함수
  const handleWorkBlock = async () => {
    if (isWork) {
      for(let i = 0; i < dailyAllTable.length; i++){
        const clickedWorkTime = parseInt(workId / 2);
        const formatStartTime = parseInt(dailyAllTable[i].start_time)/10000
        const formatEndtime = parseInt(dailyAllTable[i].end_time)/10000
        if(dailyAllTable[i].sort === 1 && clickedWorkTime>=formatStartTime &&clickedWorkTime<=formatEndtime){
          // 이제 타임워케이션 아이디 넣기
          const workId = dailyAllTable[i].time_workation_id;
          setToGetWorkId(workId)
          console.log(workId)
          break;
        }
      }
  }
  }

  const handleRestBlock = async () => {
    if (isRest) {
        for(let i = 0; i < dailyAllTable.length; i++){
          const clickedRestTime = parseInt(restId / 2);
          const formatStartTime = parseInt(dailyAllTable[i].start_time)/10000
          const formatEndtime = parseInt(dailyAllTable[i].end_time)/10000
          if(dailyAllTable[i].sort === 2 && clickedRestTime>=formatStartTime &&clickedRestTime<=formatEndtime){
            // 이제 타임워케이션 아이디 넣기
            const restId = dailyAllTable[i].time_workation_id;
            setToGetRestId(restId)
            console.log(restId)
            break;
          }
        }
    }
  }

  // 불러온 데이터에 따라 상태 업데이트(work, rest 블록)
  //work 블록
  useEffect(() => {
    dailyAllTable.forEach((item) => {
      const start = parseInt(item.start_time.substring(0, 2));
      const end = Math.ceil(parseInt(item.end_time.substring(0, 2)));
      if (item.sort === 1) { // work
        if (workTime >= start && workTime < end) {
          setIsWork(true);
        } else if(workTime >= start && workTime <= end && workTime == 23){
          setIsWork(true);
        }
      }
    });
  }, [dailyAllTable, workTime]);

//rest 블록
  useEffect(() => {
    dailyAllTable.forEach((item) => {
      const start = parseInt(item.start_time.substring(0, 2));
      const end = Math.ceil(parseInt(item.end_time.substring(0, 2)));
      if (item.sort === 2) { // rest
        if (restTime >= start && restTime < end) {
          setIsRest(true);
        } else if(workTime >= start && workTime <= end && workTime == 23){
          setIsWork(true);
        }
      }
    });
  }, [dailyAllTable, restTime]);


  // workTime, restTime 각각 변화 추적하며 블록 생성
  useEffect(() => {
    if (startWorkTime && endWorkTime) {
      const start = parseInt(startWorkTime.split(":")[0]);
      const end = parseInt(endWorkTime.split(":")[0]);
      if (workTime >= start && workTime < end) {
        setIsWork(true);
      } else {
        //setIsWork(false);
      }
    }
  }, [startWorkTime, endWorkTime, workTime]);

  useEffect(() => {
    if (startRestTime && endRestTime) {
      const start = parseInt(startRestTime.split(":")[0]);
      const end = parseInt(endRestTime.split(":")[0]);
      if (restTime >= start && restTime < end) {
        setIsRest(true);
      } else {
        //setIsRest(false);
      }
    }
  }, [startRestTime, endRestTime, restTime]);

  return (
    <Container>
      <TextBox>{timeLabel}</TextBox>
      <OneTimeTableWork $isActive={isWork} id={workId} onClick={handleWorkBlock}>
        {/* Work ID: {workId} */}
        <BtnContainer>
          {isTimeEditOn ? (<AddBtn onClick={handleAddWork}></AddBtn>):(<><AddBtn onClick={handleAddWork}></AddBtn>
            <DeleteBtn onClick={handleDelWork}></DeleteBtn></>)}
          
        </BtnContainer>
      </OneTimeTableWork>
      <OneTimeTableRest $isActive={isRest} id={restId} onClick={handleRestBlock}>
        {/* Rest ID: {restId} */}
        <BtnContainer>
          {isTimeEditOn ? (<AddBtn onClick={handleAddRest}></AddBtn>):(<><AddBtn onClick={handleAddRest}></AddBtn>
            <DeleteBtn onClick={handleDelRest}></DeleteBtn></>)}
          
        </BtnContainer>
      </OneTimeTableRest>
    </Container>
  )
}

export default TimeTableEach

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  justify-content: center;
  align-items: center;
`
const OneTimeTableWork = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 180px;
  height: 24px;
  background-color: ${({ $isActive }) => ($isActive ? '#FFA837' : '#FFFFFF')};
  border-radius: 100px;
  margin-right: 15px;
`
const OneTimeTableRest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 180px;
  height: 24px;
  background-color: ${({ $isActive }) => ($isActive ? '#E3DCD0' : '#FFFFFF')};
  border-radius: 100px;
  margin-right: 15px;
`
const TextBox = styled.div`
  width: 55px;
  font-size: 20px;
  margin-right: 10px;
  color: #FF6B00;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 38px;
  margin-left: 140px;
`
const DeleteBtn = styled.div`
  width: 17px;
  height: 17px;
  background-color: #CAC5BB;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '✕';
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
    position: absolute;
  }
`
const AddBtn = styled.div`
  width: 17px;
  height: 17px;
  background-color: #CAC5BB;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '+';
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    position: absolute;
  }
`