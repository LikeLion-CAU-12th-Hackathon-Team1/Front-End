import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import workvalley from '../assets/img/workvalleylogo.svg';
import { loginHandler } from '../api/api_login';
import { useRecoilState } from 'recoil';
import { isLoginAtom, isMyPageModalAtom } from '../recoil/isLoginAtom';
import MyPageModal from '../component/MyPageModal';

export const Nav = () => {
    const navigate= useNavigate();
    const [selectedMenu, setSelectedMenu] = useState(null); // 선택된 메뉴 상태 추가

    //언더바 추가(url에 기반해서)
    const locations = useLocation();

    useEffect(()=> {
        if (locations.pathname.includes('/timetable')) {
            setSelectedMenu('timetable');
        } else if (locations.pathname === '/') {
            setSelectedMenu('home');
        } else if (locations.pathname.includes('/makeWorkation')) {
            setSelectedMenu('makeWorkation');
        } else {
            setSelectedMenu(null);
        }
    }, [locations]);

    const goTimeTable = () => {
        setSelectedMenu('timetable'); // 선택된 메뉴 설정
        if(localStorage.getItem("access")) {
            navigate('/timetable/allWorkation');
        } else {
            navigate('/beforeTimeTable');
        };
    }
    const goHome = () => {
        setSelectedMenu('home'); // 선택된 메뉴 설정
        navigate('/');
    }

    const goMakeWorkation = () => {
        setSelectedMenu('makeWorkation'); // 선택된 메뉴 설정
        //로그인이 되어있다면 워케이션등록으로, 안되어있다면 로그인안내페이지로
        if (localStorage.getItem("access")) {
            navigate('/makeWorkation');
        } else {
            navigate('/beforeLoginMakeWorkation');
        };
    }

    // 로그인 여부 판단하는 함수 및 isLoginAtom 관리 및 어떤 모달창 열건지
    const [isLoginValue, setIsLogin] = useRecoilState(isLoginAtom); // 전역상태 로그인 여부
    const [myPageModal, setMyPageModal] = useRecoilState(isMyPageModalAtom); // 마이페이지 모달 상태
    

    // 로그인 상태 판단(액세스 토큰 존재여부)
    const isLogin = () => {
        // setSelectedMenu('login'); // 선택된 메뉴 설정
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
        <Logo src={workvalley} alt="Workvalley Logo" onClick={goHome}/>
        <BtnDom>
            <Button onClick={goMakeWorkation} selected={selectedMenu === 'makeWorkation'}>워케이션 등록</Button>
            <Button type="button" onClick={goTimeTable} selected={selectedMenu === 'timetable'}>시간표</Button>
            <ButtonLogin $isLoginValue={isLoginValue} onClick={isLogin} $myPageModal={myPageModal}>{isLoginValue ? '마이페이지' : '로그인'} </ButtonLogin>
            {myPageModal && (
                <MyPageModal/> // 마이페이지 리코일 상태에 따라 모달 오픈 여부
            )}
        </BtnDom>
    </NavDom>
    </Wrraper>
  
  )
}

const Wrraper =styled.div`
    width: 100vw;
    height: 66px;
    background-color: white;
    z-index: 10; /*항상최상단*/
    position: fixed; /*화면 상단 고정*/
    transform: translateX(-50%); /*중앙정렬*/
    left: 50%;
`

const NavDom = styled.div`
    display: flex;
    justify-content:  space-between;
    background-color: rgb(255, 255, 255);
    align-items: center;

    position: fixed; /*화면 상단 고정*/
    width: 100vw;
    max-width: 1228px;
    min-width: 460px;
    height: 66px;
    transform: translateX(-50%); /*중앙정렬*/
    left: 50%;
    z-index: 10; /*항상최상단*/
    border-bottom: 1px solid #E9E4DB ;
    
`
const Logo = styled.img`
    height: 48px;
    width: 197px;
    margin: 8px;
    cursor: pointer;
    @media (max-width: 700px) {
        width: 150px;
  }
`

const BtnDom = styled.div`
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    width: 500px;
    height: 32px;

    @media (max-width: 700px) {
        font-size: 16px;
  }
    

`
const Button= styled.div`
    border-bottom: ${props => props.selected ? '3px solid #222222' : 'none'};
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
    cursor: pointer;
`

const ButtonLogin = styled.div`
    background-color: ${props => props.$isLoginValue? 'white':' #FF831C'};
    color: ${props => props.$isLoginValue ? (props.$myPageModal ? '#FF831C' : 'black') : 'white'};
    border-radius: 4px;
    padding: 4px 10px;
    margin-left: ${props => props.$isLoginValue? 'none': '16.5px'};
    margin-right: ${props => props.$isLoginValue? 'none': '16.5px'};
    cursor: pointer;
`