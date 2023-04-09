import { useState } from 'react';
import ModifyButton from './ModifyButton';
import { deleteClick, onClickModify } from '../util/api';

const TodoItem = ({ item, modifyData }) => {
    const [checked, isChecked] = useState(item.isCompleted)
    const [ismodify, setIsModify] = useState(modifyData);

    const currentIdx = item.id - 1;
    const [newValue, setNewValue] = useState(item.todo)

    const EditData = { checked, newValue, id: item.id };

    /** 체크박스 isComplete 반영 */
    const checkBoxChange = () => {
        EditData.checked = !checked
        onClickModify(EditData)
        isChecked(!checked)
    }

    const modifyBind = { currentIdx, ismodify, setIsModify };
    return (
        <li>
            <label className='todo-item'>
                <input type="checkbox" checked={checked} onChange={() => { checkBoxChange() }} />
                {
                    ismodify[currentIdx]
                        ? (
                            <>
                                <input data-testid="modify-input" value={newValue} onChange={(e) => { setNewValue(e.target.value) }} />
                                <ModifyButton testid={"submit-button"} modifyBind={modifyBind} modifyData={EditData} />
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