import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

    toggleSign() {
        this.sign = !this.sign;
    }

    signIn() {
        
    }

    signUp() {

    }
}
