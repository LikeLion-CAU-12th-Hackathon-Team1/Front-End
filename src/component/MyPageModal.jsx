import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import { useNavigate } from 'react-router-dom';
import superLogo from '../assets/img/super.png';


const MyPageModal = () => {

  const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 로그인상태 추적 - 여기서는 로그아웃 버튼 누르면 false로 바꿔야해서 작성
  const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 전역 상태로 마이페이지 모달창이 열려있는지 닫혔는지를 판단

  const navigate= useNavigate();

    //사용자 닉네임, 이메일 가져오기
    const nickname = localStorage.getItem("nickname");
    const email = localStorage.getItem("email");
    const profile = localStorage.getItem("profile");

  // 로그아웃 버튼 눌리면 실행될 함수 - 액세스, 리프레시 토큰 삭제 + 로그인 상태 리코일 false + 마이페이지 모달창 닫기 + 처음 홈 화면으로 이동
  const toLogOut = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("nickname");
    localStorage.removeItem("email");
    localStorage.removeItem("profile");
    setIsLogin(false);
    setMyPageModal(false);
    navigate("/");
  }

   // 모달 외부 클릭 시 모달 닫기
   const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') { 
      setMyPageModal(false); 
    } 
  } 


  return (
    <Overlay id="modal-overlay" onClick={handleOutsideClick}>
    <Container>
      <ProfileImg src={profile}/>
    <Name> 이름  | {nickname}</Name>
    <Email>이메일  | {email}</Email>
    <LogOut onClick={toLogOut}>로그아웃</LogOut>
    </Container>
    </Overlay>
  )
}

export default MyPageModal

const Overlay = styled.div` 
  position: fixed;
  top: 0; 
  left: 0;
  width: 100vw; 
  height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`; 

const Container = styled.div`
  background-color: #ffffff;
  width: 390px;
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #DCD3C8;
  /* 위치 관련 코드*/
  position: fixed;
  top: 80px;
  right: 40px;
  border-radius: 8px;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border-color: black;
  border: none;
  margin-bottom: 10px;
`

const Name = styled.div`
  font-size: 16px;
  color:black;
  cursor: pointer;
  align-self: flex-start;
  margin-left: 26%;
`
const Email = styled.div`
  font-size: 16px;
  color:black;
  cursor: pointer;
  margin-left: 3%;
`
const LogOut = styled.button`
  color: #007AFF;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 0.5px solid #007AFF;

`