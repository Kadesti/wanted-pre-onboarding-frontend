import { useState } from 'react'

function Sign({ path }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h2>{path}</h2>
            <div>
                <label>email</label>
                <input data-testid="email-input" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
                <label>password</label>
                <input data-testid="password-input" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button data-testid={`${path}-button`} type='submit'>회원가입</button>
        </div>
    )
}

export default Sign