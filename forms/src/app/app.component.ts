import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  form:FormGroup

  constructor(private formBuilder:FormBuilder){
    this.form = formBuilder.group({
      username: [''], color:[''], pesca:[''], musica:[''],lectura:[''],genero:['']
    })
  }

  getData():void{
    console.log(this.form.getRawValue())

    console.log(this.form.getRawValue().lectura ? 'lectura' : '')
    console.log(this.form.getRawValue().musica ? 'musica' : '')
    console.log(this.form.getRawValue().pesca ? 'pesca' : '')

    console.log(this.form.getRawValue().genero)


  }
}
