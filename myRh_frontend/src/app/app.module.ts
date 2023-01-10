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
import { RegisterComponent } from './views/register/register.component';
import {RegisterFormComponent} from "./components/forms/register-form/register-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    IndexNavbarComponent,
    HighlightDirective,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
