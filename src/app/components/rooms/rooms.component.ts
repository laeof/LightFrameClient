import { Component } from '@angular/core';
import { RoomscarouselComponent } from '../roomscarousel/roomscarousel.component';
import { CommonModule } from '@angular/common';
import { IRoom } from 'src/app/dtos/IRoom';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rooms',
    standalone: true,
    imports: [RoomscarouselComponent, CommonModule],
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
    rooms: IRoom[] | undefined = undefined

    constructor(private roomsService: RoomsService, private router: Router) {
        this.roomsService.getRooms().subscribe(
            (value) => {
                this.rooms = value;
            }
        )
    }

    redirectTo(path: string) {
        this.router.navigate([path]);
    }
}
