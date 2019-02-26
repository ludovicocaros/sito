import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './modulo/modulo.component';
import {HomeComponent}     from './home/home.component';
const routes: Routes = [
  {
    path: "modulo",
      component: ModuloComponent
},
    {path: "home",
      component: HomeComponent
},
  
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
