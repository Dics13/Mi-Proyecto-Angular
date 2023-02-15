import { createReducer, on } from '@ngrx/store';

 const  initialState: Object={
    Personajes:[]
 }
 ;

export const Reducer = createReducer(
  initialState,

);