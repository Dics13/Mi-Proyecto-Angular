import axios from "axios"

export  async function TomarDatos(id:any){
   console.log(id)
 
  /* return async ()=>{await axios.get("https://swapi.dev/api/films")
   .then(data=>console.log(data))}
           .then((personajes)=>{
         let lista=personajes.data.results.filter((ele:any)=>{
           if(ele.episode_id===id){
             return{
              peroonajes:ele.personajes
             }
           } else return
          
       })
        return lista 
     }) .then((datos)=>console.log(datos))*/
    
}