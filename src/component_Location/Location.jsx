import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import WorkLoca from './WorkLoca';
import RestLoca from './RestLoca';
import { getSiggMap } from '../api/mappingData';


const Location = ({sigg}) => {
    //관리가 편하기 위해 Work,Rest 나눠서 상태관리
    const [WorkCategory, setWorkcategory] = useState(1);
    const [RestCategory, setRestcategory] = useState(5);
    const [siggMapping, setSiggMapping] = useState('');
    const [sigg_id, setSigg_id] = useState(sigg);

    const setButtonStyle = (isButtonOn) => ({
        backgroundColor: isButtonOn ? "#FF831C" : "#FED39D",
        borderColor: isButtonOn ? "#FF6B00" : "#FF831C",
        color: isButtonOn ? "#FFFFFF" : "#FF6B00"
    });

    useEffect(() => {
        const mapping = getSiggMap(sigg);
        setSiggMapping(mapping);
        setSigg_id(sigg);
    }, [sigg]);
    


  return (
    <Wrapper>
        <WrapperText>{`${siggMapping}의 이런 장소를 추천해요!`}</WrapperText>
        <WrapperIn className='work'>
            <Title>
                Work 장소 추천
                <TitleSelectBtn className='first' onClick={()=>{setWorkcategory(1)}}
                    style={setButtonStyle(WorkCategory === 1)}>
                    카페
                </TitleSelectBtn>
                <TitleSelectBtn onClick={()=>setWorkcategory(2)}
                    style={setButtonStyle(WorkCategory === 2)}>
                    오피스
                </TitleSelectBtn>
            </Title>
            <Content>
                <WorkLoca WorkCategory={WorkCategory} sigg={sigg_id}/>
            </Content>
        </WrapperIn>
        <WrapperIn className='rest'>
            <Title>
                Rest 장소 추천
                <TitleSelectBtn className='first' onClick={()=>setRestcategory(5)}
                    style={setButtonStyle(RestCategory === 5)}>
                    웰니스
                </TitleSelectBtn>
                <TitleSelectBtn onClick={()=>setRestcategory(3)}
                    style={setButtonStyle(RestCategory === 3)}>
                    자연
                </TitleSelectBtn>
                <TitleSelectBtn onClick={()=>setRestcategory(4)}
                    style={setButtonStyle(RestCategory === 4)}>
                    먹거리
                </TitleSelectBtn>
            </Title>
            <Content>
                <RestLoca RestCategory={RestCategory} sigg={sigg_id}/>
            </Content>
            
        </WrapperIn>
        

    </Wrapper>
  )
}

export default Location

const Wrapper = styled.div`
    width: 1228px;
    height: 700px;
    display: flex;
    flex-direction: column;
`
const WrapperText = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 60px;
    cursor: default;
`
const WrapperIn = styled.div`
    width:1228px;
    height: 270px;
    border: 10px solid 'black';

    display: flex; 
    /* align-items: center; */
    flex-direction: column; 
    justify-content: center;

    &.work {
        //background-color:  lightblue;
        margin-bottom: 120px;
    }

    &.rest {
        //background-color: lightgreen;
    }
`
const Title = styled.div`
    width: 60%;
    height: 1%;
    display: flex;
    font-size: 29px;
    /* font-weight: 800; */
    margin-left: 10px;
    align-items: center;
    font-family: 'AppleSDGothicNeoEB', sans-serif;
    cursor: default;
    font-size: 30px;
`
const Content = styled.div`
    width: 1258px;
    height: 200px;
    margin-top: 50px;
`
const TitleSelectBtn = styled.div`
    /* width: 10%; */
    /* height: 32px; */
    display: flex;
    border: 0.5px solid #FF6B00;
    border-radius: 4px;
    //background-color: #FFD39D;
    color : #FF831C;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    font-family: 'AppleSDGothicNeoM', sans-serif;
    padding: 0 12px 0.5%;
    cursor: pointer;
    font-size: 25px;

    &.first {
        margin-left: 30px;
    }


`