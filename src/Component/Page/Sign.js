import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import useInput from '../util/useInput';
import { signClick } from '../util/api'

import Input from '../element/Input';
import SignStyle from './StyleComponent/SignStyle';


const queryMatch = (path) => {
    const isSignUp = path === '/signup'
    const query = isSignUp ? 'signup' : 'signin';
    const buttonClass = isSignUp ? "signup-button" : "signin-button";
    const buttonText = isSignUp ? "회원가입" : "로그인";

    return { query, buttonClass, buttonText };
}

function Sign({ setIsLogin }) {
    const emailBind = useInput('email');
    const passwordBind = useInput('paasword');

    const location = useLocation();
    const path = location.pathname;
    const { query, buttonClass, buttonText } = queryMatch(path);

    let disableState = true
    if (emailBind.isable === ' ' && passwordBind.isable === ' ') disableState = false
    else disableState = true

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        signClick(query, emailBind, passwordBind, navigate, setIsLogin)
        // if (query === '/signin') navigate("/todo")
    }

    return (
        <SignStyle onSubmit={onSubmit}>
            <h2>{query}</h2>
            <Input label={"email"} value={emailBind} />
            <Input label={"password"} value={passwordBind} />
            <button data-testid={buttonClass} type='submit' disabled={disableState}>{buttonText}</button>
        </SignStyle>
    )
}

export default Sign