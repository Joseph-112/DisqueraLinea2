/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author Joseph
 */
@Entity
@Table(name = "Album")

@NamedQueries({
    @NamedQuery(name = "Album.ListarTodos", query = "SELECT a FROM Album a")
})

public class Album implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAlbum;
    
    @ManyToOne
    @JoinColumn(name = "id_artista", nullable = false)
    private Artista artista;
    
    @OneToMany(mappedBy = "album", fetch = FetchType.LAZY, cascade= CascadeType.ALL, orphanRemoval = true)
    private List<Cancion> cancion;
    
    @Column(name = "nombre",nullable = false, length = 15, unique = true)
    private String nombre;
    
    @Column(name = "descripcion",nullable = false , length = 30, unique = true)
    private String descripcion;
    
    @Column(name = "duracion",nullable = false , unique = false)
    private Integer duracion;
    
    @Column(name = "precio",nullable = false ,unique = false)
    private Integer precio;
    
    @Column(name = "imagen",nullable = false , length = 15, unique = false)
    private String imagen;
    
    @Column(name = "fecha_lanzamiento",nullable = false , unique = false)
    
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date fLanzamiento;
    
    @Column(name = "num_ventas",nullable = false , unique = false)
    private Integer numVentas;

    public Album() {
    }

    public Album(Artista artista, List<Cancion> cancion, String nombre, String descripcion, Integer duracion, Integer precio, String imagen, Date fLanzamiento, Integer numVentas) {
        this.artista = artista;
        this.cancion = cancion;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.precio = precio;
        this.imagen = imagen;
        this.fLanzamiento = fLanzamiento;
        this.numVentas = numVentas;
    }

    public Integer getIdAlbum() {
        return idAlbum;
    }

    public void setIdAlbum(Integer idAlbum) {
        this.idAlbum = idAlbum;
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

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
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

    public Integer getNumVentas() {
        return numVentas;
    }

    public void setNumVentas(Integer numVentas) {
        this.numVentas = numVentas;
    }

    public List<Cancion> getCancion() {
        return cancion;
    }

    public void setCancion(List<Cancion> cancion) {
        this.cancion = cancion;
    }

}
