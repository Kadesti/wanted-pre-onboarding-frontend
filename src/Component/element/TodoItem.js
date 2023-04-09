import { useState } from 'react';
import ModifyButton from './ModifyButton';
import { deleteClick } from '../util/api';

const TodoItem = ({ item, ismodify, setIsModify }) => {
    const [checked, isChecked] = useState(item.isCompleted)

    const currentIdx = item.id - 1;
    const [newValue, setNewValue] = useState(item.todo)

    const modifyData = { checked, newValue, "item.id": item.id };
    const modifyBind = { currentIdx, ismodify, setIsModify };

    return (
        <li>
            <label className='todo-item'>
                <input type="checkbox" checked={checked} onChange={() => { isChecked(!checked) }} />
                {
                    ismodify[currentIdx]
                        ? (
                            <>
                                <input data-testid="modify-input" value={newValue} onChange={(e) => { setNewValue(e.target.value) }} />
                                <ModifyButton testid={"submit-button"} modifyBind={modifyBind} modifyData={modifyData} />
                                <ModifyButton testid={"cancel-button"} modifyBind={modifyBind} />
                            </>
                        )
                        : (
                            <>
                                <span>{item.todo}</span>
                                <ModifyButton testid={"modify-button"} modifyBind={modifyBind} />
                                <button data-testid="delete-button" type='submit' onClick={(e) => { deleteClick(item.id) }}>삭제</button>
                            </>
                        )
                }
            </label>
        </li>

    )
}

export default TodoItem;