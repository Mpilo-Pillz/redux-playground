import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const CustomHook = () => {
    // const [name, setName] = useState('');
    // const [name, setName] = useLocalStorage('name', '');
    const [name, setName] = useLocalStorage('name', () => '');

    return (
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        />
    )
}

export default CustomHook;