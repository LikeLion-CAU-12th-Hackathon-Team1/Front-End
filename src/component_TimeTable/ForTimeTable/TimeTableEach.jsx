// 각 시간별 시간표 컴포넌ㅌ

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TimeTableEach = ({ timeLabel, workId, restId, setIsTimeEditOn,
  startWorkTime, setStartWorkTime, endWorkTime, setEndWorkTime,
  startRestTime, setStartRestTime, endRestTime, setEndRestTime,
  handleTimeUpdate, isTimeEditOn, dailyAllTable,}) => {

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
          if (!startWorkTime || parseInt(startWorkTime.split(":")[0]) > workTime) {
            setStartWorkTime(`${workTime}:00`);
            console.log(workTime)
          } else {
            setEndWorkTime(`${workTime+1}:00`);
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
          if (!startRestTime || parseInt(startRestTime.split(":")[0]) > restTime) {
            setStartRestTime(`${restTime}:00`);
            console.log(restTime)
          } else {
            setEndRestTime(`${restTime+1}:00`);
            console.log(restTime)
          }
        }
      }

    }
    
  };

  // 삭제 함수 - 하나씩만 삭제됨... 전체 블록 삭제 미구현
  const handleDelWork = () => {
      if (isWork) {
        if(window.confirm("정말 삭제하시겠습니까?")){
          setIsWork(false);
          //setIsTimeEditOn(false);
          setStartWorkTime("");
          setEndWorkTime("");
        }
      }
  };

  const handleDelRest = () => {
    if (isRest) {
      if(window.confirm("정말 삭제하시겠습니까?")){
      setIsRest(false);
      //setIsTimeEditOn(false);
      setStartRestTime("");
      setEndRestTime("");
    }
  }
  };

  // 불러온 데이터에 따라 상태 업데이트(work, rest 블록)
  //work 블록
  useEffect(() => {
    dailyAllTable.forEach((item) => {
      const start = parseInt(item.start_time.substring(0, 2));
      const end = Math.ceil(parseInt(item.end_time.substring(0, 2)));
      if (item.sort === 1) { // work
        if (workTime >= start && workTime < end) {
          setIsWork(true);
        }
      // } else if (item.sort === 2) { // rest
      //   if (restTime >= start && restTime < end) {
      //     setIsRest(true);
      //   }
      }
    });
  }, [dailyAllTable, workTime, /*restTime*/]);

//rest 블록
  useEffect(() => {
    dailyAllTable.forEach((item) => {
      const start = parseInt(item.start_time.substring(0, 2));
      const end = Math.ceil(parseInt(item.end_time.substring(0, 2)));
      if (item.sort === 2) { // rest
        if (restTime >= start && restTime < end) {
          setIsRest(true);
        }
      }
    });
  }, [dailyAllTable, /*workTime*/, restTime]);


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

  // useEffect(() => {
  //   if (startRestTime && endRestTime) {
  //     const start = parseInt(startRestTime.split(":")[0]);
  //     const end = parseInt(endRestTime.split(":")[0]);
  //     if (restTime >= start && restTime < end) {
  //       setIsRest(false);
  //     } else {
  //       setIsRest(true);
  //     }
  //   }
  // }, [setIsTimeEditOn]);

  // useEffect(() => {
  //   if (startWorkTime && endWorkTime) {
  //     const start = parseInt(startWorkTime.split(":")[0]);
  //     const end = parseInt(endWorkTime.split(":")[0]);
  //     if (workTime >= start && workTime < end) {
  //       setIsWork(false);
  //     } else {
  //       setIsWork(true);
  //     }
  //   }
  // }, [setIsTimeEditOn]);

  return (
    <Container>
      <TextBox>{timeLabel}</TextBox>
      <OneTimeTableWork $isActive={isWork} id={workId}>
        {/* Work ID: {workId} */}
        <BtnContainer>
          {isTimeEditOn ? (<AddBtn onClick={handleAddWork}></AddBtn>):(<><AddBtn onClick={handleAddWork}></AddBtn>
            <DeleteBtn onClick={handleDelWork}></DeleteBtn></>)}
          
        </BtnContainer>
      </OneTimeTableWork>
      <OneTimeTableRest $isActive={isRest} id={restId}>
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