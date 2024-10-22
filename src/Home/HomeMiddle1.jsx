import React from 'react'
import styled from 'styled-components'
import G94 from "../../src/assets/img/G94.svg"

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <Title>일과 휴식을 동시에, <br />워크밸리에서 꿈꾸던 워라밸을 실현하세요!</Title>
      <InsideWrapper>
       <StyledImg src={G94} />
       <Inside>
       <InText>균형잡힌 워라밸 관리</InText>
       <InText>AI 추천 일정 관리</InText>
       <InText>업무/휴식 공간 추천</InText>
       </Inside>
      </InsideWrapper>
      <Wrapper2 />
    </Wrapper>
    
  )
}

export default HomeMiddle1

const Wrapper = styled.div`
    background-color: #FFF0CA;
    text-align: center;
    width : 1440px;
    height: 661px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Wrapper2 = styled.div`
  width: 100%;
  height: 30px;
  background-color: #FFE4B0;
  opacity: 50%;
  border: none;
  position: absolute;
  bottom: 0;
`
const Title = styled.div`
  font-size: 30px;
  /* font-weight: 800; */
  margin-top: -15px;
  margin-bottom: 3%;
  font-family: 'AppleSDGothicNeoEB', sans-serif;
  cursor: default;

`
const InsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 900px;
  height: 359px;
  margin: 1%;
`

const Inside = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 880px;
  height: 279px;
  margin-top: 20px;
 
`

const StyledImg = styled.img`
  width: 880px;
  height: 267px;
  /* background-color: #FFF8E5; */
  border-color: #FFA837;
  margin-bottom: 2%;
`

const InText = styled.p`
  font-family: 'AppleSDGothicNeoB', sans-serif;
  font-size: 22px;
  border-radius: 6px;
  background-color: #FFA837;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 35px;
  margin :0 3%;
  cursor: default;
  
`

