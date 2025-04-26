import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { RoomsService } from './services/rooms.service';
import { NotesService } from './services/notes.service';
import { UserService } from './services/user.service';
import { PayService } from './services/pay.service';
import { HireService } from './services/hire.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { LFCookieService } from './services/cookie.service';
import { first } from 'rxjs';
import { IUser } from './dtos/IUser';
import { ITokens } from './dtos/ITokens';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CarouselComponent],
    providers: [RoomsService, NotesService, UserService, PayService, HireService, ApiService, AuthService, LFCookieService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'LightFrameClient';

    constructor(
        private userService: UserService,
        private cookieService: LFCookieService
    ) {
        this.userService.exchangeTokenOnUser().pipe(first())
            .subscribe({
                next: (response: IUser | undefined) => {
                    if (response)
                        this.userService.setCurrentUser(response);
                },
                error: (error: any) => {
                    const tokens: ITokens = {
                        accessToken: this.cookieService.accessToken.value,
                        refreshToken: this.cookieService.refreshToken.value
                    }
                }
            });
    }
}
