package com.empresa.ejemploempresa.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empresa.ejemploempresa.model.Departamento;
import com.empresa.ejemploempresa.repository.IDepartamentoRepository;

@Service
public class DepartamentoService {
    
    @Autowired
    private IDepartamentoRepository departamentoRepository;

    public Departamento guardarDepartamento(Departamento departamento){
        return departamentoRepository.save(departamento);
    }
    public List <Departamento> listaDepartamentos(){
        return departamentoRepository.findAll();
    }
}
