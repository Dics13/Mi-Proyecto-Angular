import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './componentes/films/films.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { HomeComponent } from './componentes/home/home.component';
import { StoreModule } from '@ngrx/store';
import { Reducer } from './ngrx/reducer.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PersonajesComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ reducer: Reducer }),
    FormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
