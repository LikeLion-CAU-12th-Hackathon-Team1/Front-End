// 시간표 블록 추가 컴포넌트

import React from 'react'
import styled from 'styled-components'
import { getDailyAllTable, postOneTable } from '../../api/api_dailyTimeTable'

const TimeEditOn = ({startWorkTime, endWorkTime,
    startRestTime, endRestTime,
    isTimeEditOn, setIsTimeEditOn,
setStartWorkTime, setStartRestTime,
setEndWorkTime, setEndRestTime }) => {

  //시간변환 함수
      function getTime(time) {
      const [hours, minutes] = time.split(":");
      const paddedHours = hours.padStart(2, '0');
      const paddedMinutes = minutes.padStart(2, '0');
      const sixDigitTime = `${paddedHours}${paddedMinutes}00`;

      return sixDigitTime;
      }

  // 시간 블록 선택되고 save 버튼 누르면 에디트 창 꺼지고 시간 리셋 + api
  // 아직 작성중....
    const handleSaveBtn = async ()=>{
      const daily_workation_id = 9 // 추후 바꿔야 할 값 - 지금은 테스트용
      let body;

        if(startWorkTime){
          body = {
            sort : 1,
            start_time : getTime(startWorkTime),
            end_time : getTime(endWorkTime)
          };
          await postOneTable(daily_workation_id, body)
          getDailyAllTable(daily_workation_id)
          setStartWorkTime("");
          setEndWorkTime("");
          
        } else {
          body = {
            sort : 2,
            start_time : getTime(startRestTime),
            end_time : getTime(endRestTime)
          }
          await postOneTable(daily_workation_id, body);
          setStartRestTime("");
          setEndRestTime("");
        }
        await getDailyAllTable(daily_workation_id)
        setIsTimeEditOn(false);
        console.log(body);
    }

  return (
    <Container>
      <TimeBox>
        {/* work랑 rest 따로 나누어서 에디트 창에 출력 */}
        {startWorkTime ? (
          <>
            <IndexBox1></IndexBox1>
            <TextBox><span>{startWorkTime}</span></TextBox>
            <div>~</div>
            <TextBox><span>{endWorkTime}</span></TextBox>
          </>
        ) : (
          startRestTime && (
            <>
              <IndexBox2></IndexBox2>
              <TextBox><span>{startRestTime}</span></TextBox>
              <div>~</div>
              <TextBox><span>{endRestTime}</span></TextBox>
            </>
          )
        )}
      </TimeBox>
      <SaveBtn onClick={handleSaveBtn}><span>save</span></SaveBtn>
    </Container>
  )
}

export default TimeEditOn

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 448px;
  height: 32px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width: 230px;
`

const TextBox = styled.div`
  display: flex;
  border: 1px solid #FF831C;
  border-radius: 8px;
  width: 85px;
  height: 32px;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
  span {
    display:flex;
    color: #FF831C;
    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    align-items:center;
    justify-content:center;
    //padding-bottom: 6px;
  }
`

const SaveBtn = styled.div`
  background-color: #FF831C;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  span {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    //padding-bottom: 6px;
  }
`;

const IndexBox1 = styled.div`
  background-color: #FFB336;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
`;

const IndexBox2 = styled.div`
  background-color: #E3DCD0;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
`;