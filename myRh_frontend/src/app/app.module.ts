import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import {WarningAlertComponent} from "./components/warning-alert/warningAlert.component";
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HighlightDirective } from '../directives/highlight.directive';
import {IndexNavbarComponent} from "./components/navbar/index-navbar/index-navbar.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './views/auth/register/register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FooterSmallComponent} from "./components/footer/footer-small/footer-small.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";
import {JobOfferComponent} from "./views/jobOffers/jobOffer.component";
import {SearchComponent} from "./components/search/search.component";
import {JobOfferCardComponent} from "./components/card/job-offer-card.component";
import {CompanyComponent} from "./layout/Company/company.component";
import { CompanyDashboardComponent } from './views/company/company-dashboard.component';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {JobOfferCompanyComponent} from "./views/company/job-offer/job-offer.component";
import {JobOfferFormComponent} from "./components/forms/job-offer-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    FooterSmallComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    IndexNavbarComponent,
    HighlightDirective,
    RegisterComponent,
    LoginComponent,
    JobOfferComponent,
    SearchComponent,
    JobOfferCardComponent,
    CompanyComponent,
    SidebarComponent,
    CompanyDashboardComponent,
    JobOfferCompanyComponent,
    JobOfferFormComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
