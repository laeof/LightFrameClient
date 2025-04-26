import { HttpClient } from "@angular/common/http";
import { ILogin } from "../dtos/ILogin";
import { IReg } from "../dtos/IReg";
import { IUser } from "../dtos/IUser";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";
import { ITokens } from "../dtos/ITokens";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    constructor(private http: HttpClient,
        private apiService: ApiService
    ) {
        
    }

    signIn(log: ILogin): Observable<ITokens> {
        return this.http.post<ITokens>(this.apiService.getApi() + 'Auth/signin', log);
    }

    signUp(reg: IReg): Observable<ITokens> {
        return this.http.post<ITokens>(this.apiService.getApi() + 'Auth/signup', reg);
    }

    RegenerateAccessToken(tokens: ITokens): Observable<ITokens> {
        return this.http.post<ITokens>(this.apiService.getApi() + 'Auth/refresh', tokens);
    }
}