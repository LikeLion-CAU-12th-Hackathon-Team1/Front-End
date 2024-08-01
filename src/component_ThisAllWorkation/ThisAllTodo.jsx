import React, { useState } from 'react'
import styled from 'styled-components';

const ThisAllTodo = () => {

    // const [isTodoEdit, setIsTodoEdit] = useState(false);
    // const [todoList, setTodoList] = useState(initialTodoListArray);
    // const [isChecked, setIsChecked] = useState(initialIsCheckedArray)

    // const handleCheckboxChange = (index) => {
    //     const newCheckedItems = [...isChecked];
    //     newCheckedItems[index] = !newCheckedItems[index];
    //     setIsChecked(newCheckedItems);
    //   }

  return (
    <>
    <SectionTodo>
            <SectionTitleContainer>
            <SectionTitleTodo>To-do list</SectionTitleTodo>
            </SectionTitleContainer>
          
          <TodoListContainer>
          {[1,2,3,4].map((item) => (
            <TodoItem key={item}>
            <CheckboxContainer>
                <Checkbox type="checkbox"/>
            </CheckboxContainer>
            </TodoItem>
          ))}
          </TodoListContainer>
        </SectionTodo>
    </>
  )
}

export default ThisAllTodo

const SectionTitleTodo = styled.div`
  width: 350px;
  height: 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.02em;
  color: #222222;
  box-sizing: border-box;
  //margin-bottom: 4px;
`;

const AddBtn = styled.div`
  background-color: #FFE0AA;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-right: 15px;
  

  span {
    color: #FF831C;
    font-size: 38px;
    font-weight: 300;
    line-height: 1;
    padding-bottom: 6px;
  }
`;

const EditBtn = styled.div`
  background-color: #FFE0AA;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  span {
    color: #FF831C;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    //padding-bottom: 6px;
  }
`;

const SaveBtn = styled.div`
  background-color: #FF831C;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  span {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    //padding-bottom: 6px;
  }
`;

const SectionTodo = styled.div`
  background-color: #FFF2D6;
  width: 482px;
  height: 320px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

`;

const TodoListContainer = styled.div`
    height: 260px;
    width: 454px;
    margin-top: 13px;
`

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 10px;
`;

const Checkbox = 
  styled.input.attrs({ type: 'checkbox' })`
  width: 32px;
  height: 32px;
  appearance: none;
  border: 2px solid #FFE0AA;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #FF831C; /* 체크된 상태의 배경색 */
    border: 2px solid #FF831C;
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 52%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 12px;
    height: 6px;
    border: solid white;
    border-width: 0 0 4px 4px;
  }
`;

const CheckboxContainer = styled.div`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding:0;
    margin:0;
`
const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
`