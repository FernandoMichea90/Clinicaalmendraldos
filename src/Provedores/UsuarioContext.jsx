import React, { useEffect, useState } from 'react';
import useAutenticado from './useAutenticado'
const UsuarioContext=React.createContext()
const UsuarioProvider =(props)=>{
    const [usuario,setUsuario]=useState(null)
    const[cargando,setCargando]=useState(true)
    const user= useAutenticado()
    useEffect(()=>{
    const estaesunaprueba=() => {
     if(user!==null){
        setCargando(false)
     }
    }
    estaesunaprueba();       
    },[user])


    return (
        
        <UsuarioContext.Provider value={user}>
            {props.children}
        </UsuarioContext.Provider>)
    
}
export {UsuarioProvider,UsuarioContext} 