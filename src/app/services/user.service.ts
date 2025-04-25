import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../dtos/IUser";

export class UserService {
    user = new BehaviorSubject<IUser | undefined>(undefined);
    constructor() {
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
}