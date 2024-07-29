import React from 'react'
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { endDateAtom, startDateAtom } from '../recoil/makeTAtom';



const CalenderResult = ( ) => {

    const startDate= useRecoilValue(startDateAtom);
    const endDate = useRecoilValue(endDateAtom);

    const start = dayjs(startDate);
    const end = dayjs(endDate);
    const nights = end.diff(start, 'day');
    const days = nights+ 1;

    if (!startDate || !endDate) {
        return <CalenderR selected={false}>날짜를 선택하세요</CalenderR>;
      }

    if (startDate > endDate) {
        alert("종료일은 시작일 이후로 설정해주세요.");
        window.location.reload(true);
    }

    
    return (
      <CalenderR selected={true}>
        {nights}박 {days}일
      </CalenderR>
  )


}

export default CalenderResult

const CalenderR = styled.div`
  background-color: ${props => (props.$selected ? '#FFFAE9' : '#F2F2F2')};
  color: ${props => (props.$selected ? '#222222' : '#7A7A7A')};
  border :  ${props => (props.$selected ?  '1px solid #FED29D': 'none' )};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
`;