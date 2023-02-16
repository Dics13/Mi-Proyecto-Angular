import { Component} from '@angular/core';
import { SwapiService } from 'src/app/servicios/swapi.service'; 
import { Store } from '@ngrx/store';
import { ListaPersonajes } from 'src/app/ngrx/personajes.action';
import axios from "axios"

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  films:any=[];
  listaPersonajes:any=[];


constructor( private SwapiService:SwapiService, private Store:Store){
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
 
   tomarId(id:any){
   this.SwapiService.getPersonajes(id).then((res:any)=>{
      this.listaPersonajes=res;
      this.Store.dispatch(ListaPersonajes(this.listaPersonajes))
   })
   
}

}
