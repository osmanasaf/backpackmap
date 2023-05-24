import React, { useState, ChangeEvent } from 'react';
import {VisitingPointDto} from "../model/VisitingPointDto";

interface LocationListProps {
    locations: VisitingPointDto[];
    onChangeLocation: (location: VisitingPointDto) => void;
    onDeleteLocation: (locationId: number) => void;
}

interface TaskProps {
    location: VisitingPointDto;
    onChange: (location: VisitingPointDto) => void;
    onDelete: (locationId: number) => void;
}

export default function LocationList({ locations, onChangeLocation, onDeleteLocation }: LocationListProps): JSX.Element {
    return (
        <ul>
            {locations.map((location) => (
                <li key={location.id}>
                    <Location location={location} onChange={onChangeLocation} onDelete={onDeleteLocation}/>
                </li>
            ))}
        </ul>
    );
}

function Location({ location, onChange, onDelete }: TaskProps): JSX.Element {
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange({
            ...location,
            text: e.target.value,
        });
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange({
            ...location,
            done: e.target.checked,
        });
    };

    const handleEditClick = (): void => {
        setIsEditing(true);
    };

    const handleSaveClick = (): void => {
        setIsEditing(false);
    };

    const handleDeleteClick = (): void => {
        onDelete(location.id);
    };

    let taskContent: JSX.Element;
    if (isEditing) {
        taskContent = (
            <>
                <input value={location.text} onChange={handleInputChange} />
        <button onClick={handleSaveClick}>Save</button>
            </>
    );
    } else {
        taskContent = (
            <>
                {location.text}
            <button onClick={handleEditClick}>Edit</button>
            </>
    );
    }

    return (
        <label>
            <input type="checkbox" checked={location.done} onChange={handleCheckboxChange} />
    {taskContent}
    <button onClick={handleDeleteClick}>Delete</button>
        </label>
);
}
