import React from 'react'
import { loginHandler } from '../api/api_login'
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { isLoginModalAtom } from '../recoil/isLoginAtom';

const LoginModal = () => {

  const [loginModal, setLoginModal] = useRecoilState(isLoginModalAtom); // 전역 상태로 로그인모달창이 열려있는지 닫혔는지를 판단

  // 로그인하기 버튼을 눌릴 때 실행될 함수 - 버튼 누르면 카카오 로그인으로 이동 + 로그인모달창 false로 바꾸어 닫기
  const onClickHandler = () => {
    loginHandler()
    setLoginModal(false)
  }

  return (
    <Container>
    <div>loginModal</div>
    <button onClick={onClickHandler}>로그인하기</button>
    </Container>
  )
}

export default LoginModal

const Container = styled.div`
  background-color: skyblue;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`