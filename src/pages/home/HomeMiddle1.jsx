import React from 'react'
import styled from 'styled-components'

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <Title>일과 휴식을 동시에, <br />워크밸리에서 꿈꾸던 워라밸을 실현하세요!</Title>
      <InsideWrapper>
        <Inside>
          <StyledImg />
          <InText>워라밸 관리</InText>
          <Content>#워라밸 그래프<br />#일/휴식 분리형 일정표</Content>
        </Inside>
        <Inside>
        <StyledImg />
          <InText>일정 관리</InText>
          <Content>#AI 기본 스케줄 제공<br />#전체/하루 일정 회고<br/>#투두리스트<br/>#지난 워케이션 확인</Content>
        </Inside>
        <Inside>
        <StyledImg />
          <InText>업무/휴식 공간 추천</InText>
          <Content>#웰니스 공간<br/>#지역 특산물 식당<br/>#자연</Content>
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
  justify-content: space-evenly;
  align-items: center;
  width: 900px;
  height: 351px;
  margin: 1%;
`

const Inside = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
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

const Content =styled.p`
  font-size: 20px;
  font-weight: 600;
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`