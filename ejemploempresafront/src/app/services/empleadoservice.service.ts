import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoserviceService {

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-type': 'application/json'})
  constructor(private http:HttpClient) { }
  URL:string = "http://localhost:8080/api/empleado/"
  //guardar empleados
  guardarEmpleado(empleado:Empleado) : Observable<Empleado>{
    return this.http.post<Empleado>(this.URL + "save", empleado, {headers : this.httpHeaders})
  }

  //lista
  listEmpleados():Observable<Empleado>{
    return this.http.get<Empleado>(this.URL +'list-dto');
  }

  //buscar empleado
  buscarEmpleado(id:number):Observable<any>{
    return this.http.get<any>(this.URL + id)
  }

  //modificar empleado
  modificarEmpleado(empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(this.URL + "update/" + empleado.id, empleado, {headers:this.httpHeaders})
  }

  //eliminar empleado
  eliminarEmpleado(id:number) : Observable<Empleado>{
    return this.http.delete<Empleado>(this.URL + 'delete/' + id)
  }
}
