import useInput from '../util/useInput';
import { useNavigate } from 'react-router-dom';
import { signInClick } from '../util/api'

import SignStyle from './StyleComponent/SignStyle';
import Input from '../element/Input';

function SignIn({ setIsLogin }) {
    const navigate = useNavigate();
    const emailBind = useInput('email');
    const passwordBind = useInput('paasword');

    const onSubmit = (e) => {
        e.preventDefault();
        signInClick(emailBind, passwordBind, setIsLogin)
    }

    return (
        <SignStyle onSubmit={onSubmit}>
            <div className='head-line'>
                <h2>로그인</h2>
            </div>
            <div className='input-Container'>
                <Input label={"email"} value={emailBind} />
                <Input label={"password"} value={passwordBind} />
            </div>
            <div className='button-area'>
                <button data-testid="signup-button" type='submit'>로그인</button>
                <button type='submit' onClick={() => { navigate("/signup") }}>회원가입</button>
            </div>
        </SignStyle >
    )
}

export default SignIn