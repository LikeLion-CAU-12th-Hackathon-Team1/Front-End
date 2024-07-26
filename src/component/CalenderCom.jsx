// CalenderCom.jsx
import { createTheme, StyledEngineProvider, TextField, ThemeProvider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react'

const theme = createTheme({ // 달력테마 설정
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'blue', // 기본 테두리 색상
            },
            '&:hover fieldset': {
              borderColor: 'green', // 마우스 호버 시 테두리 색상
            },
            '&.Mui-focused fieldset': {
              borderColor: 'purple', // 포커스 시 테두리 색상
            },
          },
          '& .MuiInputBase-input': {
            color: 'red', // 입력 텍스트 색상
          },
          '& .MuiInputLabel-root': {
            color: 'orange', // 라벨 텍스트 색상
          },
        },
      },
    },
  },
});

const CalenderCom = () => {

  const [dateValue, setDateValue] = useState(null); // useState 사용해서 사용자가 선택한 날짜 저장

  // 사용자가 날짜 저장하면 체크해서 콘솔에 찍는 함수
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    if (newValue) {
      console.log(dayjs(newValue).format('YYYYMMDD')); // dayjs 사용해서 내가 원하는 형식으로 날짜저장
    }
  };

  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
    label="Controlled picker"
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