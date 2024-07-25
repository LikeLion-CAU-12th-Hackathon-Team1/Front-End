import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import { useNavigate } from 'react-router-dom';
import superLogo from '../img/super.png';

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
      <ProfileImg src={superLogo} alt='프로필사진'/>
    <Name>닉네임 | </Name>
    <Email>이메일 | </Email>
    </Container>
  )
}

export default MyPageModal

const Container = styled.div`
  background-color: #ffffff;
  width: 240px;
  height: 217px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 위치 관련 코드*/
  position: fixed;
  top: 10px;
  right: 10px;
  
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 76px;
  height: 76px;
  border-color: black;
  border: 1px solid #ccc;
`

const Name = styled.div`
  font-size: 12px;
  color:black;
`
const Email = styled.div`
  font-size: 12px;
  color:black;
`