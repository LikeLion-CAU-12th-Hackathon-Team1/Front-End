import React from 'react'
import styled from 'styled-components'
import login2 from "../../assets/img/bfTime.png";
import kakaoLoginBtn from "../../assets/img/KakaoBtn.svg"
import { loginHandler } from '../../api/api_login';

const BeforeLoginWorkation = () => {

  const onClick = () => {
    loginHandler();
  }
  return (
    <Wrapper>
      <Text>로그인 후 실행할 수 있어요!</Text>
      <LoginBtn src={kakaoLoginBtn} onClick={onClick}/>
    </Wrapper>
  )
}

export default BeforeLoginWorkation

const Wrapper = styled.div`
    width : 1280px;
    height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px; //네브바와 겹치지않게 콘텐츠 구역

    background-image: url(${login2});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */

    position: relative;

`
const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  width: 350px; /* 폰트 변경 후 수정 필요*/
  height: 58px;
  margin: 3%;
  position: absolute;
  top: 290px;
  left: 49%;
  transform: translateX(-50%);
  

`
const LoginBtn = styled.img`
  width: 183px;
  height: 45px;
  cursor: pointer;

  position: absolute;
  top: 390px;
  left: 50%;
  transform: translateX(-50%);
`