// CalenderCom.jsx
import { createTheme, StyledEngineProvider, TextField, ThemeProvider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { endDateAtom, startDateAtom } from '../recoil/makeTAtom';


const theme = createTheme({ // 달력테마 설정
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'none', // 기본 테두리 색상
              //backgroundColor: '#F2F2F2',
            },
            '&:hover fieldset': {
              borderColor: 'none', // 마우스 호버 시 테두리 색상
            },
            '&.Mui-focused fieldset': {
              borderColor: 'none', // 포커스 시 테두리 색상
            },
          },
          '& .MuiInputBase-input': {
            color: 'black', // 입력 텍스트 색상
          },
          '& .MuiInputLabel-root': {
            color: 'orange', // 라벨 텍스트 색상
          },
        },
      },
    },
  },
});

const CalenderCom = ({id}) => {
  const [startDate, setStartDate] = useRecoilState(startDateAtom);
  const [endDate, setEndDate] = useRecoilState(endDateAtom);

  //const [dateValue, setDateValue] = useState(value); // useState 사용해서 사용자가 선택한 날짜 저장

  // 사용자가 날짜 저장하면 체크해서 콘솔에 찍는 함수
  // const handleDateChange = (newValue) => {
  //   setDateValue(newValue);
  //   let days = 0;
  //   let nights = 0;
  //   if (newValue) {
  //     //console.log(dayjs(newValue).format('YYYYMMDD')); // dayjs 사용해서 내가 원하는 형식으로 날짜저장
  //     if (id ==='start-work') {
  //       days = dayjs(newValue).format('YYYYMMDD');
  //       //console.log(days);
  //     } else {
  //       nights = dayjs(newValue).format('YYYYMMDD');
  //       //console.log(nights);
  //     };
  //     let totalNight = nights-days;
  //     console.log(totalNight);

  //   };
  // };
  //두번째 방법
  // const handleDateChange = (newValue)=>{
  //   setDateValue(newValue);
  //   onChange(id, newValue);
  // };

  // useEffect(()=>{
  //   setDateValue(value);
  // },[value]);

  //recoil로 관리
  const handleDateChange = (newValue)=> {
    if(id ==='start-work'){
      setStartDate(newValue);
    } else if (id ==='end-work'){
      setEndDate(newValue);
    }
  };
  
  const dateValue = id === 'start-work'? startDate :endDate;


  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
    id={id}
    label={id === 'start-work' ?'시작일' : '종료일'}
    value={dateValue}
    onChange={handleDateChange}
    renderInput={(params) => <TextField {...params} sx={{ width: '300px', height: '50px' }} />} // 여기서 크기 지정가능
    />
    </LocalizationProvider>
    </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default CalenderCom