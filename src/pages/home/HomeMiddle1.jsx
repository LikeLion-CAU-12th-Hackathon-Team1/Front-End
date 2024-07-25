import React from 'react'
import styled from 'styled-components'

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <Title>프리랜서의 증가 <br />But, 무너진 일과 휴식의 구분</Title>
      <InsideWrapper>
        <Inside>
          <StyledImg />
          <InText>소제목1</InText>
          <Content>본문1</Content>
        </Inside>
        <Inside>
        <StyledImg />
          <InText>소제목2</InText>
          <Content>본문2</Content>
        </Inside>
        <Inside>
        <StyledImg />
          <InText>소제목3</InText>
          <Content>본문3</Content>
        </Inside>
      </InsideWrapper>

    </Wrapper>
    
  )
}

export default HomeMiddle1

const Wrapper = styled.div`
    background-color: #f2f2f2;
    text-align: center;
    width : 1200px;
    height: 370px; 
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 3%;
`
const InsideWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 552px;
  height: 213px;
`

const Inside = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;
  height: 213px;
`

const StyledImg = styled.img`
  width: 168px;
  height: 115px;
`

const InText = styled.p`
  font-size: 14px;
  font-weight: 600;
`

const Content =styled.p`
  font-size: 14px;
  font-weight: 400;
`