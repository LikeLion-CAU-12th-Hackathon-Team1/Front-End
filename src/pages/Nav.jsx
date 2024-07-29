import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import superLogo from '../assets/img/super.png';
import workvalley from '../assets/img/workvalley.svg';
import { loginHandler } from '../api/api_login';
import { handleLoginClick } from '../function/notice';
import { useRecoilState } from 'recoil';
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import MyPageModal from '../component/MyPageModal';

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
   

    // 로그인 상태 판단(액세스 토큰 존재여부)
    const isLogin = () => {
        if(localStorage.getItem("access")){
            setIsLogin(true);
            //myPageModal 열기
            setMyPageModal(!myPageModal);
        } else{
            setIsLogin(false);
            //loginModal 열기
            //setLoginModal(true)
            loginHandler(); //카카오로그인창으로 이동
        }
    }



  return (
    <Wrraper>
    <NavDom>
        <Logo src={workvalley} alt="Workvalley Logo" onClick={gotoHome}/>
        <BtnDom>
            <ButtonHis className="alarm_modal" onClick={maketoT} >워케이션 등록</ButtonHis>
            <Button type="button" onClick={gotoT}>시간표</Button>
            <ButtonLogin isLoginValue={isLoginValue} onClick={isLogin}>{isLoginValue ? '마이페이지' : '로그인'} </ButtonLogin>
            {myPageModal && (
                <MyPageModal/> // 마이페이지 리코일 상태에 따라 모달 오픈 여부
            )}
        </BtnDom>
    </NavDom>
    </Wrraper>
  
  )
}

const Wrraper =styled.div`
    width: 1440px;
    height: 52px;
    background-color: white;
    z-index: 10; /*항상최상단*/
    position: fixed; /*화면 상단 고정*/
    top: 0;
    transform: translateX(-50%); /*중앙정렬*/
    left: 50%;
`

const NavDom = styled.div`
    display: flex;
    justify-content:  space-between;
    background-color: rgb(255, 255, 255);

    position: fixed; /*화면 상단 고정*/
    top: 0;
    width: 1228px;
    height: 52px;
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
    font-size: 20px;
    font-weight: 600;
    width: 500px;
    height: 32px;
    

`
const ButtonHis= styled.div`
    text-align: center;
    border-bottom: 0.5px solid #969696;
    width: 140px;
    height: 35px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
`

const Button= styled.div`
    text-align: center;
    border-bottom: 0.5px solid #969696;
    width: 90px;
    height: 35px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
`

const ButtonLogin = styled.button`
    text-align: center;
    background-color: ${props => props.isLoginValue? 'white':' #FF831C'};
    color :${props => props.isLoginValue? 'black': 'white'};
    border-radius: 4px;
    width: ${props => props.isLoginValue? '130px': '105px'};
    height: 40px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
    border: ${props => props.isLoginValue?'none': '1px solid'};
    font-size: 20px;
    font-weight: 600;
    border-bottom: 0.5px solid #969696; 
`