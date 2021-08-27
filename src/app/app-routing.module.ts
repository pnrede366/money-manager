import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './017/routing/about/about.component';
import { HomeComponent } from './017/routing/home/home.component';
import { NavbarComponent } from './017/routing/navbar/navbar.component';
import { PageNotFoundComponent } from './017/routing/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent,canActivate:[AuthGuard]},
  {path:"navbar",component:NavbarComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
