import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: "main", component: MainComponent },
    { path: "about", component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const app_routing = RouterModule.forRoot(APP_ROUTES);