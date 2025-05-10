import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { title } from 'process';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home | WebTechTalks' },
    { path: 'about', component: AboutComponent, title: 'About | WebTechTalks' },
    { path: 'contact', component: ContactComponent, title: 'Contact | WebTechTalks' },
    { path: 'service', component: ServiceComponent, title: 'Service | WebTechTalks' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
