import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { INote } from 'src/app/dtos/INote';
import { IRoom } from 'src/app/dtos/IRoom';
import { IUser } from 'src/app/dtos/IUser';
import { NotesService } from 'src/app/services/notes.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-room-rent',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './room-rent.component.html',
    styleUrl: './room-rent.component.scss'
})
export class RoomRentComponent {
    notes: INote[] = [];
    room: IRoom | undefined = undefined;

    clickedNote: INote | undefined = undefined;
    sub: Subscription;

    noteForm = new FormGroup({
        name: new FormControl(''),
        phoneNumber: new FormControl('')
    });

    user: IUser | undefined = undefined

    constructor(private notesService: NotesService,
        private route: ActivatedRoute,
        private roomService: RoomsService,
        private userService: UserService
    ) {

        this.sub = this.route.paramMap.subscribe(params => {
            let id = params.get('id') || "";
            this.notesService.getRoomNotesDay(id).subscribe(
                (response) => {
                    this.notes = response;
                })

            this.roomService.getRoomById(id).subscribe((value) => this.room = value);
        });

        this.userService.getCurrentUser().subscribe((value) => this.user = value);

    }

    clickNote(note: INote) {
        if (note.rent)
            return

        this.clickedNote = note;
    }

    createNote() {
        if (!this.room)
            return;

        if(!this.clickedNote)
            return;

        this.notesService.createNote(this.clickedNote.start, this.clickedNote.end, this.room?.id, this.noteForm.value.name ?? "", this.noteForm.value.phoneNumber ?? "").subscribe(
            (resp) => {
                window.location.href = 'rooms/' + this.room?.id
            }
        )
    }
}
