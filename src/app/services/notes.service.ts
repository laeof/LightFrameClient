import { BehaviorSubject, Observable } from "rxjs";
import { INote } from "../dtos/INote";

export class NotesService {

    notes = new BehaviorSubject<INote[]>([{
        id: "1",
        start: "10:00",
        end: "11:00",
        rent: false,
        roomId: ""
    },
    {
        id: "2",
        start: "11:00",
        end: "12:00",
        rent: false,
        roomId: ""
    },
    {
        id: "3",
        start: "12:00",
        end: "13:00",
        rent: false,
        roomId: ""
    },
    {
        id: "4",
        start: "13:00",
        end: "14:00",
        rent: false,
        roomId: ""
    },
    {
        id: "5",
        start: "14:00",
        end: "15:00",
        rent: true,
        roomId: ""
    },
    {
        id: "6",
        start: "15:00",
        end: "16:00",
        rent: false,
        roomId: ""
    },
    {
        id: "7",
        start: "16:00",
        end: "17:00",
        rent: false,
        roomId: ""
    },
    {
        id: "8",
        start: "17:00",
        end: "18:00",
        rent: true,
        roomId: ""
    },
    {
        id: "9",
        start: "18:00",
        end: "19:00",
        rent: false,
        roomId: ""
    }]);
    
    constructor() {
        
    }

    getRoomNotesDay(roomId: string): Observable<INote[]> {
        return new BehaviorSubject<INote[]>(this.notes.value).asObservable();
    }

}