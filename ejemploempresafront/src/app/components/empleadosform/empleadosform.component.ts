import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EmpleadoserviceService } from 'src/app/services/empleadoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleadosform',
  templateUrl: './empleadosform.component.html',
  styleUrls: ['./empleadosform.component.css']
})
export class EmpleadosformComponent implements OnInit {

  nombre:string = ''
  apellidos:string = ''
  departamentos:any = []
  opcion:number = 0

  empleado:Empleado = new Empleado()
  constructor(private departamentoService:DepartamentoService, private empleadoService:EmpleadoserviceService,private router:Router) {
    
  }
save(){
this.empleado.nombre = this.nombre
this.empleado.apellidos = this.apellidos
this.empleado.departamento.id = this.opcion

this.empleadoService.guardarEmpleado(this.empleado).subscribe(
  res =>{
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Empleado registrado',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/empleados'])
  }
)
}

loadDepartments(){
  this.departamentoService.listarDepartamentos().subscribe(
    res =>{
      this.departamentos = res
      console.log(res)
    }
  )
}

getOption(){
  this.opcion = Number(this.opcion)
}
ngOnInit(): void {
  this.loadDepartments()
}
}
