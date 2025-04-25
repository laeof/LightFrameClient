import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rentrules',
    standalone: true,
    imports: [],
    templateUrl: './rentrules.component.html',
    styleUrl: './rentrules.component.scss'
})
export class RentrulesComponent {

    constructor(private router: Router) {

    }
    redirectTo(arg0: string) {
        this.router.navigate([arg0])
    }
}
