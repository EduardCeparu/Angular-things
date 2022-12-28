package com.empresa.ejemploempresa.converters;

import org.springframework.stereotype.Component;

import com.empresa.ejemploempresa.dto.EmpleadoDTO;
import com.empresa.ejemploempresa.model.Empleado;

@Component
public class EmpleadoConverter {
    
    public EmpleadoDTO convertEntityToDTO(Empleado empleado){

        EmpleadoDTO empleadoDTO = new EmpleadoDTO();
        empleadoDTO.setId(empleado.getId());
        empleadoDTO.setNombre(empleado.getNombre());
        empleadoDTO.setApellidos(empleado.getApellidos());
        empleadoDTO.setDepartamento(empleado.getDepartamento().getNombreDepartamento());
        empleadoDTO.setDepartamentoId(empleado.getDepartamento().getId());
        return empleadoDTO;
    }
}
