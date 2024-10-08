import React from 'react'
import styled from 'styled-components';
import NewHome from "../../src/assets/img/New2Home.svg"

const HomeTop = () => {

  const smoothScrollTo = (y)=>{
    window.scrollTo({
      top:y,
      left:0,
      behavior:'smooth'
    });
  }

  const BtnClick = () => {
    smoothScrollTo(730); //2번째랜딩페이지로 위치이동
  }
  return (
    <Wrapper>
      <TitleContainer>
        <Title>어디서든 일하고,<br />어디서든 삶을 즐길 수 있도록</Title>
        <SemiTitle>워케이션을 떠난 프리랜서 맞춤형 워라밸 파트너 <br />출근 전 해변가 러닝, 퇴근 후 서핑하는 삶이 가능해집니다</SemiTitle>
        <Button onClick={BtnClick}>자세히 보기</Button>
      </TitleContainer>
      <EmptyContainer/>
    </Wrapper>
    
  )
}

export default HomeTop

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width : 1440px;
    height: 724px;
    //background-color: #FFFAF0;
    background-image: url(${NewHome});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
    margin-top: 62px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  white-space: pre-wrap;
  width: 500x;
  height: 278px;

  margin-top: 90px;


`
const Title = styled.div`
  font-family: 'AppleSDGothicNeoEB', sans-serif;
  font-size :34px;
  /* font-weight: 00; */
  width: 460px;
  height: 88px;
  line-height: 43.8px;
  /* margin-bottom: 6px; */
  cursor: default;

  @media (max-width: 360px) {
    font-size: 32px;
    margin-left: 17%;
    margin-bottom: -10px;
    /* position: fixed;
    left: -10%;
    top:15% */
  }
`
const EmptyContainer = styled.div`
  width: 400px;
  height: 350px;

  margin-top: 118px;

  //border: 1px solid;
  @media (max-width: 360px) {
    display: none;
  }
`
const SemiTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 40px;
  color: #7a7874;
  letter-spacing: -0.08em;
  line-height: 30.4px;
  cursor: default;
  @media (max-width: 360px) {
    font-size: 15px;
    margin-left: 17%;
    /* position: fixed;
    left: -10%;
    top:22% */
  }
`

const Button = styled.button`
  background-color: #FF831C;
  color: white;
  font-size: 20px;
  font-weight: 700;
  width: 212px;
  height: 52px;
  border: none;
  border-radius: 6px;
  padding: 4px 42px 4px 42px;
  gap: 10px;
  margin-top: 13px;
  cursor: pointer;
  @media (max-width: 360px) {
    font-size: 18px;
    margin-left: 17%;
    /* position: fixed;
    left: 0%;
    top:37% */
  }
`