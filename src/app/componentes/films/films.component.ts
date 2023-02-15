import { Component} from '@angular/core';
import { TomarDatos } from 'src/app/ngrx/Actions'; 

import axios from "axios"

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  films:any=[];
  i:any; 
constructor(){
}
async ngOnInit(){
  let datos= await axios.get("https://swapi.dev/api/films")
  this.films=datos.data.results.map((ele:any)=>{
    return{
      nombre:ele.title,
      id:ele.episode_id,
      director:ele.director,
      personajes:"Personajes"
    }
  })
}
 
   tomarId(event:any){
  let id:number=event.target.id;
   async ()=>{TomarDatos(id)
   let datos= await axios.get("https://swapi.dev/api/films")
   console.log(datos)}
}}
