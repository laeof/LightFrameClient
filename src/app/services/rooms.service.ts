import { BehaviorSubject, first, Observable } from "rxjs";
import { IRoom } from "../dtos/IRoom";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RoomsService {
    popularRooms = new BehaviorSubject<IRoom[]>([]);
    rooms = new BehaviorSubject<IRoom[]>([]);

    constructor(private http: HttpClient,
        private apiService: ApiService
    ) {
        this.updateRoomsList();
    }

    getPopularRooms(): Observable<IRoom[]> {
        return this.popularRooms.asObservable();
    }

    updateRoomsList() {
        return this.http.get<IRoom[]>(this.apiService.getApi() + 'Room/').subscribe(
            (value) => {
                if (value != undefined) {
                    this.popularRooms.next(value.slice(0, 4));
                    this.rooms.next(value);
                }
            }
        )
    }

    getRooms(): Observable<IRoom[]> {
        return this.rooms.asObservable();
    }

    getRoomById(id: string): Observable<IRoom | undefined> {
        return this.http.get<IRoom | undefined>(this.apiService.getApi() + 'Room/' + id)
    }
}