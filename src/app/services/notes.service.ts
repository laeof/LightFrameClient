import { BehaviorSubject, Observable } from "rxjs";
import { INote } from "../dtos/INote";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ApiService } from "./api.service";
import { UserService } from "./user.service";
import { IUser } from "../dtos/IUser";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class NotesService {

    notes = new BehaviorSubject<INote[]>([]);

    constructor(private http: HttpClient, private apiService: ApiService, private userService: UserService) {
        this.notes.next([{
            id: "1",
            start: "10:00",
            end: "11:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "2",
            start: "11:00",
            end: "12:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "3",
            start: "12:00",
            end: "13:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "4",
            start: "13:00",
            end: "14:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "5",
            start: "14:00",
            end: "15:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "6",
            start: "15:00",
            end: "16:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "7",
            start: "16:00",
            end: "17:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "8",
            start: "17:00",
            end: "18:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "9",
            start: "18:00",
            end: "19:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        }])
    }

    getMyNotes(id: string) {
        return this.http.get<INote[]>(this.apiService.getApi() + 'Note/GetNotesWithUserId/' + id)
    }

    getRoomNotesDay(roomId: string): Observable<INote[]> {
        this.clearNotes();
        const today = new Date();

        const day = today.getDate();
        let stringDay = day.toString();
        if(stringDay.length === 1)
            stringDay = "0" + stringDay;

        const month = today.getMonth() + 1;

        let stringMonth = month.toString();
        if(stringMonth.length === 1)
            stringMonth = "0" + stringMonth;
        const year = today.getFullYear();

        const params = new HttpParams()
            .set('day', stringDay.toString())
            .set('month', stringMonth.toString())
            .set('year', year.toString());

        this.http.get<INote[]>(this.apiService.getApi() + 'Note/GetDay/', { params }).subscribe(
            (value: INote[]) => {
                if (!value)
                    return

                let notes = value.filter(note => note.roomId === roomId);
                notes.forEach((note: INote) => {
                    const existingNote = this.notes.value.find(n => n.start === note.start);

                    if (existingNote) {
                        existingNote.rent = true;
                    }
                });
            }
        )

        return this.notes;
    }

    createNote(start: string, end: string, roomId: string, name: string = "", phoneNumber: string = ""): Observable<INote> {
        let user: any;
        this.userService.getCurrentUser().subscribe(
            (value: any) => user = value.value
        );

        const today = new Date();

        const day = today.getDate();
        let stringDay = day.toString();
        if(stringDay.length === 1)
            stringDay = "0" + stringDay;

        const month = today.getMonth() + 1;

        let stringMonth = month.toString();
        if(stringMonth.length === 1)
            stringMonth = "0" + stringMonth;

        const year = today.getFullYear();

        if (user) {
            const headers = new HttpHeaders({
                'Authorization-Required': 'true'
            });
            return this.http.post<INote>(this.apiService.getApi() + 'Note/AddNoteAuth', {
                start: start,
                end: end,
                day: stringDay + "" + stringMonth + year,
                name: user.firstName + " " + user.lastName,
                phoneNumber: user.phone,
                roomId: roomId,
                id: user.id
            }, { headers })
        }
        else {
            return this.http.post<INote>(this.apiService.getApi() + 'Note/AddNoteGuest', {
                start: start,
                end: end,
                day: stringDay + "" + stringMonth + year,
                name: name,
                phoneNumber: phoneNumber,
                roomId: roomId
            })
        }
    }

    cancelNote(id: string) {
        const headers = new HttpHeaders({
            'Authorization-Required': 'true'
        });
        return this.http.put<INote>(this.apiService.getApi() + `Note/Cancel?id=${id}`, {}, { headers })
    }

    payForNote(id: string) {
        const headers = new HttpHeaders({
            'Authorization-Required': 'true'
        });
        return this.http.put<INote>(this.apiService.getApi() + `Note/Pay?id=${id}`, {}, { headers })
    }

    clearNotes() {
        this.notes.next([{
            id: "1",
            start: "10:00",
            end: "11:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "2",
            start: "11:00",
            end: "12:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "3",
            start: "12:00",
            end: "13:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "4",
            start: "13:00",
            end: "14:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "5",
            start: "14:00",
            end: "15:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "6",
            start: "15:00",
            end: "16:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "7",
            start: "16:00",
            end: "17:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "8",
            start: "17:00",
            end: "18:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        },
        {
            id: "9",
            start: "18:00",
            end: "19:00",
            rent: false,
            roomId: "",
            day: "",
            paidState: false,
            isDisabled: false
        }])
    }
}