/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.respository;

import java.util.List;

/**
 *
 * @author ASUS
 */
public interface ICrud<T, V> {
    
    public List<T> listarTodos();
    
    public T listarPorId(V id);
    
    public void guardar(T obj);
    
    public void editar(T obj);
    
    public void eliminar(T obj);
    
}
