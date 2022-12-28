import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Departamento } from '../models/Departamento';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  URL:string = "http://localhost:8080/api/departamento"

  constructor(private http:HttpClient) { }

  //guardar deparamentos
  guardarDepartamentos(deparamento:Departamento):Observable<Departamento>{
    return this.http.post<Departamento>(this.URL+'/save', deparamento, {headers: this.httpHeaders})
  }

  //listarDepartamentos
  listarDepartamentos():Observable<Departamento>{
    return this.http.get<Departamento>(this.URL + '/list')
  }
}
