import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPhotographer } from 'src/app/dtos/IPhotographer';

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
    constructor(private router: Router) {
        this.masters.push({
            id: '',
            photoUrl: 'https://www.copyright.gov/engage/photographers/images/side-pic-1.jpg',
            workExperience: '2 years',
            name: 'MAGAMED'
        },
            {
                id: '',
                photoUrl: 'https://www.fujixpassion.com/wp-content/uploads/2023/08/Destaque-1.jpeg',
                workExperience: '1 year',
                name: 'ASHOT'
            },)
    }

    redirectTo() {
        this.router.navigate(['hire']);
    }
}
