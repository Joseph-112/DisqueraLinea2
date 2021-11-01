/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.entity;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Joseph
 */
@Entity
@Table(name = "Artista")

@NamedQueries({
    @NamedQuery(name = "Artista.ListarTodos", query = "SELECT a FROM Artista a")
})

public class Artista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idArtista;
    
    @Column(name = "nombre",nullable = false, length = 15, unique = false)
    private String nombre;
    
    @Column(name = "nombre_artistico",nullable = false , length = 15, unique = true)
    private String nombreArtistico;
    
    @Column(name = "genero",nullable = false , unique = false)
    private char genero;
    
    @Column(name = "nacionalidad",nullable = false , length = 15 ,unique = false)
    private String nacionalidad;
    
    @Column(name = "imagen",nullable = false , length = 15, unique = false)
    private String imagen;
    
    @Column(name = "fecha_nacimiento",nullable = false , unique = false)
    private Date fNacimiento;
    
    @OneToMany(mappedBy = "artista", fetch = FetchType.LAZY, cascade= CascadeType.ALL, orphanRemoval = true)
    private List<Cancion> cancion;

    public Artista() {
    }

    public Artista(String nombre, String nombreArtistico, char genero, String nacionalidad, String imagen, Date fNacimiento, List<Cancion> cancion) {
        this.nombre = nombre;
        this.nombreArtistico = nombreArtistico;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.imagen = imagen;
        this.fNacimiento = fNacimiento;
        this.cancion = cancion;
    }

    public Integer getIdArtista() {
        return idArtista;
    }

    public void setIdArtista(Integer idArtista) {
        this.idArtista = idArtista;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public char getGenero() {
        return genero;
    }

    public void setGenero(char genero) {
        this.genero = genero;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
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

    public String getNombreArtistico() {
        return nombreArtistico;
    }

    public void setNombreArtistico(String nombreArtistico) {
        this.nombreArtistico = nombreArtistico;
    }
    
}
