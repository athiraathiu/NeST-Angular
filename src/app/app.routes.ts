import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"department",component:DepartmentComponent},
];
