import useInput from './util/useInput';
import { signClick } from './util/api'
import Input from './Input';

function Sign({ path }) {
    const emailBind = useInput();
    const passwordBind = useInput();

    const onSubmit = (e) => {
        e.preventDefault();
        signClick(path, emailBind, passwordBind)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>{path}</h2>
            <Input label={"email"} value={emailBind} />
            <Input label={"password"} value={passwordBind} />
            <button data-testid={`${path}-button`} type='submit'>회원가입</button>
        </form>
    )
}

export default Sign