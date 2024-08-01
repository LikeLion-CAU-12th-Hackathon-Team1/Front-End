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
                <Text>일정</Text>
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
width: 976px;
height: 420px;
border-radius: 8px;
border-color: #FEE0AA;
`
const InnerBox = styled.div`
display:flex;
flex-direction: column;
    width: 916px;
    height: 372px;
`
const TextBox = styled.div`
display:flex;
flex-direction:row;
`
const Text = styled.div`
    
`
const ContentBox = styled.div`
display:flex;
flex-direction:row;
    
`
const LeftBox = styled.div`
    
`