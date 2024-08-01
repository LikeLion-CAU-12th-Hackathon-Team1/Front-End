import React from 'react'
import styled from 'styled-components'

const HistoryAllCom = () => {
  return (
    <Container>
        <TitleBox>
            <Title>시간순</Title>
        </TitleBox>
        <ContentBox>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(()=>{
                return(
                <OneWorkation>ee</OneWorkation>
                )
            })}

        </ContentBox>
    </Container>
  )
}

export default HistoryAllCom

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1020px;
  height: 730px;
  background-color: #FFFAF0;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
    width: 960px;
    height: 32px;
    border:2px solid black;
`

const Title = styled.div`
    width: 47px;
    height: 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.6px;
    letter-spacing: -0.02em;
    color: #7A7A7A;
    
`
const ContentBox = styled.div`
    width: 962px;
    height:auto;
    max-height: 720px;
    overflow-y: auto;
`

const OneWorkation = styled.div`
    width: 960px;
    height: 56px;
    border: 2px solid black;
`