import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewComponent } from './home/review/review.component';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { ProfileclientService } from './services/profileclient.service';
import { ProfileproService } from './services/profilepro.service';
import { LoginComponent } from './login/login.component';
import { ProfileProComponent } from './profiles/profile-pro/profile-pro.component';
import { ProfilePartComponent } from './profiles/profile-part/profile-part.component';
import { HeaderProfilesComponent } from './profiles/header-profiles/header-profiles.component';
import { MapComponent } from './home/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AuthComponent,
    ReviewComponent,
    LoginComponent,
    ProfileProComponent,
    ProfilePartComponent,
    HeaderProfilesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    LoginService,
    ProfileclientService,
    ProfileproService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
