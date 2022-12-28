import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EmpleadoserviceService } from 'src/app/services/empleadoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarempleado',
  templateUrl: './modificarempleado.component.html',
  styleUrls: ['./modificarempleado.component.css']
})
export class ModificarempleadoComponent implements OnInit {

  empleado:Empleado = new Empleado()
  departamentos:any = [];

  selDepartment:Boolean = false

  constructor(private activatedRoute:ActivatedRoute, private empleadoService:EmpleadoserviceService, private departamentoService:DepartamentoService, private router:Router) {  }
  ngOnInit(): void {
      this.loadEmployee()
      // this.loadDepartments()
  }

  loadDepartments(){
    return this.departamentoService.listarDepartamentos().subscribe(
      res =>{
        console.log(res)
        this.selDepartment = !this.selDepartment
        this.departamentos = res
      }
    )
  }

  loadEmployee(){
    this.activatedRoute.params.subscribe(
      params=>{
        let id = params['id']
        if(id){
          this.empleadoService.buscarEmpleado(id).subscribe(
            res =>{
              console.log(res)
              this.empleado.id = res.id
              this.empleado.nombre = res.nombre
              this.empleado.apellidos = res.apellidos
              this.empleado.departamento.nombreDepartamento = res.departamento
              this.empleado.departamento.id = res.departamentoId
            }
          )
        }
      }
    )
  }

  update(){
    this.empleadoService.modificarEmpleado(this.empleado).subscribe(
      res=>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Empleado modificado',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/empleados'])
      }
    )
  }
}
