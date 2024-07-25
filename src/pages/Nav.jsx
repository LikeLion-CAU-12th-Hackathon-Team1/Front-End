import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import superLogo from '../img/super.png';
import { loginHandler } from '../api/api_login';
import { handleLoginClick } from '../function/notice';
import { useRecoilState } from 'recoil';
import { isLoginAtom, isLoginModalAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import MyPageModal from '../component/MyPageModal';
import LoginModal from '../component/LoginModal';

export const Nav = () => {
    const navigate= useNavigate();

    const gotoT = () => {
        navigate('/timetable');
    }
    const gotoHome = () => {
        navigate('/');
    }

    // 로그인 여부 판단하는 함수 및 isLoginAtom 관리 및 어떤 모달창 열건지
    const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 전역상태 로그인 여부
    const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 마이페이지 모달 상태
    const [loginModal, setLoginModal] = useRecoilState(isLoginModalAtom); // 로그인 모달 상태


    // 로그인 상태 판단(액세스 토큰 존재여부)
    const isLogin = () => {
        if(localStorage.getItem("access")){
            setIsLogin(true);
            //myPageModal 열기
            setMyPageModal(true)
        } else{
            setIsLogin(false);
            //loginModal 열기
            //setLoginModal(true)
            loginHandler();
        }
    }

  return (
    <NavDom>
        <Logo src={superLogo} onClick={gotoHome}/>
        <BtnDom>
            <Button className="alarm_modal" onClick={handleLoginClick} >알림</Button>
            <Button type="button" onClick={gotoT}>시간표</Button>
            <Button className="login" onClick={isLogin}>로그인여부</Button> {/** 추후 텍스트 수정 필요 */}
            {myPageModal && (
                <MyPageModal/> // 마이페이지 리코일 상태에 따라 모달 오픈 여부
            )}
            {loginModal && (
                <LoginModal/> // 로그인 리코일 상태에 따라 모달 오픈 여부
            )}
        </BtnDom>
    </NavDom>
  )
}


const NavDom = styled.div`
    display: flex;
    justify-content:  space-between;
    background-color: rgb(188, 252, 255);

    position: fixed; /*화면 상단 고정*/
    top: 0;
    left: 50%;
    width: 1200px;
    height: 48px;

    transform: translateX(-50%); /*중앙정렬*/

    z-index: 10; /*항상최상단*/

`
const Logo = styled.img`
    height: 90%;
    padding-left: 10px;
`

const BtnDom = styled.div`
    display : flex;
    justify-content: space-evenly;
    

`
const Button= styled.div`
    background-color: none;
    text-align: center;
    border: 1px solid black;
    width: 56px;
    height: 25px;
    top: 11px;
    left: 790px;
    border-radius: 4px;
    padding: 4px 10px 4px 10px;
    margin: 10px;

`