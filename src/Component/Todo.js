import { useState } from 'react';
import dummyData from '../data/dummydata'

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
        <div>
            <div className='new-todo'>
                <input data-testid="new-todo-input" />
                <button data-testid="new-todo-add-button">추가</button>
            </div>

            <ul>
                {dummyData.map((item, i) => <TodoItem item={item} ismodify={ismodify[i]} {...setIsModify} key={item.id} />)}
            </ul>
        </div>
    )
}

export default Todo