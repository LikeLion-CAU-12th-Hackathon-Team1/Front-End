import React from 'react'
import styled from 'styled-components'
import G94 from "../../assets/img/Group 94.svg"

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
  width: 1440px;
  height: 30px;
  background-color: #FFE4B0;
  opacity: 50%;
  border: none;
  position: absolute;
  bottom: 0;
`
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-top: 2%;
  margin-bottom: 3%;
  font-family: 'AppleSDGothicNeoM', sans-serif;
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
`

const StyledImg = styled.img`
  width: 880px;
  height: 267px;
  /* background-color: #FFF8E5; */
  border-color: #FFA837;
  margin-bottom: 2%;
`

const InText = styled.p`
  /* font-family: 'AppleSDGothicNeoM', sans-serif; */
  font-size: 22px;
  font-weight: 700;
  /* width: 230px; */
  /* height: 47px; */
  border-radius: 6px;
  background-color: #FFA837;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px 12px 14px;
  margin :0 3%;
  
`

// const Content =styled.p`
//   font-size: 20px;
//   font-weight: 600;
//   white-space: pre-wrap;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `