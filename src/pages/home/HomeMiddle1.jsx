import React from 'react'
import styled from 'styled-components'
import GImg from "../../assets/img/Group 94.svg"

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <Title>일과 휴식을 동시에, <br />워크밸리에서 꿈꾸던 워라밸을 실현하세요!</Title>
      <InsideWrapper>
       <StyledImg src={GImg} />
       <Inside>
       <InText>균형잡힌 워라밸 관리</InText>
       <InText>AI 추천 일정 관리</InText>
       <InText>업무/휴식 공간 추천</InText>
       </Inside>
        
      </InsideWrapper>

    </Wrapper>
    
  )
}

export default HomeMiddle1

const Wrapper = styled.div`
    background-color: #FFF0CA;
    text-align: center;
    width : 1440px;
    height: 724px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-top: 1%;
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

const StyledImg = styled.div`
  width: 230px;
  height: 134px;
  background-color: #FFF8E5;
  border-color: #FFA837;
`

const InText = styled.p`
  font-size: 22px;
  font-weight: 700;
  width: 230px;
  height: 47px;
  border-radius: 6px;
  background-color: #FFA837;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

// const Content =styled.p`
//   font-size: 20px;
//   font-weight: 600;
//   white-space: pre-wrap;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `