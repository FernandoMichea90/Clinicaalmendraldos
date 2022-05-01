import React, { useEffect, useState } from 'react';
import useAutenticado from './useAutenticado'
const UsuarioContext=React.createContext()
const UsuarioProvider =(props)=>{
    const [usuario,setUsuario]=useState(null)
    const[cargando,setCargando]=useState(true)
    const user= useAutenticado()
    useEffect(()=>{
     if(user!==null){
        setCargando(false)
     }       
    },[user])


    return (
        
        <UsuarioContext.Provider value={user}>
            {props.children}
        </UsuarioContext.Provider>)
    
}
export {UsuarioProvider,UsuarioContext} 