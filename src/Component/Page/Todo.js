import { useEffect, useState } from 'react';

import dummyData from '../../data/dummydata'
import { sumbmitTodo, getTodo } from '../util/api'

import TodoItem from '../element/TodoItem';
import TodoStyle from './StyleComponent/TodoStyle';


const Todo = () => {
    const [ismodify, setIsModify] = useState([...dummyData].fill(false));
    const [todoList, setTodoList] = useState([])

    const modifyBind = { ismodify, setIsModify }

    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        getTodo(setTodoList)
    }, [])

    // console.log('todoList: ', todoList);
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