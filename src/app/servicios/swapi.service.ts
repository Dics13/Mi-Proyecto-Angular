import { Injectable } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor() { }
    getPersonajes (id:any){
     return axios.get("https://swapi.dev/api/films")
               .then(data=>{
                 return data.data.results.filter((ele:any)=>{
                       if(id==ele.episode_id){ 
                        let objeto={
                          personajes:ele.characters
                        }
                        return objeto
                        } else return null
              })
               
             }) 
             .then(data=>{return data[0].characters})
             .then((url)=>{
              return url.map((ele:any)=>{
                return axios.get(ele).then(ele=>{
                  return{
                    nombre:ele.data.name,
                    ojos:ele.data.eye_color,
                    genero:ele.data.genered
                  }
                 })
           })
             }).then((arr)=>{
              return Promise.all(arr).then(personajes=>{return personajes})
             })


     
  
}

}

