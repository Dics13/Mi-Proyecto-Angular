import { Component, Input,OnInit} from '@angular/core';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit  {

 @Input () personajes:any

 ngOnInit(){
  console.log(this.personajes)
 }

}
