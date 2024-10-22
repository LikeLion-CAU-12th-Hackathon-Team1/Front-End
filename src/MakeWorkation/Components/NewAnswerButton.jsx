import React from 'react'
import styled from 'styled-components';

const NewAnswerButton = ({text, onClick, selected}) => {
  return (
    <div style={{marginBottom: '15px', marginLeft : '20px'}}>
        <Button onClick={onClick} selected={selected}>{text}</Button>
    </div>

  )
}

export default NewAnswerButton

const Button = styled.button`
  background-color: ${props => (props.selected ? '#FFFAE9' : '#F2F2F2')};
  color: ${props => (props.selected ? '#222222' : '#7A7A7A')};
  border :  ${props => (props.selected ?  '2px solid #FED29D': 'none' )};
  padding: 10px 20px;
  margin: 3px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
  font-weight: ${(props) => (props.selected ? 600 : 'normal')}; 

`;