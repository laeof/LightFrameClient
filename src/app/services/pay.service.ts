import { BehaviorSubject, Observable } from "rxjs";

export class PayService {
    payForNote(id: string): Observable<undefined> {
        return new BehaviorSubject<undefined>(undefined).asObservable();
    }
}