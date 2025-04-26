import { HttpClient } from "@angular/common/http";
import { ILogin } from "../dtos/ILogin";
import { IReg } from "../dtos/IReg";
import { IUser } from "../dtos/IUser";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    constructor(private http: HttpClient,
        private apiService: ApiService
    ) {
        
    }

    signIn(log: ILogin) {
        return this.http.post<IUser>(this.apiService.getApi() + 'Auth/signin', log);
    }

    signUp(reg: IReg) {
        return this.http.post<IUser>(this.apiService.getApi() + 'Auth/signup', reg);
    }
}