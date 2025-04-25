import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/dtos/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    user: IUser | undefined = undefined;

    constructor(private router: Router, private userService: UserService) {
        this.userService.getCurrentUser().subscribe(
            (value) => { this.user = value }
        );
    }

    redirectTo(path: string) {
        this.router.navigate([path]);
    }
}
