import useInput from './util/useInput';
import Input from './Input';

function Sign({ path }) {
    const emailBind = useInput();
    const passwordBind = useInput();

    return (
        <div>
            <h2>{path}</h2>
            <Input label={"email"} value={emailBind} />
            <Input label={"password"} value={passwordBind} />
            <button data-testid={`${path}-button`} type='submit'>회원가입</button>
        </div>
    )
}

export default Sign