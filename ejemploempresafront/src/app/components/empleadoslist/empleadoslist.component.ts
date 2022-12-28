import { Component, OnInit } from '@angular/core';
import { EmpleadoserviceService } from 'src/app/services/empleadoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleadoslist',
  templateUrl: './empleadoslist.component.html',
  styleUrls: ['./empleadoslist.component.css']
})
export class EmpleadoslistComponent implements OnInit{
  empleados:any = []
  constructor(private empleadoService:EmpleadoserviceService){}
  ngOnInit(): void {
      this.list()
  }

  list(){
    this.empleadoService.listEmpleados().subscribe(
      res=>{
        this.empleados = res
      }
    )
  }

  delete(id:number){
    this.empleadoService.eliminarEmpleado(id).subscribe(
      res =>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Empleado eliminado',
          showConfirmButton: false,
          timer: 1500
        })
        this.list()
      }
    )
  }
}
