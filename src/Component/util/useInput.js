import { useCallback, useState } from 'react';

const useInput = (type) => {
    const [value, setValue] = useState('');
    const [isable, setIsable] = useState('disabled');
    const testCh = (value) => (type === 'email') ? /@/.test(value) : /\w{8,}/.test(value)

    const bind = {
        value,
        onChange: useCallback((e) => {
            const { value } = e.target;
            if (testCh(value)) setIsable(' ');
            else setIsable('disabled')

            setValue(value);
        }, []),
        isable
    }

    return bind
}

export default useInput;