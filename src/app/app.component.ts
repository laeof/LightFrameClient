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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarouselComponent],
  providers: [RoomsService, NotesService, UserService, PayService, HireService, ApiService, AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LightFrameClient';
}
