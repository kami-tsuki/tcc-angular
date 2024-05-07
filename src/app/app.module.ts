import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {provideRouter, RouterLink, RouterOutlet, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
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
    AppComponent
  ],
  exports: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule {
}
