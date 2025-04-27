import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPhotographer } from 'src/app/dtos/IPhotographer';
import { HireService } from 'src/app/services/hire.service';

@Component({
    selector: 'app-photographers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './photographers.component.html',
    styleUrl: './photographers.component.scss'
})
export class PhotographersComponent {
    masters: IPhotographer[] = [];
    /**
     *
     */
    constructor(private router: Router, private hireService: HireService) {
        this.hireService.getPhotographers().subscribe(
            (value: any) => {
                if (value != undefined) {
                    this.masters = value.value
                }
            }
        )
    }

    redirectTo() {
        this.router.navigate(['hire']);
    }
}
