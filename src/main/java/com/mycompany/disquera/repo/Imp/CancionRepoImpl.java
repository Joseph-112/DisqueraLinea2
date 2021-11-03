/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.repo.Imp;

import com.mycompany.disquera.entity.Artista;
import com.mycompany.disquera.entity.Cancion;
import com.mycompany.disquera.respository.ICancion;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author ASUS
 */
@Stateless
public class CancionRepoImpl implements ICancion{
    
    @PersistenceContext(unitName = "Persistencia")
    private EntityManager em;    

        @Override
    public List<Cancion> listarTodos() {
        TypedQuery<Cancion> query = em.createNamedQuery("Cancion.ListarTodos", Cancion.class);
        return query.getResultList();
    }

    @Override
    public Cancion listarPorId(Integer id) {
        return em.find(Cancion.class, id);
    }

    @Override
    public void guardar(Cancion obj) {
        this.em.persist(obj);
    }

    @Override
    public void editar(Cancion obj) {
        this.em.merge(obj);
    }

    @Override
    public void eliminar(Cancion obj) {
        this.em.remove(obj);
    }

    @Override
    public List<Cancion> listarPorArtista(Artista artista) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
