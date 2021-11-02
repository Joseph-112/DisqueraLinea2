/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.disquera.respository;

import com.mycompany.disquera.entity.Usuario;
import javax.ejb.Local;


/**
 *
 * @author Joseph
 */
@Local
public interface IUsuario extends ICrud<Usuario, Integer>{
    
}
