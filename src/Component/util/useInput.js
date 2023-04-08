import { useCallback, useState } from 'react';

const useInput = (type) => {
    const [value, setValue] = useState('');
    const testCh = (value) => (type === 'email') ? /@/.test(value) : /\w{8,}/.test(value)
    // let isdisabled = true;

    const bind = {
        value,
        onChange: useCallback((e) => {
            const { value } = e.target;
            setValue(value);
        }, []),
        // isdisabled
    }

    return bind
}

export default useInput;