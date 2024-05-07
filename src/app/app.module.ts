import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {provideRouter, RouterLink, RouterOutlet, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AppComponent} from "./app.component";
import {DocumentsComponent} from "./views/documents/documents.component";
import {DocumentComponent} from "./views/documents/document/document.component";
import {DriversComponent} from "./views/drivers/drivers.component";
import {DriverComponent} from "./views/drivers/driver/driver.component";
import {VehiclesComponent} from "./views/vehicles/vehicles.component";
import {VehicleComponent} from "./views/vehicles/vehicle/vehicle.component";
import {AccountComponent} from "./views/account/account.component";
import {LoginComponent} from "./views/account/login/login.component";
import {RegisterComponent} from "./views/account/register/register.component";
import {HomeComponent} from "./views/home/home.component";

import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {BannerComponent} from "./shared/banner/banner.component";

export const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'documents', redirectTo: '/documents', component: DocumentsComponent},
  {path: 'documents/:id', redirectTo: '/documents/:id', component: DocumentComponent},

  {path: 'drivers', redirectTo: '/drivers', component: DriversComponent},
  {path: 'drivers/:id', redirectTo: '/drivers/:id', component: DriverComponent},

  {path: 'vehicles', redirectTo: '/vehicles', component: VehiclesComponent},
  {path: 'vehicles/:id', redirectTo: '/vehicles/:id', component: VehicleComponent},


  {path: 'account', redirectTo: '/account', component: AccountComponent},
  {path: 'account/login', redirectTo: '/account/login', component: LoginComponent},
  {path: 'account/register', redirectTo: '/account/register', component: RegisterComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DocumentComponent,
    DriverComponent,
    DriversComponent,
    VehiclesComponent,
    VehicleComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    NgForOf,
    BrowserModule
  ],
  providers: [
    HttpClient,
    provideRouter(routes),
    provideAnimationsAsync()],
  bootstrap: [
    AppComponent,
    DocumentsComponent,
    DocumentComponent,
    DriverComponent,
    DriversComponent,
    VehiclesComponent,
    VehicleComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    AppComponent,
    DocumentsComponent,
    DocumentComponent,
    DriverComponent,
    DriversComponent,
    VehiclesComponent,
    VehicleComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule {
}
