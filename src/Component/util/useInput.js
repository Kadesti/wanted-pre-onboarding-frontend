import { useCallback, useState } from 'react';

const useInput = () => {
    const [value, setValue] = useState('');

    const bind = {
        value,
        onChange: useCallback((e) => {
            const { value } = e.target;
            setValue(value);
        }, [])
    }

    return bind
}

export default useInput;