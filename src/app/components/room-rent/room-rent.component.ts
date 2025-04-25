import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { INote } from 'src/app/dtos/INote';
import { IRoom } from 'src/app/dtos/IRoom';
import { NotesService } from 'src/app/services/notes.service';
import { PayService } from 'src/app/services/pay.service';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
    selector: 'app-room-rent',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './room-rent.component.html',
    styleUrl: './room-rent.component.scss'
})
export class RoomRentComponent {
    notes: INote[] = [];
    room: IRoom | undefined = undefined;

    clickedNote: INote | undefined = undefined;
    sub: Subscription;

    constructor(private notesService: NotesService,
        private route: ActivatedRoute,
        private roomService: RoomsService,
        private payService: PayService
    ) {

        this.sub = this.route.paramMap.subscribe(params => {
            let id = params.get('id') || "";
            this.notesService.getRoomNotesDay(id).subscribe(
                (response) => {
                    this.notes = response;
                })

            this.roomService.getRoomById(id).subscribe((value) => this.room = value);
        });

    }

    clickNote(note: INote) {
        if (note.rent)
            return

        this.clickedNote = note;
    }

    payForNote() {
        if(this.clickedNote === undefined)
            return

        this.payService.payForNote(this.clickedNote.id).pipe(first()).subscribe();
    }
}
