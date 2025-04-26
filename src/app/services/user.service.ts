import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../dtos/IUser";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    
    user = new BehaviorSubject<IUser | undefined>(undefined);
    constructor(private http: HttpClient,
        private apiService: ApiService
    ) {
        let user: IUser = {
            photoUrl: '../../assets/imgs/1.jpg',
            name: 'sdas sadas',
            id: ''
        }

        this.user.next(user);
    }

    getCurrentUser(): Observable<IUser | undefined> {
        return this.user.asObservable();
    }

    setCurrentUser(response: IUser) {
        // if (response.id != '')
        //     response.role = {
        //         name: 'user',
        //         permissions: []
        //     }

        this.user.next(response);
    }

    exchangeTokenOnUser(): Observable<IUser> {
        return this.http.get<IUser>(this.apiService.getApi() + 'User/GetUser/')
    }
}