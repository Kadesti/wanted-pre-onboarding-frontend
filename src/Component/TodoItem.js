import { useState } from 'react';
import { onClickModify } from './util/api';
import { useNavigate } from 'react-router-dom';

const ModifyButton = ({ testid, modifyBind, modifyData }) => {
    const navigate = useNavigate();
    const { currentIdx, ismodify, setIsModify } = modifyBind;

    let buttonText = '';
    if (testid === "submit-button") buttonText = "제출";
    if (testid === "cancel-button") buttonText = "취소";
    if (testid === "modify-button") buttonText = "수정";

    const setModify = testid === "modify-button" ? true : false;
    return (
        <button data-testid={testid} type='submit' onClick={(e) => {
            e.preventDefault();
            if (testid === "submit-button") onClickModify(modifyData, navigate);

            const newArr = [...ismodify]
            newArr[currentIdx] = setModify;
            setIsModify(newArr)
        }}>{buttonText}</button>
    )
}

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