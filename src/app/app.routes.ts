import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'summary', component:SummaryComponent}
];
