import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';

// 텍스트필드 배열
const textField = [
    { label: '강원도', value:1 },
    { label: '준비 중입니다.', value:2 },
];

const AutoComplete2 = () => {

    // useState로 관리
    const [selected2Text, setSelected2Text] = useState(textField[0]);

    // 값 변하면 추적해서 출력
    const handleAutoComplete = (event, newValue) => {
        setSelected2Text(newValue);
       
    };

    return (
        <>
            <Autocomplete
                id="combo-box-demo"
                options={textField}
                defaultValue={textField[0]}
                sx={{ width: 200 }}
                onChange={handleAutoComplete}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            '& .MuiInputBase-root': {
                                color: 'black', // 텍스트 필드의 텍스트 색상
                                backgroundColor: selected2Text ? '#FFFAE9' : '#F2F2F2',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: selected2Text ? '#FFE39D' : 'none' // 아웃라인 색상
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
        </>
    );
}

export default AutoComplete2;
