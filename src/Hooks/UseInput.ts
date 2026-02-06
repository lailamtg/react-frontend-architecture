import {ChangeEvent, useCallback, useState} from 'react';
import {useDebounce} from '@Hooks/UseDebounce.ts';
import {UseInputOptions} from '../Models/UseInputModels.ts';

export const useInput = (initialValue: string = '', options: UseInputOptions = {}) => {
    const [value, setValue] = useState(initialValue);
    const debouncedValue = useDebounce(value, options.delay);
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            setValue(e.target.value);
        },
        [setValue],
    );
    return {value, debouncedValue, handleChange};
};
