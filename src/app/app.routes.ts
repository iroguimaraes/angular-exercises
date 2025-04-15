import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ex1UserProfileFormComponent } from "./ex1-user-profile-form/ex1-user-profile-form.component";
import { Ex2AutoCompleteInputComponent } from './ex2-auto-complete-input/ex2-auto-complete-input.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ex1', component: Ex1UserProfileFormComponent },
    { path: 'ex2', component: Ex2AutoCompleteInputComponent },
    { path: '', component: HomeComponent }, //default


];
