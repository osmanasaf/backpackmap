import React, { useState, ChangeEvent } from 'react';

interface AddLocationProps {
    onAddLocation: (text: string) => void;
}

export default function AddLocation({ onAddLocation }: AddLocationProps): JSX.Element {
    const [text, setText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    };

    const handleClick = (): void => {
        setText('');
        onAddLocation(text);
    };

    return (
        <>
            <input
                placeholder="Add Location"
    value={text}
    onChange={handleChange}
    />
    <button onClick={handleClick}>
        Add
        </button>
        </>
);
}
