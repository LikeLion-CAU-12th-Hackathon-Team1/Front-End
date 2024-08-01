import React from 'react'
import styled from 'styled-components';

const ThisAllRetro = () => {
  return (
    <SectionRetro>
    <SectionTitleContainer>
        <SectionTitleRto>Retrospect</SectionTitleRto>
    </SectionTitleContainer>
    <TextArea readOnly/>
    </SectionRetro>
    )
}

export default ThisAllRetro

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

const SectionTitleContainer = styled.div`
display: flex;
flex-direction: row;
`

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