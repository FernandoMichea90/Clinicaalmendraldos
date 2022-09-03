import { useState, useEffect } from 'react'
import { db, auth } from '../Firebase/config'
import { collection, query, where, doc, setDoc, getDocs } from 'firebase/firestore'
import { Dock } from '@material-ui/icons'
const useAutenticado = props => {
  const [usuarioAutenticado, setusuarioAutenticado] = useState(null)
  const administrador = async (user) => {
    var result = false
    const q = query(collection(db, "administradores"), where("administrador", "==", user.email))
    const consult = await getDocs(q)

    result = consult.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots     
      result = true
    })
    return result
  }



  const usuarioExistente = async (usuario) => {
    console.log(usuario)
    const q = query(collection(db, 'usuarios'), where('correo', '==', usuario.email))
    const consult = await getDocs(q)
    const consulta = consult.forEach((doc) => {
      return doc.data()
    })
    
    if (consulta?.length || consulta == undefined) {
      console.log("vacio")
    } else {
      console.log("lleno")

      let usuarioAgregar = {
        correo: usuario.email,
        nombre: usuario.displayName,
        photoURL: usuario.photoURL

      }
      console.log(usuarioAgregar)
      //  await usuariosRef.doc(usuarioAgregar.correo).set(usuarioAgregar)
      const userRef = doc(db, 'usuarios', usuarioAgregar.correo)
      await setDoc(userRef, usuarioAgregar, { merge: true })
    }
  }
  useEffect( () => {
    
    const unsuscribe = auth.onAuthStateChanged(user => {
      if (user) {
        //  consultar si el usuario  existe            
        administrador(user).then(function (result) {
          console.log(result) // "Some User token"
          setusuarioAutenticado({ ...user, administrador: result })
        })
        usuarioExistente(user)

      } else {

        setusuarioAutenticado(false);

      }

      return () => unsuscribe();


    })

  }, [])

 

  return usuarioAutenticado
}

export default useAutenticado
