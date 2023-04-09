import { useEffect, useState } from 'react';
import { sumbmitTodo, getTodo } from '../util/api'

import TodoItem from '../element/TodoItem';
import TodoStyle from './StyleComponent/TodoStyle';

const Todo = () => {
    const [newTodo, setNewTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const modifyData = todoList.map(el => el.isCompleted);

    useEffect(() => getTodo(setTodoList), [])

    return (
        <TodoStyle>
            <div className='todo-contents'>
                <div className='new-todo'>
                    <input data-testid="new-todo-input" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                    <button data-testid="new-todo-add-button" onClick={() => { sumbmitTodo(newTodo, setNewTodo) }}>추가</button>
                </div>

                <ul>
                    {todoList.map((item) => <TodoItem item={item} modifyData={modifyData} key={item.id} />)}
                </ul>
            </div>

            <button className='logout' type='submit' onClick={() => { localStorage.clear() }}>로그아웃</button>
        </TodoStyle >
    )
}

export default Todo