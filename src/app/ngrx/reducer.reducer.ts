import { createReducer,on } from "@ngrx/store";
import { ListaPersonajes } from "./personajes.action";
import { ListaPersonajesState } from "./ListaPersonajesState.state";

export const inicio:ListaPersonajesState[]=[]
  
;
export const Reducer=createReducer(
    inicio,
  on(ListaPersonajes, (state)=> {
      return {...state}
  })
)