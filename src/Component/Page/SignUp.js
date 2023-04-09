import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../util/useInput';
import { signupClick } from '../util/api'

import SignStyle from './StyleComponent/SignStyle';
import Input from '../element/Input';

function SignUp() {
    const emailBind = useInput('email');
    const passwordBind = useInput('paasword');

    const navigate = useNavigate()

    const [disableState, setDisableState] = useState(true);

    useEffect(() => {
        if (emailBind.isable === ' ' && passwordBind.isable === ' ') setDisableState(false)
        else setDisableState(true)
    }, [emailBind, passwordBind])

    const onSubmit = (e) => {
        e.preventDefault();

        signupClick(emailBind, passwordBind, navigate)
    }

    return (
        <SignStyle onSubmit={onSubmit}>
            <div className='head-line'>
                <h2>회원가입</h2>
            </div>
            <div className='input-Container'>
                <Input label={"email"} value={emailBind} />
                <Input label={"password"} value={passwordBind} />
            </div>
            <div className='button-area'>
                <button data-testid="signup-button" type='submit' disabled={disableState}>회원가입</button>
                <button type='submit' onClick={() => { navigate("/signin") }}>취소</button>
            </div>
        </SignStyle>
    )
}

export default SignUp