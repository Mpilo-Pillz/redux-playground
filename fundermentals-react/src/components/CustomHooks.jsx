import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

const CustomHook = () => {
    // const [name, setName] = useState('');
    // const [name, setName] = useLocalStorage('name', '');
    const [name, setName] = useLocalStorage('name', () => '');
    useUpdateLogger(name)
    return (
        <>
        <p>open devtools lok at console and aplication local storage</p>
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        </>
    )
}

export default CustomHook;