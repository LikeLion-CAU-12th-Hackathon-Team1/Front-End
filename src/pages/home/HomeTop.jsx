import React from 'react'
import styled from 'styled-components'

const HomeTop = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>늘어난 재택<br />But,무너진 일과 휴식의 구분</Title>
        <SemiTitle>부가설명부가설명부가설명부가설명</SemiTitle>

        <Button>자세히 보기</Button>
      </TitleContainer>
      <LogoContainer>
        <Img />
      </LogoContainer>
    </Wrapper>
    
  )
}

export default HomeTop

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width : 1440px;
    height: 695px;
    background-color: #FFFAF0;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  white-space: pre-wrap;
  width: 424px;
  height: 350px;

  margin-top: 118px;
`
const Title = styled.div`
  font-size :34px;
  font-weight: 800;
  width: 460px;
  height: 88px;
`
const LogoContainer = styled.div`
  width: 400px;
  height: 350px;

  margin-top: 118px;

  border: 1px solid;
`
const Img = styled.img`
  
`
const SemiTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 100px;
`

const Button = styled.button`
  background-color: #FF831C;
  color: white;
  font-size: 20px;
  font-weight: 700;
  width: 212px;
  height: 52px;
  border: 0px;
  border-radius: 6px;
  padding: 4px 35px 4px 35px;
  gap: 10px;
`