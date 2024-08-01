import React from 'react'
import styled from 'styled-components'
import ThisAllGraph from './ThisAllGraph'
import ThisAllRetro from './ThisAllRetro'
import ThisAllTodo from './ThisAllTodo'

const ThisAllBottom = () => {
  return (
    <Container>
        <InnerBox>
            <TextBox>
                <Text> </Text>
            </TextBox>
            <ContentBox>
                <LeftBox>
                    <ThisAllGraph/>
                    <ThisAllRetro/>
                </LeftBox>
                <ThisAllTodo/>
            </ContentBox>
        </InnerBox>
    </Container>
  )
}

export default ThisAllBottom

const Container = styled.div`
width: 100%;
/* height: 420px; */
border-radius: 8px;
border-color: #FEE0AA;
`
const InnerBox = styled.div`
display:flex;
flex-direction: column;
    width: 100%;
    height: 372px;
`
const TextBox = styled.div`
display:flex;
flex-direction:row;
`
const Text = styled.div`
    height: 20px;
`
const ContentBox = styled.div`
    display:flex;
    width: 100%;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    
`
const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`