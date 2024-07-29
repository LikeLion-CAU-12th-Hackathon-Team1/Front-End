import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react'

// 텍스트필드 배열
const textField = [
    { label: '강릉' },
    { label: '속초' },
    { label: '양양' },
    { label: '춘천' }
  ];

const AutoComplete = () => {

// useState로 관리
const [selectedText, setSelectedText] = useState(null);

// 값 변하면 추적해서 출력
const handleAutoComplete = (event, newValue) => {
    setSelectedText(newValue);
    if (newValue) {
        console.log(newValue.label);
        //값 저장해서 백에게 전송하는 코드 추가하기
    }
  };

  return (
    <>
    <Autocomplete
        //disablePortal
        id="combo-box-demo"
        options={textField}
        sx={{ width: 200 }}
        onChange={handleAutoComplete}
        renderInput={(params) => (
            <TextField
            {...params}
            //label="강원특별자치도"
            sx={{
                '& .MuiInputBase-root': {
                    color: 'black', // 텍스트 필드의 텍스트 색상
                    backgroundColor: selectedText ? '#FFFAE9' : '#F2F2F2',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: selectedText ? ' #FFE39D' : 'none' // 아웃라인 색상
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'none' // 호버 시 아웃라인 색상
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'none' // 포커스 시 아웃라인 색상
                    }
                },
                '& .MuiInputLabel-root': {
                    color: 'orange' // 라벨의 색상
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'red' // 포커스 시 라벨의 색상
                }
            }}
            InputProps={{
                ...params.InputProps,
                style: { height: 30 } // 원하는 높이로 변경
            }}
            InputLabelProps={{
                style: { fontSize: 12 } // 라벨의 크기 조정
            }}
            />
        )}
    />
    </>
  )
}

export default AutoComplete