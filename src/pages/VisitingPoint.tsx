import React, { useReducer } from 'react';
import {VisitingPointDto} from "../model/VisitingPointDto";
import locationReducer from "./TaskReducer";
import AddLocation from "./AddLocation";
import LocationList from "./LocationList";

let nextId: number = 3;


const locationList: VisitingPointDto[] = [];

export default function VisitingPoint(): JSX.Element {
    const [locations, dispatch] = useReducer(locationReducer, locationList);

    function handleAddTask(text: string): void {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(location: VisitingPointDto): void {
        dispatch({
            type: 'changed',
            task: location,
        });
    }

    function handleDeleteTask(locationId: number): void {
        dispatch({
            type: 'deleted',
            id: locationId,
        });
    }

    return (
        <>
            <h1>Vacation Destination</h1>
            <AddLocation onAddLocation={handleAddTask} />
            <LocationList
                locations={locations}
                onChangeLocation={handleChangeTask}
                onDeleteLocation={handleDeleteTask}
            />
        </>
    );
}


