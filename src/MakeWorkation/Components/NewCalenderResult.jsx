import React from 'react'
import styled from 'styled-components';
import dayjs from 'dayjs';

const NewCalenderResult = ({ answers }) => {
    const { start_date, end_date } = answers;
    if (!start_date || !end_date) {
        return <CalenderR selected={false}>날짜를 선택하세요</CalenderR>;
    }

    const start = dayjs(start_date);
    const end = dayjs(end_date);

    if (start.isAfter(end)) {
        return <CalenderR selected={false}>종료일은 시작일 이후로 설정해주세요.</CalenderR>;
    }

    const nights = end.diff(start, 'day');
    const days = nights + 1;

    return (
        <CalenderR selected={true}>
            {nights}박 {days}일
        </CalenderR>
    );
}

export default NewCalenderResult;

const CalenderR = styled.div`
  background-color: ${props => (props.selected ? '#FFFAE9' : '#F2F2F2')};
  color: ${props => (props.selected ? '#222222' : '#7A7A7A')};
  border: ${props => (props.selected ? '1px solid #FED29D' : 'none')};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 16px;
`;