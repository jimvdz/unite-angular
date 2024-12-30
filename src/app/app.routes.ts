import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'services', component : ServicesComponent},
    {path : 'contact', component : ContactComponent},
    {path : '404', component : PagenotfoundComponent},
    {path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];
