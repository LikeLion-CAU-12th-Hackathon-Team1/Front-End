import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import { useNavigate } from 'react-router-dom';

const MyPageModal = () => {

  const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom);
  const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom);

  const navigate= useNavigate();

  const toLogOut = () => {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    setIsLogin(false)
    setMyPageModal(false)
    navigate("/")
  }

  return (
    <Container>
    <div>로그인된 상태</div>
    <button onClick={toLogOut}>로그아웃하기</button>
    </Container>
  )
}

export default MyPageModal

const Container = styled.div`
  background-color: skyblue;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`