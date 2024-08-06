import React, { useState } from 'react'
import styled from 'styled-components'
import InnerOneTable from './InnerOneTable'
import img23 from "../assets/img/23.svg"
import ii from "../assets/img/iI.svg"
import Gtwo from "../assets/img/Gtwo.svg"

const ThisAllMiddle = ({setbuttonClick, dayB, dailyWorkationList, setSelectedDailyWorkationId}) => {
    //빈배열 안에 저기서 날자 - +1 ㅐ서 넣어

    const [clickedItem, setClickedItem] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const GuideModal2 = ()=> {
      setIsOpen(!isOpen);

    }
  return (
    <Container>
        <TextBox>모든 일정<IImg src={ii} onClick={GuideModal2}/></TextBox>
        <TableBox>
        {Array.from({ length: dayB }, (_, index) => {
          const dailyWorkation = dailyWorkationList[index];
          return (
            <InnerOneTable
              key={index}
              item={index + 1}
              dailyWorkationId={dailyWorkation ? dailyWorkation.daily_workation_id : null}
              setbuttonClick={setbuttonClick}
              clickedItem={clickedItem}
              setClickedItem={setClickedItem}
              setSelectedDailyWorkationId={setSelectedDailyWorkationId}
            />
          );
        })}
        </TableBox>
        {isOpen && (
        <ModalOverlay onClick={GuideModal2}>
          <GuideImg src={Gtwo} />
        </ModalOverlay>
      )}
    </Container>
  )
}

export default ThisAllMiddle

const Container = styled.div`
    width: 97%;
    /* height: 510px; */
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    border-bottom: 1px solid #E9E4DB;
    padding-bottom: 2.5%;
`

const TextBox = styled.div`
    width: 100%;
    /* height: 32px; */
    /* border: 2px solid black; */
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    color: #222222;
    margin: 1.3% 2%;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TableBox = styled.div`
    width: 100%;
    /* height: 458px; */
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin-top: 1%;
    //background-color: #FFF2D6; //잇을때 디자인 물어보기
    border-radius: 8px;
    //padding: 28px 14px 16px 14px;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    
`

const InnerTable = styled.div`
    min-width: 306px;
    height: 458px;
/* border: 2px solid black; */
    /* margin: 10px ; */
    cursor: default;
`

const Img = styled.img`
  width: 1%;
`

const IImg = styled.img`
  width: 22px;
`

const ModalOverlay = styled.div`
  position: absolute; // fixed에서 absolute로 변경
  top: 50%; // 상단에서의 위치를 적절히 조정
  left: 50%;
  transform: translate(-50%, -50%); // 위치를 조정하여 시간표 위로 이동
  width: 100%; // 크기를 적절히 조정
  height: 80%; // 크기를 적절히 조정
  /* background: rgba(0, 0, 0, 0.5); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;


const GuideImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;