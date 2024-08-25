import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { delTodo, getTimeTodo, patchTodoCheck, patchTodoText, postTimeTodo } from '../../api/api_dailyTimeTable';

const DailyTodoList = ({ dailyAllTodo, getTimeId}) => {

    const [isTodoEdit, setIsTodoEdit] = useState(false); // save edit 여부 버튼 관리
    const [todoList, setTodoList] = useState(dailyAllTodo.map(item => item.description));
    const [isChecked, setIsChecked] = useState(dailyAllTodo.map(item => item.complete));
    const [todoId, setTodoId] = useState(dailyAllTodo.map(item => item.task_id)); // todoId 저장용


    useEffect(() => {
      setTodoList(dailyAllTodo.map(item => item.description));
      setIsChecked(dailyAllTodo.map(item => item.complete));
      setTodoId(dailyAllTodo.map(item => item.task_id))
      //console.log(todoId)
  }, [dailyAllTodo]);

    const handleTodoEdit = () => {
        if(isTodoEdit){
            setIsTodoEdit(false);
        } else {
            setIsTodoEdit(true);
        }
    }

    const handleAddBtn = async () => {
          let body;
          body = {
            description : "Todo 작성 후 엔터를 눌러주세요!!"
          }
          const isError = await postTimeTodo(getTimeId, body)
          if(isError === 'Not Found'){
            alert("시간블록 선택 후 일정 입력해주세요")
          } else{
            setTodoList(prevList => [...prevList, body.description]);
            setIsChecked(prevChecked => [...prevChecked, false]);
            const response = await getTimeTodo(getTimeId);
            setTodoId(prevTodoId => [...prevTodoId, response[response.length - 1].task_id])
          }
    }

    const handleTodoChange = (index, value) => {
        const newList = [...todoList];
        newList[index] = value;
        setTodoList(newList);
      }

    const handleEnter = async (e, index) => {
      if (e.key === 'Enter') {
        const newTodoList = [...todoList];
        newTodoList[index] = e.target.value;
        setTodoList(newTodoList);

        const body = { description: todoList[index] };
        handleTodoEdit();
        if(todoId[index]){
          await patchTodoText(todoId[index], body);
        }
          
      }
  }
    const handleCheckboxChange = async (index) => {
        const newCheckedItems = [...isChecked];
        newCheckedItems[index] = !newCheckedItems[index];
        setIsChecked(newCheckedItems);

        const body = { complete : newCheckedItems[index]};
        if(todoId[index]){
          await patchTodoCheck(todoId[index], body);
        }
        
      }

    const handleDelBtn = async (index) => {
        const newList = todoList.filter((_, i) => i !== index);
        setTodoList(newList);
        const delCheckedArray = isChecked.filter((_, i) => i !== index); 
        setIsChecked(delCheckedArray);
        const newTodoId = todoId.filter((_, i) => i !== index);
        setTodoId(newTodoId)
        if(todoId[index]){
          await delTodo(todoId[index]);
        }
      }

  return (
    <>
    <SectionTodo>
            <SectionTitleContainer>
            <SectionTitleTodo>To-do list</SectionTitleTodo>
            <AddBtn onClick={handleAddBtn}>+</AddBtn>
            {isTodoEdit ? (<SaveBtn>save</SaveBtn>):
            (<EditBtn onClick = {handleTodoEdit}>edit</EditBtn>)}
            </SectionTitleContainer>
          
          <TodoListContainer>
          {todoList.map((text, index) => (
            <TodoItem key={index}>
            <CheckboxContainer>
                <Checkbox type="checkbox" checked={isChecked[index]} onChange={() => handleCheckboxChange(index)}/>
            </CheckboxContainer>
            {isTodoEdit ? (<TodoInput maxLength="28" value = {text}
            onChange={(e) => handleTodoChange(index, e.target.value)}
                onKeyDown={(e) => handleEnter(e, index)}/>)
            : (<><TodoText checked={isChecked[index]} >{text}</TodoText><DeleteBtn onClick={()=>handleDelBtn(index)}></DeleteBtn></>)}
              
            </TodoItem>
          ))}
          </TodoListContainer>
        </SectionTodo>
    </>
  )
}

export default DailyTodoList

const SectionTitleTodo = styled.div`
  width: 350px;
  height: 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.02em;
  color: #222222;
  box-sizing: border-box;
  cursor: default;
`;

const AddBtn = styled.div`
  background-color: #FFE0AA;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  margin-right: 15px;
  color: #FF831C;
  font-size: 38px;
  font-weight: 400;
`;

const EditBtn = styled.div`
  background-color: #FFE0AA;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 400;
  color: #FF831C;
  font-size: 20px;
  font-weight: 500;
`;

const SaveBtn = styled.div`
  background-color: #FF831C;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
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
    overflow-y: auto;
`

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 10px;
  font-family: 'AppleSDGothicNeoM', sans-serif;
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
    position: absolute;
  }
`

const CheckboxContainer = styled.div`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
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