
import Firebase from '../Firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { getFirestore, addDoc,collection,setDoc,doc } from "firebase/firestore"
import Config from './config'




const db =getFirestore()

export default {
async registrarCorreo(){
const auth = getAuth()    
const provider=new GoogleAuthProvider()
signInWithPopup(auth,provider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })

 }, 

 async CrearPagina(Pagina){
    try{
        const firebaseApp=initializeApp(Config)
        console.log(Pagina)
    const consulta=await setDoc(doc(db,'pagina',Pagina.nombre),{...Pagina})
     console.log("Document written with ID: ", consulta)
    }catch(error){
        console.log("error adding document :"+error)
    }
 }
}

