import React from 'react'
import styled from 'styled-components'
import InsideHomeM1 from '../../component/InsideHomeM1'

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <Title>늘어난 재택</Title>
      <Title>But, 무너진 일과 휴식의 구분</Title>
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
    background-color: #ffca9f;
    text-align: center;
    
    width : 1200px;
    min-height: 720px; /*최소높이 설정으로 컨텐츠 보이도록*/
    
    /* padding: 1rem;
    margin: 10px 0; */
    margin-bottom: 10px;
    font-size: 20px;
`

const InsideWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Title = styled.div`
  font-size: 22px;
  margin: 5%;
`

const Inside = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled.img`
  width: 168px;
  height: 115px;
`

const InText = styled.p`
  font-size: 12px;
`

const Content =styled.p`
  font-size: 10px;
`