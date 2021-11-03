/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.repo.Imp;

import com.mycompany.disquera.entity.Artista;
import com.mycompany.disquera.respository.IArtista;
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
public class ArtistaRepoImpl implements IArtista {

    @PersistenceContext(unitName = "Persistencia")
    private EntityManager em;

    @Override
    public List<Artista> listarTodos() {
        TypedQuery<Artista> query = em.createNamedQuery("Artista.ListarTodos", Artista.class);
        return query.getResultList();
    }

    @Override
    public Artista listarPorId(Integer id) {
        return em.find(Artista.class, id);
    }

    @Override
    public void guardar(Artista obj) {
        this.em.persist(obj);
    }

    @Override
    public void editar(Artista obj) {
        this.em.merge(obj);
    }

    @Override
    public void eliminar(Artista obj) {
        this.em.remove(obj);
    }

}
