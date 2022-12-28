import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartamentoformComponent } from './components/departamentoform/departamentoform.component';
import { ListadepartamentosComponent } from './components/listadepartamentos/listadepartamentos.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpleadoslistComponent } from './components/empleadoslist/empleadoslist.component';
import { EmpleadosformComponent } from './components/empleadosform/empleadosform.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ModificarempleadoComponent } from './components/modificarempleado/modificarempleado.component'
const rutas:Routes = [
  {path:'departamentos', component:ListadepartamentosComponent},
  {path:'departamento/form', component:DepartamentoformComponent},
  {path:'empleados', component:EmpleadoslistComponent},
  {path:'empleados/form', component:EmpleadosformComponent},
  {path:'empleados/modificar/:id', component:ModificarempleadoComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoformComponent,
    ListadepartamentosComponent,
    EmpleadoslistComponent,
    EmpleadosformComponent,
    NavegacionComponent,
    ModificarempleadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
