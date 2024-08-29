import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const OneWorkationRetrospect = ({daily_workation_id}) => {

  const [memo, setMemo] = useState('');

  useEffect(() => {
    const fetchMemoData = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get(`https://saengchaein.r-e.kr/workation/daily/${daily_workation_id}/memo/`,{
          headers: {
            Authorization: `Bearer ${token}` // Authorization 헤더 설정
          }
        });
        setMemo(response.data.memo);
      } catch (error) {
      }
    };

    if (daily_workation_id) {
      fetchMemoData();
    }
  }, [daily_workation_id]);

  return (
    <SectionRetro>
      <SectionTitleContainer>
        <SectionTitleRto>Retrospect</SectionTitleRto>
      </SectionTitleContainer>
      <TextArea readOnly value={memo}/>
    </SectionRetro>
    )
}

export default OneWorkationRetrospect

const SectionRetro = styled.div`
background-color: #FFF2D6;
width: 482px;
height: 200px;
border-radius: 4px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
`;

const SectionTitleContainer = styled.div`
display: flex;
flex-direction: row;
`

const SectionTitleRto = styled.div`
width: 396px;
font-weight: 700;
font-size: 24px;
letter-spacing: -0.02em;
color: #222222;
box-sizing: border-box;
margin-left: -7%;
cursor: default;
`;

const TextArea = styled.textarea`
width: 454px;
height: 145px;
border-radius: 4px;
border-color: #FFFAF0;
resize: none;
margin-top:5px;
margin-left: 1px;
font-weight: 400;
font-size: 20px;
letter-spacing: -0.02em;
background-color: #FFFAF0;
font-family: 'AppleSDGothicNeoM', sans-serif;
cursor: default;
`;