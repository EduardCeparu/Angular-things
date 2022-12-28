package com.empresa.ejemploempresa.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empresa.ejemploempresa.converters.EmpleadoConverter;
import com.empresa.ejemploempresa.dto.EmpleadoDTO;
import com.empresa.ejemploempresa.model.Empleado;
import com.empresa.ejemploempresa.repository.IEmpleadoRepository;

@Service
public class EmpleadoService {
    
    @Autowired
    private IEmpleadoRepository empleadoRepository;

    @Autowired
    private EmpleadoConverter empleadoConverter;
    public Empleado guardar(Empleado empleado){
        return empleadoRepository.save(empleado);
    }

    public List<Empleado> listaEmpleados(){
        return empleadoRepository.findAll();
    }

    public List<EmpleadoDTO> listaEmpleadosDTO(){

        List<Empleado> empleados = listaEmpleados();
        List<EmpleadoDTO> empleadoDTO = new ArrayList<>();

        for(Empleado e : empleados){
            empleadoDTO.add(empleadoConverter.convertEntityToDTO(e));
        }
        return empleadoDTO;
    }
    public Empleado modificarEmpleado(Empleado empleado, Long id){
        Empleado empleadoEncontrado = empleadoRepository.findById(id).orElse(null);
        empleadoEncontrado.setNombre(empleado.getNombre());
        empleadoEncontrado.setApellidos(empleado.getApellidos());
        empleadoEncontrado.setDepartamento(empleado.getDepartamento());

        return empleadoRepository.save(empleadoEncontrado);
    }

    public EmpleadoDTO buscarEmpleado(Long id){
        Empleado empleado = empleadoRepository.findById(id).orElse(null);
        return empleadoConverter.convertEntityToDTO(empleado);
    }

    public void eliminarEmpleado(Long id){
        empleadoRepository.deleteById(id);
    }
    
}
