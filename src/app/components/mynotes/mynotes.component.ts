import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INote } from 'src/app/dtos/INote';
import { NotesService } from 'src/app/services/notes.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-mynotes',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './mynotes.component.html',
    styleUrl: './mynotes.component.scss'
})
export class MynotesComponent {
    notes: INote[] = []
    canceledNotes: INote[] = []
    roomNames: { [key: string]: string } = {}
    dates: { [key: string]: string } = {}

    constructor(private notesService: NotesService, private userService: UserService,
        private roomService: RoomsService, private router: Router
    ) {
        this.userService.getCurrentUser().subscribe((value: any) => {
            if (value) {
                this.notesService.getMyNotes(value.value.id).subscribe(
                    (notes) => {
                        if (notes) {
                            notes.forEach(element => {
                                if (!element.isDisabled)
                                    this.notes.push(element)
                                else {
                                    this.canceledNotes.push(element);
                                }
                                this.dates[element.id] = this.splitAndTrim(element.day)
                                this.roomService.getRoomById(element.roomId).subscribe(
                                    (value) => {
                                        if (value)
                                            this.roomNames[element.roomId] = value.name
                                    }
                                )
                            });
                        }
                    }
                )
            }
        })
    }

    redirectTo(arg0: string) {
        this.router.navigate([arg0]);
    }

    splitAndTrim(str: string) {
        const day = str.slice(0, 2);
        const year = str.slice(-4);
        const month = str.slice(2, -4);

        return `${day}.${month}.${year}`;
    }

    pay(arg0: string) {
        this.notesService.payForNote(arg0).subscribe((value) => window.location.href = 'mynotes');
    }

    cancelNote(arg0: string) {
        this.notesService.cancelNote(arg0).subscribe((value) => window.location.href = 'mynotes');
    }

}
