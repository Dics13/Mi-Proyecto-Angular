import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { FilmsComponent } from './componentes/films/films.component';
import { HomeComponent } from './componentes/home/home.component';

const routes : Routes  = [
  {path:"", redirectTo:"Home",pathMatch:'full'},
   {path:"Home", component:HomeComponent},
   {path: "Home/Films", component:FilmsComponent},
   {path:"Home/Films/Personajes",component:PersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
