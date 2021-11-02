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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author Joseph
 */
@Entity
@Table(name = "Cancion")

@NamedQueries({
    @NamedQuery(name = "Cancion.ListarTodas", query = "SELECT c FROM Cancion c")
})

public class Cancion implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCancion;
    
    @ManyToOne
    @JoinColumn(name = "id_artista", nullable = false)
    private Artista artista;
    
    @ManyToOne
    @JoinColumn(name = "id_album", nullable = false)
    private Album album;
    
    @Column(name = "nombre",nullable = false, length = 15, unique = true)
    private String nombre;
    
    @Column(name = "descripcion",nullable = false , length = 30, unique = true)
    private String descripcion;
    
    @Column(name = "duracion",nullable = false , unique = false)
    private Integer duracion;
    
    @Column(name = "nacionalidad",nullable = false , length = 15 ,unique = false)
    private String nacionalidad;
    
    @Column(name = "imagen",nullable = false , length = 15, unique = false)
    private String imagen;
    
    @Column(name = "fecha_lanzamiento",nullable = false , unique = false)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date fLanzamiento;
    
    @Column(name = "num_ventas",nullable = false , unique = false)
    private Integer numVentas;
    
    @Column(name = "precio",nullable = false ,unique = false)
    private Integer precio;

    public Cancion() {
    }

    public Cancion(Artista artista, Album album, String nombre, String descripcion, Integer duracion, String nacionalidad, String imagen, Date fLanzamiento, Integer numVentas, Integer precio) {
        this.artista = artista;
        this.album = album;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.nacionalidad = nacionalidad;
        this.imagen = imagen;
        this.fLanzamiento = fLanzamiento;
        this.numVentas = numVentas;
        this.precio = precio;
    }

   

    public Integer getNumVentas() {
        return numVentas;
    }

    public void setNumVentas(Integer numVentas) {
        this.numVentas = numVentas;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    

    public Integer getIdCancion() {
        return idCancion;
    }

    public void setIdCancion(Integer idCancion) {
        this.idCancion = idCancion;
    }

    public Artista getArtista() {
        return artista;
    }

    public void setArtista(Artista artista) {
        this.artista = artista;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getDuracion() {
        return duracion;
    }

    public void setDuracion(Integer duracion) {
        this.duracion = duracion;
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

    public Date getfLanzamiento() {
        return fLanzamiento;
    }

    public void setfLanzamiento(Date fLanzamiento) {
        this.fLanzamiento = fLanzamiento;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }
    
    

}