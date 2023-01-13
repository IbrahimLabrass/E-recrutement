import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {JobOfferComponent} from "./views/jobOffers/jobOffer.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
  ]},
  { path: 'job-offers',component: JobOfferComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
