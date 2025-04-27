import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/dtos/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { LFCookieService } from 'src/app/services/cookie.service';
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

    constructor(private router: Router, private userService: UserService, private cookieService: LFCookieService
    ) {
        this.userService.getCurrentUser().subscribe(
            (value: any) => {
                if (value != undefined) {
                    this.user = value.value;
                }
            }
        );
    }

    redirectTo(path: string) {
        this.router.navigate([path]);
    }

    logOut() {
        this.cookieService.deleteTokens();
        window.location.reload();
    }
}
