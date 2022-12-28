package com.empresa.ejemploempresa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empresa.ejemploempresa.dto.EmpleadoDTO;
import com.empresa.ejemploempresa.model.Empleado;
import com.empresa.ejemploempresa.services.EmpleadoService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/empleado")
public class EmpleadoController {
    
    @Autowired
    private EmpleadoService empleadoService;

    @PostMapping("/save")
    public Empleado save(@RequestBody Empleado empleado){
        return empleadoService.guardar(empleado);
    }

    @GetMapping("/list")
    public List <Empleado> list (){
        return empleadoService.listaEmpleados();
    }

    @GetMapping("/list-dto")
    public List <EmpleadoDTO> listDTO (){
        return empleadoService.listaEmpleadosDTO();
    }

    @PutMapping("/update/{id}")
    public Empleado update(@RequestBody Empleado empleado, @PathVariable Long id){
        return empleadoService.modificarEmpleado(empleado, id);
    }

    @GetMapping("/{id}")
    public EmpleadoDTO show(@PathVariable Long id){
        return empleadoService.buscarEmpleado(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
         empleadoService.eliminarEmpleado(id);
    }
}
