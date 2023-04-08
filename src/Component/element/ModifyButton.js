import { onClickModify } from '../util/api';
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

export default ModifyButton;