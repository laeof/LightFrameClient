import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss'
})
export class AuthComponent {
    sign: boolean = false;

    toggleSign() {
        this.sign = !this.sign;
    }
}
