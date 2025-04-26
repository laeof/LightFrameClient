import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private api: string = "";
    constructor() {
        this.api = "http://localhost:5107/";
    }

    getApi() {
        return this.api;
    }
}