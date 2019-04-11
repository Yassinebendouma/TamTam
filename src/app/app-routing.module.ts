import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'singin', component:SinginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
