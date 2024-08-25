import React, { useState } from 'react'
import styled from 'styled-components';
import { patchdailyRetro } from '../../api/api_dailyTimeTable';

const DailyRetrospect = ({ memo, setMemo, todayId}) => {

  const [isRetroEdit, setIsRetroEdit] = useState(false); // 회고 save edit 버튼 상태관리

  // save edit on off 관리
  const handleRetroEdit = () => {
    if(isRetroEdit){
        setIsRetroEdit(false);
    } else {
        setIsRetroEdit(true);
    }
  }

  const handleSaveBtn = () => {
    const daily_workation_id = todayId;
    const body = { memo };
    handleRetroEdit();
    patchdailyRetro(daily_workation_id, body);
  };

  const handleMemoChange = (event) => { //TextArea 내용 변경시 캐치
    setMemo(event.target.value);
  };

  return (
    <>
    <SectionRetro>
        <SectionTitleContainer>
            <SectionTitleRto>Retrospect</SectionTitleRto>
            {isRetroEdit ? (<SaveBtn onClick = {handleSaveBtn}>save</SaveBtn>):
            (<EditBtn onClick = {handleRetroEdit}>edit</EditBtn>)}
        </SectionTitleContainer>
          
        <TextArea 
        value = {memo} // TextArea안의 값을 memo로 지정
        onChange={handleMemoChange}
        readOnly={!isRetroEdit}>
        </TextArea>
    </SectionRetro>
    </>
  )
}

export default DailyRetrospect

const SectionTitleRto = styled.div`
  width: 396px;
  height: 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.02em;
  color: #222222;
  box-sizing: border-box;
  cursor: default;
`;

const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const EditBtn = styled.div`
  background-color: #FFE0AA;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FF831C;
  font-size: 20px;
  font-weight: 500;
`;

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
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;


const SectionRetro = styled.div`
  background-color: #FFF2D6;
  width: 482px;
  height: 205px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 440px;
  height: 125px;
  border-radius: 4px;
  border-color: #FFFAF0;
  resize: none;
  margin-top:10px;
  margin-left: 1px;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.02em;
  background-color: #FFFAF0;
  font-family: 'AppleSDGothicNeoM', sans-serif;
  padding-top: 11px;
  padding-left: 10px;
`;