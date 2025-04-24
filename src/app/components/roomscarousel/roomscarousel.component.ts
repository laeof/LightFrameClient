import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IRoom } from 'src/app/dtos/IRoom';

@Component({
    selector: 'app-roomscarousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './roomscarousel.component.html',
    styleUrl: './roomscarousel.component.scss'
})
export class RoomscarouselComponent {
    rooms: IRoom[] | undefined = [];

    constructor() {
        this.rooms?.push({
            photoUrl: "https://artmix.kh.ua/wp-content/uploads/2021/02/bv5c0002sajt-white-glavnaya-1-1.jpg",
            id: '',
            name: 'name1',
            address: ''
        },
            {
                photoUrl: "https://artmix.kh.ua/wp-content/uploads/2020/02/bv5c0505-1.jpg",
                id: '',
                name: 'name2',
                address: ''
            },
            {
                photoUrl: "https://artmix.kh.ua/wp-content/uploads/2020/02/655724130_3_1000x700_interernaya-fotostudiya-v-samom-tsentre-harkova-razvlecheniya-iskusstvo-foto-video.jpg",
                id: '',
                name: 'name3',
                address: ''
            },
            {
                photoUrl: "https://artmix.kh.ua/wp-content/uploads/2020/02/ciklorama1.jpg",
                id: '',
                name: 'name4',
                address: ''
            },
        )
    }
}
