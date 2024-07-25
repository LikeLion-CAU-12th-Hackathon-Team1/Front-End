import React from 'react'
import { loginHandler } from '../api/api_login'
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { isLoginModalAtom } from '../recoil/isLoginAtom';

const LoginModal = () => {

  const [loginModal, setLoginModal] = useRecoilState(isLoginModalAtom);

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