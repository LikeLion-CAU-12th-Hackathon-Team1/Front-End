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
        } else if (locations.pathname.includes('/makeT')) {
            setSelectedMenu('makeT');
        } else {
            setSelectedMenu(null);
        }
    }, [locations]);

    const goTimeTable = () => {
        setSelectedMenu('timetable'); // 선택된 메뉴 설정
        if(localStorage.getItem("access")) {
            navigate('/timetable/alltask');
        } else {
            navigate('/beforeTimeTable');
        };
    }
    const gotoHome = () => {
        setSelectedMenu('home'); // 선택된 메뉴 설정
        navigate('/');
    }

    const maketoT = () => {
        setSelectedMenu('makeT'); // 선택된 메뉴 설정
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
        <Logo src={workvalley} alt="Workvalley Logo" onClick={gotoHome}/>
        <BtnDom>
            <ButtonHis className="alarm_modal" onClick={maketoT} selected={selectedMenu === 'makeT'}>워케이션 등록</ButtonHis>
            <Button type="button" onClick={goTimeTable} selected={selectedMenu === 'timetable'}>시간표</Button>
            <ButtonLogin $isLoginValue={isLoginValue} onClick={isLogin} $myPageModal={myPageModal} selected={selectedMenu === 'login'}>{isLoginValue ? '마이페이지' : '로그인'} </ButtonLogin>
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
    height: 66px;
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
    height: 66px;
    transform: translateX(-50%); /*중앙정렬*/
    left: 50%;
    z-index: 10; /*항상최상단*/

    border-bottom: 1px solid #E9E4DB ;

    @media (max-width: 360px) {
        width: 360px;
        justify-content: center;
        left: 30%;
  }
`
const Logo = styled.img`
    height: 48px;
    width: 197px;
    margin: 8px;
    cursor: pointer;
    @media (max-width: 360px) {
        width: 150px;
        margin-right: -10px;
        margin-left: 30px;
  }

`

const BtnDom = styled.div`
    display : flex;
    justify-content: space-evenly;
    margin-bottom: 11.5px;
    margin-top: 12px;
    font-size: 20px;
    font-weight: 600;
    width: 500px;
    height: 32px;

    @media (max-width: 360px) {
  }
    

`
const ButtonHis= styled.div`
    text-align: center;
    border-bottom: ${props => props.selected ? '3px solid #222222' : 'none'};
    width: 140px;
    height: 43px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
    cursor: pointer;

    @media (max-width: 360px) {
        font-size: 17px;
        margin-right: -30px;
  }
`

const Button= styled.div`
    text-align: center;
    border-bottom: ${props => props.selected ? '3px solid #222222' : 'none'};
    width: 90px;
    height: 43px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-right: 12px;
    cursor: pointer;
    @media (max-width: 360px) {
        font-size: 17px;
        margin-right: -30px;
  }
`

const ButtonLogin = styled.button`
    text-align: center;
    background-color: ${props => props.$isLoginValue? 'white':' #FF831C'};
    /* color :${props => props.$isLoginValue? 'black': 'white'}; */
    color: ${props => props.$isLoginValue ? (props.$myPageModal ? '#FF831C' : 'black') : 'white'};
    border-radius: 4px;
    width: ${props => props.$isLoginValue? '130px': '105px'};
    height: ${props => props.$isLoginValue? '37px': '42px'};
    top: 11px;
    left: 790px;
    padding: 4px 10px;
    margin-right: 1px;
    border: ${props => props.$isLoginValue?'none': '1px solid'};
    font-size: 20px;
    font-weight: 600;
    //border-bottom: 0.5px solid #969696; 
    margin-top: ${props => props.$isLoginValue? 'none':'-4px'};
    cursor: pointer;
    padding-bottom:${props => props.$isLoginValue? '6%': 'none'};

    @media (max-width: 360px) {
        font-size: 17px;
        margin-right: -180px;
  }
`