import { createSelector } from "@ngrx/store";
import { Appstate } from "./store.store";
import { ListaPersonajesState } from "./ListaPersonajesState.state";

 export const selectorListaPersonajes= (state:Appstate)=>state.ListaPersonajesState

export const selectores= createSelector(
    selectorListaPersonajes,
    (state:ListaPersonajesState)=>state.ListaPersonajesState
)


