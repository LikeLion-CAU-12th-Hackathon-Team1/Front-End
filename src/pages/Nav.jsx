import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import superLogo from '../img/super.png';
import { loginHandler } from '../api/api_login';

export const Nav = () => {
    const navigate= useNavigate();

    const gotoT = () => {
        navigate('/timetable');
    }
    const gotoHome = () => {
        navigate('/');
    }

  return (
    <NavDom>
        <Logo src={superLogo} onClick={gotoHome}/>
        <BtnDom>
            <Button className="alarm_modal" >알림</Button>
            <Button type="button" onClick={gotoT}>시간표</Button>
            <Button className="login" onClick={loginHandler}>로그인</Button>
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
    width: 80%;
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