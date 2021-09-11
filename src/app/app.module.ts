import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from './app-routing.module';
import { DoctorComponent } from './components/doctor/doctor.component';
import { SecretaryComponent } from './components/secretary/secretary.component';
import 'ngx-bootstrap';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    Router,
    DoctorComponent,
    SecretaryComponent,
    AppointmentComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
