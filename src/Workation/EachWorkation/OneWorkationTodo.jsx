import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {getDailyTodo} from '../../api/api_dailyTimeTable'

const OneWorkationTodo = ({daily_workation_id}) => {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const response = await getDailyTodo(daily_workation_id);
        setTodoList(response.data || []);
      } catch (error) {
      }
    };
    if (daily_workation_id) {
      fetchTodoData();
    }
  }, [daily_workation_id]);

  return (
    <>
    <SectionTodo>
      <SectionTitleContainer>
        <SectionTitleTodo>To-do list</SectionTitleTodo>
      </SectionTitleContainer>
          
      <TodoListContainer>
        {todoList.map((todo) => (
        <TodoItem key={todo.task_id}>
          <CheckboxContainer>
            <Checkbox type="checkbox" checked={todo.complete}/>
          </CheckboxContainer>
          <TodoDes checked={todo.complete}>{todo.description}</TodoDes>
        </TodoItem>
        ))}
      </TodoListContainer>
    </SectionTodo>
    </>
  )
}

export default OneWorkationTodo

const SectionTitleTodo = styled.div`
  width: 350px;
  height: 25px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: #222222;
  box-sizing: border-box;
  margin-left: -12%;
  cursor: default;
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
  font-family: 'AppleSDGothicNeoB', sans-serif;
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
const TodoDes = styled.div`
  margin-left: 10px;
  font-size: 20px;
  color: #333;
  cursor: default;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;