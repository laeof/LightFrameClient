import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RentrulesComponent } from './components/rentrules/rentrules.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AuthComponent } from './components/auth/auth.component';
import { HireComponent } from './components/hire/hire.component';
import { PhotographersComponent } from './components/photographers/photographers.component';
import { NewsComponent } from './components/news/news.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'rentrules', component: RentrulesComponent },
    { path: 'rooms/:id', component: RoomsComponent },
    { path: 'photographers', component: PhotographersComponent },
    { path: 'news', component: NewsComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'hire', component: HireComponent },
];
