import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : "" , 
    component:HomeComponent
  },
  {
    path : "login" , 
    component:LoginComponent
  },
  {
    path : "register" , 
    component:RegisterComponent
  },
  {
    path : "profile" , 
    component:ProfileComponent
  },
  {
    path : "movies" , 
    component:MoviesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
