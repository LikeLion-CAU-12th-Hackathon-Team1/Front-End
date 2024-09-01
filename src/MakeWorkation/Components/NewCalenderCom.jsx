// CalenderCom.jsx
import { createTheme, StyledEngineProvider, TextField, ThemeProvider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react'



const theme = createTheme({ // 달력테마 설정
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'gray', // 기본 테두리 색상
              //backgroundColor: '#F2F2F2',
            },
            '&:hover fieldset': {
              borderColor: 'gray', // 마우스 호버 시 테두리 색상
            },
            '&.Mui-focused fieldset': {
              borderColor: 'gray', // 포커스 시 테두리 색상
            },
            '&.Mui-error fieldset': { //여기
              borderColor: 'gray', // 오류 시 테두리 색상 변경
            },
          },
          '& .MuiInputBase-input': {
            color: 'black', // 입력 텍스트 색상
          },
          '& .MuiInputLabel-root': {
            color: 'gray', // 라벨 텍스트 색상
            '&.Mui-focused': {
              color: 'gray', // 포커스 시 라벨 텍스트 색상
            },
            '&.Mui-error': {
              color: '#F98C16', // 오류 시 라벨 텍스트 색상 변경
            },
          },
        },
      },
    },
  },
});

const NewCalenderCom = ({id, setAnswers, answers}) => {
  const handleDateChange = (newValue)=> {
    if(id ==='start_date'){
      setAnswers(prev => {
        return {...prev, ["start_date"]:dayjs(newValue).format('YYYYMMDD')};
      })
    } else if (id ==='end_date'){
      setAnswers(prev => {
        return {...prev, ["end_date"]:dayjs(newValue).format('YYYYMMDD')};
      })
    }
  };
  
  const dateValue = id === 'start_date' ? dayjs(answers["start_date"]).format('YYYY-MM-DD') : dayjs(answers["end_date"]).format('YYYY-MM-DD');


  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id={id}
            label={id === 'start-work' ? '시작일' : '종료일'}
            value={dateValue ? dayjs(dateValue) : null}
            onChange={handleDateChange}
            slots={{ textField: (params) => (
              <TextField
                {...params}
                sx={{ width: '300px', height: '50px', margin: '0 16px' }} // 여기서 크기 지정가능
              />
            ) }}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default NewCalenderCom;