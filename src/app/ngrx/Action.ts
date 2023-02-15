import { createAction,props} from '@ngrx/store';

const GET_PERSONAJES:string="GET_PERSONAJES";

export const DatosDeFilm=createAction(
    GET_PERSONAJES,
   props<{payload:string[]}>()
)