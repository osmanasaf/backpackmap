import {VisitingPointDto} from "../model/VisitingPointDto";


type Action =
    | { type: 'added'; id: number; text: string }
    | { type: 'changed'; task: VisitingPointDto }
    | { type: 'deleted'; id: number };

export default function locationReducer(locations: VisitingPointDto[], action: Action): (VisitingPointDto | {
    id: number;
    text: string;
    done: boolean
})[] {
    const type = action.type;
    switch (type) {
        case 'added': {
            return [
                ...locations,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return locations.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return locations.filter((t) => t.id !== action.id);
        }
        default: {
            throw new Error('Unknown action: ' + type);
        }
    }
}
