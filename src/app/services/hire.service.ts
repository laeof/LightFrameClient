import { Injectable } from "@angular/core";
import { IPhotographer } from "../dtos/IPhotographer";
import { ApiService } from "./api.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HireService {
    
    constructor(private apiService: ApiService,
        private http: HttpClient
    ) {
        
    }
    hire(photographer: IPhotographer) {
        return this.http.post<IPhotographer[]>(this.apiService.getApi() + 'Hire/', photographer)
    }

    getPhotographers(): Observable<IPhotographer[]> {
        return this.http.get<IPhotographer[]>(this.apiService.getApi() + 'Hire/')
    }
}