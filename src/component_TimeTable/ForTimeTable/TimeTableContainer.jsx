// 시간표 인덱스와 시간표 담기 위한 컴포넌트

import React from 'react'
import styled from 'styled-components';
import TimeTableEach from './TimeTableEach';
import TimeEditOn from './TimeEditOn';

const TimeTableContainer = ({isTimeEditOn, setIsTimeEditOn,
  startWorkTime, setStartWorkTime, endWorkTime, setEndWorkTime,
  startRestTime, setStartRestTime, endRestTime, setEndRestTime,
  handleTimeUpdate,
  dailyAllTable,
  todayId,
  setToGetWorkId,
  toGetWorkId,
  toGetRestId, setToGetRestId
}) => {

  const timeLabels = ["00:00", "06:00", "12:00", "18:00", "24:00"];

  return (
    <Container>
      <TimeTable>
        {[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},
        {id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20},
        {id:21},{id:22},{id:23}].map((item, index) => {
          const workId = index * 2;
          const restId = index * 2 + 1;
          const timeLabelIndex = [0, 6, 12, 18, 23].indexOf(item.id);
          return (
            <TimeTableEach
              key={index} 
              id={`${index}`} 
              timeLabel={timeLabelIndex !== -1 ? timeLabels[timeLabelIndex] : ""}
              workId={workId}
              restId={restId}
              setIsTimeEditOn={setIsTimeEditOn}
              startWorkTime={startWorkTime} setStartWorkTime={setStartWorkTime}
              endWorkTime={endWorkTime} setEndWorkTime={setEndWorkTime}
              startRestTime={startRestTime} setStartRestTime={setStartRestTime}
              endRestTime={endRestTime} setEndRestTime={setEndRestTime}
              handleTimeUpdate={handleTimeUpdate}
              isTimeEditOn={isTimeEditOn}
              dailyAllTable={dailyAllTable}
              setToGetWorkId={setToGetWorkId}
              toGetWorkId={toGetWorkId}
              toGetRestId={toGetRestId} setToGetRestId={setToGetRestId}
            />
          );
        })}
      </TimeTable>
      {isTimeEditOn ? (<TimeEditOn startWorkTime={startWorkTime} endWorkTime={endWorkTime}
       startRestTime={startRestTime} endRestTime={endRestTime}
       isTimeEditOn={isTimeEditOn} setIsTimeEditOn={setIsTimeEditOn}
       setStartWorkTime={setStartWorkTime} setStartRestTime={setStartRestTime}
       setEndWorkTime={setEndWorkTime} setEndRestTime={setEndRestTime} todayId={todayId} />) : (<TimeEditOff />)
      }
    </Container>
  )
}

export default TimeTableContainer

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF2D6;
  width: 480px;
  height: 662px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const TimeTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 576px;
`
const TimeEditOff = styled.div`
  display: flex;
  flex-direction: row;
  width: 480px;
  height: 32px;
  align-items:center;
  justify-content: space-between;
`