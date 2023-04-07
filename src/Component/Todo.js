import { useState } from 'react';
import dummyData from '../data/dummydata'
import styled from 'styled-components'

const TodoStyle = styled.div`
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

const TodoItem = ({ item, ismodify, setIsModify }) => {
    const [checked, isChecked] = useState(item.isCompleted)

    return (
        <li>
            <label className='todo-item'>
                <input type="checkbox" checked={checked} onChange={() => { isChecked(!checked) }} />
                {ismodify
                    ? (
                        <>
                            <input data-testid="modify-input" />
                            <button data-testid="submit-button" onClick={() => { setIsModify(false) }}>제출</button>
                            <button data-testid="cancel-button" onClick={() => { setIsModify(false) }}>취소</button>
                        </>
                    )
                    : (
                        <>
                            <span>{item.todo}</span>
                            <button data-testid="modify-button" onClick={() => { setIsModify(true) }}>수정</button>
                            <button data-testid="delete-button">삭제</button>
                        </>
                    )
                }
            </label>
        </li>

    )
}

const Todo = () => {
    const [ismodify, setIsModify] = useState([...dummyData].fill(false));

    return (
        <TodoStyle>
            <div className='new-todo'>
                <input data-testid="new-todo-input" />
                <button data-testid="new-todo-add-button">추가</button>
            </div>

            <ul>
                {dummyData.map((item, i) => <TodoItem item={item} ismodify={ismodify[i]} {...setIsModify} key={item.id} />)}
            </ul>
        </TodoStyle>
    )
}

export default Todo