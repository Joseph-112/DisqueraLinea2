/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author Joseph
 */
@Entity
@Table(name = "Usuario")
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "nombre",nullable = false, length = 15, unique = false)
    private String nombre;
    
    @Column(name = "rol",nullable = false , length = 15, unique = false)
    private String rol;
    
    @Column(name = "documento",nullable = false ,length = 10, unique = true)
    private String documento;
    
    @Column(name = "correo",nullable = false , length = 15 ,unique = true)
    private String correo;
    
    @Column(name = "imagen",nullable = false , length = 15, unique = false)
    private String imagen;
    
    @Column(name = "fecha_nacimiento",nullable = false , unique = false)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date fNacimiento;
    
    @Column(name = "contraseña",nullable = false , unique = false)
    private String contraseña;

    public Usuario() {
    }

    public Usuario(String nombre, String rol, String documento, String correo, String imagen, Date fNacimiento, String contraseña) {
        this.nombre = nombre;
        this.rol = rol;
        this.documento = documento;
        this.correo = correo;
        this.imagen = imagen;
        this.fNacimiento = fNacimiento;
        this.contraseña = contraseña;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Date getfNacimiento() {
        return fNacimiento;
    }

    public void setfNacimiento(Date fNacimiento) {
        this.fNacimiento = fNacimiento;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    
    
}
