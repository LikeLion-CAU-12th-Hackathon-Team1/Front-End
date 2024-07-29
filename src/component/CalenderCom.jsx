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