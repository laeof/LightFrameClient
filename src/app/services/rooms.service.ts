import { BehaviorSubject, first, Observable } from "rxjs";
import { IRoom } from "../dtos/IRoom";

export class RoomsService {
    popularRooms = new BehaviorSubject<IRoom[]>([]);
    rooms = new BehaviorSubject<IRoom[]>([]);

    constructor() {
        this.popularRooms.next([{
            photoUrl: "https://artmix.kh.ua/wp-content/uploads/2021/02/bv5c0002sajt-white-glavnaya-1-1.jpg",
            id: '1',
            name: 'name1',
            address: 'address1',
            hourPrice: 0
        },
        {
            photoUrl: "https://artmix.kh.ua/wp-content/uploads/2020/02/bv5c0505-1.jpg",
            id: '2',
            name: 'name2',
            address: 'address2',
            hourPrice: 0
        },
        {
            photoUrl: "https://artmix.kh.ua/wp-content/uploads/2020/02/655724130_3_1000x700_interernaya-fotostudiya-v-samom-tsentre-harkova-razvlecheniya-iskusstvo-foto-video.jpg",
            id: '3',
            name: 'name3',
            address: 'address3',
            hourPrice: 0
        },
        {
            photoUrl: "https://artmix.kh.ua/wp-content/uploads/2020/02/ciklorama1.jpg",
            id: '4',
            name: 'name4',
            address: 'address4',
            hourPrice: 0
        },]
        )

        this.updateRoomsList();
    }

    getPopularRooms(): Observable<IRoom[]> {
        return this.popularRooms.asObservable();
    }

    updateRoomsList() {
        //http req to api
        //fixme!!!
        this.rooms.next(this.popularRooms.value);
    }

    getRooms(): Observable<IRoom[]> {
        return this.rooms.asObservable();
    }

    getRoomById(id: string): Observable<IRoom | undefined> {
        return new BehaviorSubject<IRoom | undefined>(this.rooms.value.find(x => x.id === id));
    }
}