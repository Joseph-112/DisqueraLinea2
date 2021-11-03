/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.respository;

import com.mycompany.disquera.entity.Artista;
import com.mycompany.disquera.entity.Cancion;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author ASUS
 */
@Local
public interface ICancion extends ICrud<Cancion, Integer>{
    public List<Cancion> listarPorArtista(Artista artista);
}
