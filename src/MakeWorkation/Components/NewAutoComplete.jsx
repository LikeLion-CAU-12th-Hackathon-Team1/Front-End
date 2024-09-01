import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

// 텍스트필드 배열
const textField = [
    { label: '강릉', value:1 },
    { label: '속초', value:2 },
    { label: '양양', value:3 },
    { label: '춘천', value:4 },
    { label: '선택해주세요', value: 5}
];

const NewAutoComplete = ({setAnswers}) => {

    // useState로 관리
    const [selectedText, setSelectedText] = useState(textField[4]);

    const handleAutoComplete = (event, newValue) => {
        setSelectedText(newValue);
        if (newValue) {
            setAnswers(prev => {
                return {...prev, ["sigg"]:newValue.value};
              })
        } else {
            setAnswers(prev => {
                return {...prev, ["sigg"]:null};
              })
        }
    };

    return (
    <Con>
        <Autocomplete
            options={textField}
            defaultValue={textField[4]}
            sx={{ width: 200 }}
            onChange={handleAutoComplete}
            renderInput={(params) => (
            <TextField
                {...params}
                sx={{
                    '& .MuiInputBase-root': {
                    color: 'black', // 텍스트 필드의 텍스트 색상
                    backgroundColor: selectedText ? '#FFFAE9' : '#F2F2F2',
                    '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: selectedText ? '#FFE39D' : 'none' // 아웃라인 색상
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'none' // 호버 시 아웃라인 색상
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'none' // 포커스 시 아웃라인 색상
                    }
                    },
                    '& .MuiInputLabel-root': {
                    color: '' // 라벨의 색상
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                    color: '#F2F2F2' // 포커스 시 라벨의 색상
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
    </Con>
    );
}

export default NewAutoComplete;

const Con = styled.div`
    margin-left: 20px;
`