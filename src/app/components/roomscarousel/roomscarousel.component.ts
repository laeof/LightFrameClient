import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRoom } from 'src/app/dtos/IRoom';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
    selector: 'app-roomscarousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './roomscarousel.component.html',
    styleUrl: './roomscarousel.component.scss'
})
export class RoomscarouselComponent {
    rooms: IRoom[] | undefined = [];

    constructor(private roomsService: RoomsService,
        private router: Router
    ) {
        this.roomsService.getPopularRooms().subscribe(
            (value) => {
                this.rooms = value;
            }
        )
    }

    redirectTo(path: string) {
        this.router.navigate([path]);
    }
}
