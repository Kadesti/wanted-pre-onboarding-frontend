import { useState } from 'react';
import ModifyButton from './ModifyButton';

const TodoItem = ({ item, ismodify, setIsModify }) => {
    const [checked, isChecked] = useState(item.isCompleted)
    const [newValue, setNewValue] = useState('')
    // console.log('modifyData: ', modifyData);
    const modifyData = { checked, newValue, "item.id": item.id };

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
                                <input data-testid="modify-input" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                                <ModifyButton testid={"submit-button"} modifyBind={modifyBind} modifyData={modifyData} />
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

export default TodoItem;