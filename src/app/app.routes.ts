import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SaveOrdersComponent } from './components/save-orders/save-orders.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'summary', component:SummaryComponent},
    {path: 'save', component:SaveOrdersComponent}
];
