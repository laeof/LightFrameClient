import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { ITokens } from 'src/app/dtos/ITokens';
import { IUser } from 'src/app/dtos/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { LFCookieService } from 'src/app/services/cookie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss'
})
export class AuthComponent {
    sign: boolean = false;

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    regForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        phone: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService: AuthService,
        private cookieService: LFCookieService,
        private userService: UserService
    ) {

    }

    toggleSign() {
        this.sign = !this.sign;
    }

    signIn() {
        this.authService.signIn({ email: this.loginForm.value.email, password: this.loginForm.value.password }).subscribe(
            (response: ITokens) => {
                this.cookieService.setAccessToken(response.accessToken);
                this.cookieService.setRefreshToken(response.refreshToken);
                window.location.href = "home"
            }
        );
    }

    signUp() {
        this.authService.signUp({
            firstName: this.regForm.value.firstName,
            lastName: this.regForm.value.lastName,
            phoneNumber: this.regForm.value.phone,
            userName: this.regForm.value.email,
            email: this.regForm.value.email,
            password: this.regForm.value.password
        }).subscribe(
            (response: ITokens) => {
                this.cookieService.setAccessToken(response.accessToken);
                this.cookieService.setRefreshToken(response.refreshToken);
                window.location.href = 'home';
            }
        )
    }
}
