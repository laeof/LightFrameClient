import { Component } from '@angular/core';
import { RoomscarouselComponent } from "../roomscarousel/roomscarousel.component";
import { NewsComponent } from "../news/news.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoomscarouselComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
