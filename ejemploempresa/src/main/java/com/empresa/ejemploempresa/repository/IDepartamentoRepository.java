package com.empresa.ejemploempresa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empresa.ejemploempresa.model.Departamento;

@Repository
public interface IDepartamentoRepository extends JpaRepository<Departamento, Long>{

    
    
}
