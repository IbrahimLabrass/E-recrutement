import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {JobOfferComponent} from "./views/jobOffers/jobOffer.component";
import {CompanyComponent} from "./layout/Company/company.component";
import {CompanyDashboardComponent} from "./views/company/company-dashboard.component";
import {JobOfferCompanyComponent} from "./views/company/job-offer/job-offer.component";
import {AdminComponent} from "./layout/admin/admin.component";
import {AdminDashboardComponent} from "./views/admin/admin-dashboard/admin-dashboard.component";
import {AdminLoginComponent} from "./views/auth/login/admin-login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminLoginComponent },
  ]},
  { path: 'company' , component: CompanyComponent, children: [
      { path: 'dashboard', component: CompanyDashboardComponent },
      { path: 'job-offer', component: JobOfferCompanyComponent },
    ]},
  { path: 'admin', component: AdminComponent, children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'job-offer', component: JobOfferCompanyComponent }
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
