import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { MapComponent } from './home/map/map.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewComponent } from './home/review/review.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileProComponent } from './profiles/profile-pro/profile-pro.component';
import { ProfilePartComponent } from './profiles/profile-part/profile-part.component';
import { HeaderProfilesComponent } from './profiles/header-profiles/header-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    MapComponent,
    AuthComponent,
    ReviewComponent,
    LoginComponent,
    ProfileProComponent,
    ProfilePartComponent,
    HeaderProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
