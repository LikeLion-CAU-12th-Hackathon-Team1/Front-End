import React from 'react'
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

const NewTimePicCom = ({id, setAnswers, answers}) => {
  
    const handleTimeChange = (newValue)=> {
      if(id ==='end_sleep'){
        setAnswers(prev => {
          return {...prev, ["end_sleep"]:dayjs(newValue).format('HHmm')};
        })
      } else if (id ==='start_sleep'){
        setAnswers(prev => {
          return {...prev, ["start_sleep"]:dayjs(newValue).format('HHmm')};
        })
      }
    };
    
    const TimeValue = id === 'end_sleep'? dayjs(answers["end_sleep"], 'HHmm') : dayjs(answers["start_sleep"], 'HHmm');

  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TimePicker
    label={id === 'wake-time' ?'기상시간' : '취침시간'}
    value={TimeValue.isValid() ? TimeValue : null}
    onChange={handleTimeChange}

    />
    </LocalizationProvider>
    </ThemeProvider>

  )
}

export default NewTimePicCom