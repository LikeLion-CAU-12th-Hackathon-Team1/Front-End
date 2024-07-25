import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import { useNavigate } from 'react-router-dom';

const MyPageModal = () => {

  const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 로그인상태 추적 - 여기서는 로그아웃 버튼 누르면 false로 바꿔야해서 작성
  const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 전역 상태로 마이페이지 모달창이 열려있는지 닫혔는지를 판단

  const navigate= useNavigate();

  // 로그아웃 버튼 눌리면 실행될 함수 - 액세스, 리프레시 토큰 삭제 + 로그인 상태 리코일 false + 마이페이지 모달창 닫기 + 처음 홈 화면으로 이동
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