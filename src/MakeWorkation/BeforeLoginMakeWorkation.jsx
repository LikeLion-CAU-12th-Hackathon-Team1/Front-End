import React from 'react'
import styled from 'styled-components'
import kakaoLoginBtn from "../../src/assets/img/KakaoBtn.svg"
import { loginHandler } from '../api/api_login';
import Side1 from "../../src/assets/img/Side1.svg";

const BeforeLoginMakeWorkation = () => {

  const clickKaKaoLogin = () => {
    loginHandler();
  }

  return (
    <Wrapper>
      <Text>로그인 후 설정할 수 있어요!</Text>
      <LoginBtn src={kakaoLoginBtn} onClick={clickKaKaoLogin}/>
    </Wrapper>
  )
}

export default BeforeLoginMakeWorkation

const Wrapper = styled.div`
    width : 1228px;
    height: 744px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 66px; /*네브바와 겹치지않게 콘텐츠 구역 */
    background-image: url(${Side1});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
`
const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 1.6%;

`
const LoginBtn = styled.img`
  width: 183px;
  height: 45px;
  cursor: pointer;
`