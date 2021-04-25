import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from 'src/containers/genre/genre.component';
import { LandingComponent } from 'src/containers/landing/landing.component';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'genre/:topic',component: GenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
