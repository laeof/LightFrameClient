import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from 'src/app/dtos/IUser';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    user: IUser | undefined = undefined;

    constructor() {
        let user: IUser = {
            photoUrl: '../../assets/imgs/1.jpg',
            name: 'sdas sadas',
            id: ''
        }
        this.user = user;
    }
}
