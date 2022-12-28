package com.empresa.ejemploempresa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empresa.ejemploempresa.model.Empleado;

@Repository
public interface IEmpleadoRepository extends JpaRepository<Empleado,Long>{
    
}
