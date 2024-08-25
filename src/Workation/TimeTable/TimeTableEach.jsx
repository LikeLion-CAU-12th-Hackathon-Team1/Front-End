import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { delDailyTimeBlock } from '../../api/api_dailyTimeTable';

const TimeTableEach = ({
  timeLabel, workId, restId, setIsTimeEditOn,
  startWorkTime, setStartWorkTime, endWorkTime, setEndWorkTime,
  startRestTime, setStartRestTime, endRestTime, setEndRestTime,
  isTimeEditOn, dailyAllTable, setToGetWorkId, setToGetRestId, setTimeId
}) => {
  // work rest 일정이 있는지 상태관리
  const [isWork, setIsWork] = useState(false);
  const [isRest, setIsRest] = useState(false);

  // 시간계산
  const workTime = workId / 2;
  const restTime = parseInt(restId / 2);

  // 시간 추가 함수
  const handleAddTime = (type) => {
    if (type === 'work' && startRestTime) {
      alert("Rest Table에서 지정해주세요!!");
      return;
    }
    if (type === 'rest' && startWorkTime) {
      alert("Work Table에서 지정해주세요!!");
      return;
    }

    const isOverlap = type === 'work' ? isRest || isWork : isWork || isRest;
    const setStartTime = type === 'work' ? setStartWorkTime : setStartRestTime;
    const setEndTime = type === 'work' ? setEndWorkTime : setEndRestTime;
    const setIsTime = type === 'work' ? setIsWork : setIsRest;
    const time = type === 'work' ? workTime : restTime;

    if (isOverlap) {
      alert("중복시간 입력할 수 없습니다");
    } else {
      setIsTime(true);
      setIsTimeEditOn(true);
      setEndTime(`${time + 1}:00`);
      if (!startWorkTime && type === 'work' || !startRestTime && type === 'rest') {
        setStartTime(`${time}:00`);
      } else if (startWorkTime && parseInt(startWorkTime.split(":")[0]) > time && type === 'work' ||
        startRestTime && parseInt(startRestTime.split(":")[0]) > time && type === 'rest') {
        setStartTime(`${time}:00`);
        setEndTime(`${parseInt(type === 'work' ? startWorkTime.split(":")[0] : startRestTime.split(":")[0]) + 1}:00`);
      }
    }
  };

  // 삭제 함수
  const handleDelTime = async (type) => {
    const isTime = type === 'work' ? isWork : isRest;
    const setIsTime = type === 'work' ? setIsWork : setIsRest;
    const setStartTime = type === 'work' ? setStartWorkTime : setStartRestTime;
    const setEndTime = type === 'work' ? setEndWorkTime : setEndRestTime;
    const idToDelete = type === 'work' ? setToGetWorkId : setToGetRestId;
    const clickedTime = type === 'work' ? workTime : restTime;

    if (isTime) {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        for (let i = 0; i < dailyAllTable.length; i++) {
          const formatStartTime = parseInt(dailyAllTable[i].start_time) / 10000;
          const formatEndtime = parseInt(dailyAllTable[i].end_time) / 10000;
          if (dailyAllTable[i].sort === (type === 'work' ? 1 : 2) &&
            clickedTime >= formatStartTime && clickedTime <= formatEndtime) {
            const timeIdToDel = dailyAllTable[i].time_workation_id;
            idToDelete(timeIdToDel);
            await delDailyTimeBlock(timeIdToDel);
            window.location.reload();
            break;
          }
        }
        setIsTime(false);
        setStartTime("");
        setEndTime("");
      }
    }
  };

  // 블록 클릭 시 실행되어 해당 타임 아이디 가져올 함수
  const handleBlockClick = (type) => {
    const isTime = type === 'work' ? isWork : isRest;
    const clickedTime = type === 'work' ? workTime : restTime;

    if (isTime) {
      for (let i = 0; i < dailyAllTable.length; i++) {
        const formatStartTime = parseInt(dailyAllTable[i].start_time) / 10000;
        const formatEndtime = parseInt(dailyAllTable[i].end_time) / 10000;
        if (dailyAllTable[i].sort === (type === 'work' ? 1 : 2) &&
          clickedTime >= formatStartTime && clickedTime <= formatEndtime) {
          const timeId = dailyAllTable[i].time_workation_id;
          setTimeId(timeId);
          break;
        }
      }
    }
  };

  // 불러온 데이터에 따라 상태 업데이트(work, rest 블록)
  useEffect(() => {
    dailyAllTable.forEach((item) => {
      const start = parseInt(item.start_time.substring(0, 2));
      let end = Math.ceil(parseInt(item.end_time.substring(0, 2)));

      if (item.end_time === '235959') {
        end = Math.ceil(parseInt(item.end_time.substring(0, 2))) + 1;
      }

      if (item.sort === 1) { // work
        if ((workTime >= start && workTime < end) || (workTime === 24 && workTime >= start && workTime <= end)) {
          setIsWork(true);
        }
      } else if (item.sort === 2) { // rest
        if ((restTime >= start && restTime < end) || (restTime === 24 && restTime >= start && restTime <= end)) {
          setIsRest(true);
        }
      }
    });
  }, [dailyAllTable, workTime, restTime]);

  // workTime, restTime 각각 변화 추적하며 블록 생성
  useEffect(() => {
    if (startWorkTime && endWorkTime) {
      const start = parseInt(startWorkTime.split(":")[0]);
      const end = parseInt(endWorkTime.split(":")[0]);
      if ((workTime >= start && workTime < end) || (workTime === 24 && workTime >= start && workTime <= end)) {
        setIsWork(true);
      }
    }
  }, [startWorkTime, endWorkTime, workTime]);

  useEffect(() => {
    if (startRestTime && endRestTime) {
      const start = parseInt(startRestTime.split(":")[0]);
      const end = parseInt(endRestTime.split(":")[0]);
      if ((restTime >= start && restTime < end) || (restTime === 24 && restTime >= start && restTime <= end)) {
        setIsRest(true);
      }
    }
  }, [startRestTime, endRestTime, restTime]);

  return (
    <Container>
      <TextBox>{timeLabel}</TextBox>
      <OneTimeTableWork $isActive={isWork} id={workId} onClick={() => handleBlockClick('work')}>
        <BtnContainer>
          {isTimeEditOn ? (
            <AddBtn onClick={() => handleAddTime('work')}></AddBtn>
          ) : (
            <>
              <AddBtn onClick={() => handleAddTime('work')}></AddBtn>
              {isWork ? (<DeleteBtn onClick={() => handleDelTime('work')}></DeleteBtn>):(<></>)}
            </>
          )}
        </BtnContainer>
      </OneTimeTableWork>
      <OneTimeTableRest $isActive={isRest} id={restId} onClick={() => handleBlockClick('rest')}>
        <BtnContainer>
          {isTimeEditOn ? (
            <AddBtn onClick={() => handleAddTime('rest')}></AddBtn>
          ) : (
            <>
              <AddBtn onClick={() => handleAddTime('rest')}></AddBtn>
              {isRest ? (<DeleteBtn onClick={() => handleDelTime('rest')}></DeleteBtn>):(<></>)}
            </>
          )}
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
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : '')};
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
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : '')};
`
const TextBox = styled.div`
  width: 55px;
  font-family: 'AppleSDGothicNeoSB', sans-serif;
  //font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  color: #FFAE6B;
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
    font-size: 10px;
    font-weight: 800;
    line-height: 1;
    position: absolute;
    /* padding-left: 2px;
    padding-top: 1px; */
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
  /* padding-top: 6%; */

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
    /* padding-top: 4px; */
    /* padding-left: 1px; */
  }
`