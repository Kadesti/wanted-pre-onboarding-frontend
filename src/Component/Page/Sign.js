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

function Sign() {
    // const [disabled, setDisabled] = useState('disabled');

    // console.log(emailBind.isdisabled);
    // console.log(passwordBind.isdisabled);

    // (emailBind.isDisabled || passwordBind.isDisabled) ? setDisabled('disabled') : null    // else setDisabled('');


    const emailBind = useInput('email');
    const passwordBind = useInput('paasword');

    const location = useLocation();
    const path = location.pathname;
    const { query, buttonClass, buttonText } = queryMatch(path);

    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        signClick(query, emailBind, passwordBind, navigate)
    }


    return (
        <SignStyle onSubmit={onSubmit}>
            <h2>{query}</h2>
            <Input label={"email"} value={emailBind} />
            <Input label={"password"} value={passwordBind} />
            <button data-testid={buttonClass} type='submit' disabled={''}>{buttonText}</button>
        </SignStyle>
    )
}

export default Sign