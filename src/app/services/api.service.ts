export class ApiService {
    private api: string = "";
    constructor() {
        this.api = "http://localhost:7032/";
    }

    getApi() {
        return this.api;
    }
}