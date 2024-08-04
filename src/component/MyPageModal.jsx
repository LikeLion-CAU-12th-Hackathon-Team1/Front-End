import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import { useNavigate } from 'react-router-dom';
import superLogo from '../assets/img/super.png';
import axios from 'axios';


const MyPageModal = () => {

  const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 로그인상태 추적 - 여기서는 로그아웃 버튼 누르면 false로 바꿔야해서 작성
  const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 전역 상태로 마이페이지 모달창이 열려있는지 닫혔는지를 판단
  const navigate= useNavigate();

    //사용자 닉네임, 이메일 가져오기
    const nickname = localStorage.getItem("nickname");
    const email = localStorage.getItem("email");
    const profile = localStorage.getItem("profile");

    const baseURL = `https://saengchaein.r-e.kr`;
    //백 버전으로 로그아웃
    const logout = async()=> {
      const token =localStorage.getItem('access');
      if (!token) {
        console.error('No access token found');
        return;
      }

      try {
        // const response1 = await axios.post(`https://kapi.kakao.com/v1/user/logout`,null, {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // });

        const response = await axios.post(`${baseURL}/account/logout/`,null, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });


        console.log('Logout Response:', response);
        return response.data;
        // 전송 성공 시 처리 로직 추가 (예: 페이지 이동 등) 
      } catch (error) {
        console.error('Error Logout:', error);
        throw error;
        // 에러 처리 로직 추가 (예: 사용자에게 알림)
      }
    }

  // 로그아웃 버튼 눌리면 실행될 함수 - 액세스, 리프레시 토큰 삭제 + 로그인 상태 리코일 false + 마이페이지 모달창 닫기 + 처음 홈 화면으로 이동
  const toLogOut = () => {
    logout(); //로그아웃 백에서 되면 ..~!
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
      <Compo>
    <NameCom> 이름  <Name>{nickname}</Name></NameCom>
    <EmailCom>이메일  <Em>{email}</Em> </EmailCom>
    <LogOut onClick={toLogOut}>로그아웃</LogOut>
    </Compo>
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
const Compo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`


const NameCom = styled.div`
  font-size: 16px;
  color:black;
  cursor: pointer;
  align-self: flex-start;
  margin-left: 25%;
  display: flex;
  flex-direction: row;
`
const EmailCom = styled.div`
  font-size: 16px;
  color:black;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  margin-left:23%;
  margin-top: 5px;
`
const Name = styled.div`
  text-align: center;
  border-left: 1px solid #A7A7A7;
  padding-left: 27px;
  margin-left: 15px;
  font-weight: 600;
`
const Em = styled.div`
  color : #A7A7A7;
  border-left: 1px solid #A7A7A7;
  padding-left: 10px;
  margin-left: 7px;
  font-weight: 500;
`
const LogOut = styled.a`
  color: #439cfc;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 0.5px solid #439cfc;

`