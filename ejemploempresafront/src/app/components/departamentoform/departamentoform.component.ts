import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import Swal from 'sweetalert2';
import{Router} from '@angular/router'
@Component({
  selector: 'app-departamentoform',
  templateUrl: './departamentoform.component.html',
  styleUrls: ['./departamentoform.component.css']
})
export class DepartamentoformComponent implements OnInit {

  nombre:string = ""

  departamento:Departamento = new Departamento()
  constructor(private departamentoService:DepartamentoService, private router:Router){}

  save(){
    
    this.departamento.nombreDepartamento = this.nombre

    this.departamentoService.guardarDepartamentos(this.departamento).subscribe(
      res =>{
        Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Departamento registrado',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/departamentos'])
    
    }
    )

  }

  ngOnInit(): void {
      
  }
}
