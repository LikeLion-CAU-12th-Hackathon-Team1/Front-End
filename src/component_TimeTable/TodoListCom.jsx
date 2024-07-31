// 투두리스트 컴포넌트

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { TodoListArray as initialTodoListArray, isCheckedArray as initialIsCheckedArray} from './ForTimeTable/Data';

const TodoListCom = () => {

    const [isTodoEdit, setIsTodoEdit] = useState(false);
    const [todoList, setTodoList] = useState(initialTodoListArray);
    const [isChecked, setIsChecked] = useState(initialIsCheckedArray)

    const handleTodoEdit = () => {
        if(isTodoEdit){
            setIsTodoEdit(false);
        } else {
            setIsTodoEdit(true);
        }
    }

    const handleAddBtn = () => {
        if(todoList.length == 6){
            alert("더 이상 입력하실 수 없습니다!")
        } else {
            setTodoList([...todoList, "새로운 Todo를 입력해주세요!!"]);
            setIsChecked([...isChecked, false]);
        }
    }

    const handleDelBtn = (index) => {
        const newList = todoList.filter((_, i) => i !== index);
        setTodoList(newList);
        const delCheckedArray = isChecked.filter((_, i) => i !== index); 
        setIsChecked(delCheckedArray);
    }

    const handleTodoChange = (index, value) => {
        const newList = [...todoList];
        newList[index] = value;
        setTodoList(newList);
      }

    const handleSaveBtn = () => {
        handleTodoEdit()
        console.log("백엔드 데이터 전송")
    }

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...isChecked];
        newCheckedItems[index] = !newCheckedItems[index];
        setIsChecked(newCheckedItems);
      }

  return (
    <>
    <SectionTodo>
            <SectionTitleContainer>
            <SectionTitleTodo>To-do list</SectionTitleTodo>
            <AddBtn onClick={handleAddBtn}><span>+</span></AddBtn>
            {isTodoEdit ? (<SaveBtn onClick = {handleSaveBtn}><span>save</span></SaveBtn>):
            (<EditBtn onClick = {handleTodoEdit}><span>edit</span></EditBtn>)}
            </SectionTitleContainer>
          
          <TodoListContainer>
          {todoList.map((text, index) => (
            <TodoItem key={index}>
            <CheckboxContainer>
                <Checkbox type="checkbox" checked={isChecked[index]} onChange={() => handleCheckboxChange(index)}/>
            </CheckboxContainer>
            {isTodoEdit ? (<TodoInput maxLength="28" value = {text} onChange = {(e) => handleTodoChange(index, e.target.value)}
                checked={isChecked[index]}/>)
            : (<TodoText checked={isChecked[index]} >{text}</TodoText>)}
              <DeleteBtn onClick={()=>handleDelBtn(index)}></DeleteBtn>
            </TodoItem>
          ))}
          </TodoListContainer>
        </SectionTodo>
    </>
  )
}

export default TodoListCom

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

const DeleteBtn = styled.div`
    width: 21px;
    height: 21px;
    border:2px solid #DBDBDB;
    background-color: #F0F0F0;
    border-radius: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    &::before {
    content: '✕';
    color: #c2c2c2;
    font-size: 18px;
    font-weight:800;
    line-height: 1;
    position: absolute;
  }
`

const CheckboxContainer = styled.div`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding:0;
    margin:0;
`
const TodoText = styled.span`
  width: 408px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${(props) => (props.checked ? '#A29E95' : '#222222')};
  box-sizing: border-box;
  margin-left:10px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const TodoInput = styled.input`
  width: 405px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${(props) => (props.checked ? '#A29E95' : '#222222')};
  box-sizing: border-box;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #222222;
  background-color: transparent;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
`