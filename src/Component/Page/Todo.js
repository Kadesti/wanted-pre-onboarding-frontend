import { useEffect, useState } from 'react';

import { sumbmitTodo, getTodo } from '../util/api'

import TodoItem from '../element/TodoItem';
import TodoStyle from './StyleComponent/TodoStyle';


const Todo = () => {
    const [todoList, setTodoList] = useState([])

    const modifyData = todoList.map(el => el.isCompleted)
    const [ismodify, setIsModify] = useState(modifyData);

    const modifyBind = { ismodify, setIsModify }

    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        getTodo(setTodoList)
    }, [])

    return (
        <TodoStyle>
            <div className='new-todo'>
                <input data-testid="new-todo-input" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                <button data-testid="new-todo-add-button" onClick={() => (sumbmitTodo(newTodo, setNewTodo))}>추가</button>
            </div>

            <ul>
                {todoList.map((item) => <TodoItem item={item} {...modifyBind} key={item.id} />)}
            </ul>
        </TodoStyle >
    )
}

export default Todo