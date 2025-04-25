import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HireService } from 'src/app/services/hire.service';

@Component({
    selector: 'app-hire',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './hire.component.html',
    styleUrl: './hire.component.scss'
})
export class HireComponent {
    masterForm = new FormGroup({
        name: new FormControl(''),
        exp: new FormControl(''),
        photo: new FormControl('')
    });

    /**
     *
     */
    constructor(private hireService: HireService) {
        
    }

    submitForm() {
        this.hireService.hire({
            id: '',
            photoUrl: this.masterForm.value.photo ?? '',
            workExperience: this.masterForm.value.exp ?? '',
            name: this.masterForm.value.name ?? ''
        })
    }
}
