// 시간표랑 시간표 에디트창 담는 컴포넌트

import React from 'react'
import TimeTableContainer from './TimeTableContainer';

const TimeTableCom = ({isTimeEditOn,setIsTimeEditOn,
  startWorkTime, setStartWorkTime, endWorkTime, setEndWorkTime,
  startRestTime, setStartRestTime, endRestTime, setEndRestTime,
  handleTimeUpdate,
  dailyAllTable,
}) => {
  return (
    <>
    <TimeTableContainer isTimeEditOn={isTimeEditOn} setIsTimeEditOn={setIsTimeEditOn}
    startWorkTime={startWorkTime} setStartWorkTime={setStartWorkTime}
    endWorkTime={endWorkTime} setEndWorkTime={setEndWorkTime}
    startRestTime={startRestTime} setStartRestTime={setStartRestTime}
    endRestTime={endRestTime} setEndRestTime={setEndRestTime}
    handleTimeUpdate={handleTimeUpdate}
    dailyAllTable={dailyAllTable}>
    </TimeTableContainer>
    </>
  )
}

export default TimeTableCom
