import React, { useState } from 'react'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider } from '@mui/material';
import dayjs from 'dayjs';

const theme = createTheme({ // 테마설정
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'none', // 기본 테두리 색상
              },
              '&:hover fieldset': {
                borderColor: 'none', // 마우스 호버 시 테두리 색상
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFE39D', // 포커스 시 테두리 색상
              },
            },
            '& .MuiInputBase-input': {
              color: 'balck', // 입력 텍스트 색상
            },
            '& .MuiInputLabel-root': {
              color: 'none', // 라벨 텍스트 색상
            },
          },
        },
      },
    },
  });

const TimePicCom = ({id}) => {

  //const [TimeValue, setTimeValue] = useState(null); // useState 사용해서 사용자가 선택한 날짜 저장

  // 사용자가 날짜 저장하면 체크해서 콘솔에 찍는 함수
  // const handleTimeChange = (newValue) => {
  //   setTimeValue(newValue);
  //   if (newValue) {
  //     console.log(dayjs(newValue).format('HHmm')); // dayjs 사용해서 내가 원하는 형식으로 날짜저장 (24시간)
  //   }
  // };

  
  const [wakeTime, setWakeTime] = useState();
  const [sleepTime, setSleepTime] = useState();
  
    const handleTimeChange = (newValue)=> {
      if(id ==='wake-time'){
        setWakeTime(newValue);
        console.log(dayjs(newValue).format('HHmm'));
      } else if (id ==='sleep-time'){
        setSleepTime(newValue);
        console.log(dayjs(newValue).format('HHmm'));
      }
    };
    
    const TimeValue = id === 'wake-time'? wakeTime :sleepTime;

  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TimePicker
    label={id === 'wake-time' ?'기상시간' : '취침시간'}
    value={TimeValue}
    onChange={handleTimeChange}

    />
    </LocalizationProvider>
    </ThemeProvider>

  )
}

export default TimePicCom