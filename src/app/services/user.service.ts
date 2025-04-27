import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../dtos/IUser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";
import { LFCookieService } from "./cookie.service";
import { CookieService } from "ngx-cookie-service";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    user = new BehaviorSubject<IUser | undefined>(undefined);
    constructor(private http: HttpClient,
        private apiService: ApiService,
        private cookieService: LFCookieService
    ) {
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

        const headers = new HttpHeaders({
            'Authorization-Required': 'true'
        });

        return this.http.get<IUser>(this.apiService.getApi() + 'User/GetUser/', { headers })
    }
}