import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import superLogo from '../assets/img/super.png';
import workvalley from '../assets/img/workvalley.svg';
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
    const maketoT = () => {
        //로그인이 되어있다면 워케이션등록으로, 안되어있다면 로그인안내페이지로
        if (localStorage.getItem("access")) {
            navigate('/makeT');
        } else {
            navigate('/beforeMakeT');
        };
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
        <Logo src={workvalley} alt="Workvalley Logo" onClick={gotoHome}/>
        <BtnDom>
            <ButtonHis className="alarm_modal" onClick={maketoT} >워케이션 등록</ButtonHis>
            <Button type="button" onClick={gotoT}>시간표</Button>
            <Button className="login" onClick={isLogin}>로그인</Button> {/** 추후 텍스트 수정 필요 */}
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
    /*background-color: rgb(255, 226, 196);*/

    position: fixed; /*화면 상단 고정*/
    top: 0;
    width: 552px;
    height: 48px;
    transform: translateX(-50%); /*중앙정렬*/
    left: 50%;
    z-index: 10; /*항상최상단*/

    border-bottom: 1px solid #E9E4DB ;
`
const Logo = styled.img`
    height: 28px;
    width: 172px;
    margin: 8px;
`

const BtnDom = styled.div`
    display : flex;
    justify-content: space-evenly;
    margin-bottom: 11.5px;
    margin-top: 5px;
    font-size: 14px;
    font-weight: 600;
    

`
const Button= styled.div`
    text-align: center;
    border-bottom: 0.5px solid #969696;
    width: 56px;
    height: 35px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
`
const ButtonHis= styled.div`
    text-align: center;
    border-bottom: 0.5px solid #969696;
    width: 95px;
    height: 35px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
`