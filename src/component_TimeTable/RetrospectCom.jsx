// 회고 작성 컴포넌트

import React, { useState } from 'react'
import styled from 'styled-components';

const RetrospectCom = () => {

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
    handleRetroEdit()
    console.log("백엔드 데이터 전송") // 추후 백 연동
  }

  return (
    <>
    <SectionRetro>
        <SectionTitleContainer>
            <SectionTitleRto>Retrospect</SectionTitleRto>
            {isRetroEdit ? (<SaveBtn onClick = {handleSaveBtn}><span>save</span></SaveBtn>):
            (<EditBtn onClick = {handleRetroEdit}><span>edit</span></EditBtn>)}
        </SectionTitleContainer>
          
        <TextArea defaultValue="회고를 작성해주세요!!" readOnly={!isRetroEdit}>
        </TextArea>
    </SectionRetro>
    </>
  )
}

export default RetrospectCom

const SectionTitleRto = styled.div`
  width: 396px;
  height: 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.02em;
  color: #222222;
  box-sizing: border-box;
  //margin-bottom: 4px;
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
  padding: 0;
  margin: 0;
  span {
    color: #FF831C;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    //padding-bottom: 6px;
  }
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
  width: 454px;
  height: 125px;
  border-radius: 4px;
  border-color: #FFFAF0;
  resize: none;
  margin-top:10px;
  margin-left: 1px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28.8px;
  letter-spacing: -0.02em;
  background-color: #FFFAF0;
`;