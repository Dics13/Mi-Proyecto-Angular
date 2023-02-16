import { createAction,props } from "@ngrx/store";

export const  ListaPersonajes= createAction (
  "ListaPersonajes",
  props<{ personajes:string[]}>()

)