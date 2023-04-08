import useInput from './util/useInput';
import styled from 'styled-components'

import { signClick } from './util/api'
import Input from './Input';
import { useLocation } from 'react-router';
import { useState } from 'react';

const queryMatch = (path) => {
    const isSignUp = path === '/signup'
    const query = isSignUp ? 'signup' : 'signin';
    const buttonClass = isSignUp ? "signup-button" : "signin-button";

    return { query, buttonClass };
}

const SignStyle = styled.form`
    display: flex;
    flex-direction: column;

    width: 40%;
    height: 60%;
    padding: 3%;
    border: solid 0.1em black;
    border-radius: 5%;

    justify-content: center;

    .valueInput {
       display: flex;
       justify-content: space-between;
       margin-bottom: 5%;
    }

    input {
        height: 100%;
        background: none;
        border-width: 0.1em;
    }

    input:focus {
        outline: none;
    }

`

function Sign() {
    // const [disabled, setDisabled] = useState('disabled');

    // console.log(emailBind.isdisabled);
    // console.log(passwordBind.isdisabled);

    // (emailBind.isDisabled || passwordBind.isDisabled) ? setDisabled('disabled') : null    // else setDisabled('');

    const emailBind = useInput('email');
    const passwordBind = useInput('paasword');

    const location = useLocation();
    const path = location.pathname;
    const { query, buttonClass } = queryMatch(path);

    const onSubmit = (e) => {
        e.preventDefault();
        signClick(query, emailBind, passwordBind)
    }

    return (
        <SignStyle onSubmit={onSubmit}>
            <h2>{query}</h2>
            <Input label={"email"} value={emailBind} />
            <Input label={"password"} value={passwordBind} />
            <button data-testid={buttonClass} type='submit' disabled={''}>회원가입</button>
        </SignStyle>
    )
}

export default Sign