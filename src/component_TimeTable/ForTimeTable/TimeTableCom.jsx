// 시간표랑 시간표 에디트창 담는 컴포넌트

import React from 'react'
import TimeTableContainer from './TimeTableContainer';

const TimeTableCom = ({isTimeEditOn,setIsTimeEditOn,
  startWorkTime, setStartWorkTime, endWorkTime, setEndWorkTime,
  startRestTime, setStartRestTime, endRestTime, setEndRestTime,
  handleTimeUpdate,
  dailyAllTable,
  todayId,
  setToGetWorkId,
  toGetWorkId,
  toGetRestId,
  setToGetRestId,
  setTimeBlockId
}) => {
  return (
    <>
    <TimeTableContainer isTimeEditOn={isTimeEditOn} setIsTimeEditOn={setIsTimeEditOn}
    startWorkTime={startWorkTime} setStartWorkTime={setStartWorkTime}
    endWorkTime={endWorkTime} setEndWorkTime={setEndWorkTime}
    startRestTime={startRestTime} setStartRestTime={setStartRestTime}
    endRestTime={endRestTime} setEndRestTime={setEndRestTime}
    handleTimeUpdate={handleTimeUpdate}
    dailyAllTable={dailyAllTable}
    todayId={todayId}
    setToGetWorkId={setToGetWorkId}
    toGetWorkId={toGetWorkId}
    toGetRestId={toGetRestId}
    setToGetRestId={setToGetRestId}
    setTimeBlockId={setTimeBlockId}>
      
    </TimeTableContainer>
    </>
  )
}

export default TimeTableCom
