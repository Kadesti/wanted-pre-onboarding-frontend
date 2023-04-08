import { useState } from 'react';

import dummyData from '../data/dummydata'
import styled from 'styled-components'

import { createTodo } from './util/api'

const TodoStyle = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 40%;
    height: 60%;
    padding: 3%;
    border: solid 0.1em black;
    border-radius: 5%;

    /* background-color: #EEE9DA; */

    .new-todo {
        margin-bottom: 8%;

        input {
            width: 80%;
            height: 100%;
            margin-right: 2%;
            background: none;
            border-width: 0.1em;
        }

        input:focus {
            outline: none;
        }
    }

    li {
        margin-bottom: 2%;
    }
    button {
        display: inline-block;
        height: 100%;
        background: none;
        position: relative;

        border-color: black;
        border-radius: 5%;
        border-width: 0.1em;
    }

    button:focus {
        outline: none;
    }

    label {
        display: flex;
        width: 100%;        

        > :nth-child(2) {
            flex-grow:1;
        }
        > :nth-child(3) {
            margin-right: 0.3em;
        }
    }

`

const ModifyButton = ({ testid, modifyBind }) => {
    const { currentIdx, ismodify, setIsModify } = modifyBind;

    let buttonText = '';
    if (testid === "submit-button") buttonText = "제출";
    if (testid === "cancel-button") buttonText = "취소";
    if (testid === "modify-button") buttonText = "수정";

    const setModify = testid === "modify-button" ? true : false;
    return (
        <button data-testid={testid} type='submit' onClick={() => {
            const newArr = [...ismodify]
            newArr[currentIdx] = setModify;
            setIsModify(newArr)
        }}>{buttonText}</button>
    )
}

const TodoItem = ({ item, ismodify, setIsModify }) => {
    const [checked, isChecked] = useState(item.isCompleted)

    const currentIdx = item.id - 1;
    const modifyBind = { currentIdx, ismodify, setIsModify };

    return (
        <li>
            <label className='todo-item'>
                <input type="checkbox" checked={checked} onChange={() => { isChecked(!checked) }} />
                {
                    ismodify[currentIdx]
                        ? (
                            <>
                                <input data-testid="modify-input" />
                                <ModifyButton testid={"submit-button"} modifyBind={modifyBind} />
                                <ModifyButton testid={"cancel-button"} modifyBind={modifyBind} />
                            </>
                        )
                        : (
                            <>
                                <span>{item.todo}</span>
                                <ModifyButton testid={"modify-button"} modifyBind={modifyBind} />
                                <button data-testid="delete-button">삭제</button>
                            </>
                        )
                }
            </label>
        </li>

    )
}

const sumbmitTodo = (e, newTodo, setNewTodo) => {
    e.preventDefault();

    const data = {
        // idx 생략
        todo: newTodo,
        isCompleted: false,
        userId: 1
    }
    createTodo(data)
    setNewTodo('');
}

const Todo = () => {
    const [ismodify, setIsModify] = useState([...dummyData].fill(false));
    const modifyBind = { ismodify, setIsModify }

    const [newTodo, setNewTodo] = useState('')


    return (
        <TodoStyle>
            <div className='new-todo'>
                <input data-testid="new-todo-input" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                <button data-testid="new-todo-add-button" onClick={(e) => (sumbmitTodo(e, newTodo, setNewTodo))}>추가</button>
            </div>

            <ul>
                {dummyData.map((item) => <TodoItem item={item} {...modifyBind} key={item.id} />)}
            </ul>
        </TodoStyle >
    )
}

export default Todo