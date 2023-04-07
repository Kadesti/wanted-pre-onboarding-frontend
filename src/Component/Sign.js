import useInput from './util/useInput';
import styled from 'styled-components'

import { signClick } from './util/api'
import Input from './Input';

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

function Sign({ path }) {
    const emailBind = useInput();
    const passwordBind = useInput();

    const onSubmit = (e) => {
        e.preventDefault();
        signClick(path, emailBind, passwordBind)
    }

    return (
        <SignStyle onSubmit={onSubmit}>
            <h2>{path}</h2>
            <Input label={"email"} value={emailBind} />
            <Input label={"password"} value={passwordBind} />
            <button data-testid={`${path}-button`} type='submit'>회원가입</button>
        </SignStyle>
    )
}

export default Sign