import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { MainvideoComponent } from './mainvideo/mainvideo.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'about', canActivate:[AuthGuard] , component:AboutComponent},
  {path:'movies', canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'network', canActivate:[AuthGuard] , component:NetworkComponent},
  {path:'pepole', canActivate:[AuthGuard] , component:PepoleComponent},
  {path:'moviedetails/:id', canActivate:[AuthGuard] ,component:MoviedetailsComponent}, 
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {path:'mainvideo' , component:MainvideoComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
