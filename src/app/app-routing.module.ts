import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import {ProfileProComponent} from './profiles/profile-pro/profile-pro.component';
import {ProfilePartComponent} from './profiles/profile-part/profile-part.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile-pro', component: ProfileProComponent },
  { path: 'profile-part', component: ProfilePartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
