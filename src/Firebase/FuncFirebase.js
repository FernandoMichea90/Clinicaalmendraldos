import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref,uploadBytes ,getDownloadURL} from "firebase/storage";
import {storage} from './config'
import {db} from './config'




export default {
    // pedir paginas de la base de datos
    async pedirPaginas() {
        const datos = await getDocs(collection(db, 'pagina'))
        let paginas = datos.docs.map(doc => {
            return doc.data()
        })

        return paginas
    },
    // guardar estructura pagina 
    async guardarEstructuraPagina(Objeto) {
        // referencia base de datos 
        await setDoc(doc(db, 'pagina', 'fer', 'Estructura', 'fer'), Objeto)

    },
    // llamar pagina por ruta 
    async llamarPaginaRuta(Ruta) {
        //docRef a la base de  datos
        const docRef = doc(db, 'pagina', 'fer', 'Estructura', 'fer')
        //pedir documentos a la base de datos
        const docSnap = await getDoc(docRef)
        //validar si existe documentos 
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
        return docSnap.data()
    }
}

export const CrearPagina = async (Objeto) => {
    console.log(Objeto)
    try {
        const query = await setDoc(doc(db, 'pagina', Objeto.ruta), Objeto)
        console.log(query)
    } catch (error) {
        console.log(error)
    }

}

// subir imagen 

export const SubirImagen =async (file)=>{
    try {
        console.log(file.type)
        const  storageRef=ref(storage,'prueba')
        const metadata = {
            contentType: file.type,
          };
        uploadBytes(storageRef,file,metadata).then((snapshot)=>{
        console.log('imagen subida')
        
        }).catch(error=>{
            console.log(error)
        })
        console.log('descargar url')
      const sendUrl=  getDownloadURL(ref(storage, 'prueba'))
        .then((url) => {
            console.log(url)
            return url
        })
        return sendUrl
    } catch (error) {
        console.log(error)
    }
   

}

//pedir la estructura de una pagina 
export const PedirPaginaEstructura =async(ruta)=>{
    try {
        const PaginaEstructuraRef=doc(db,"pagina",ruta,'Estructura',ruta)
        const datos=await getDoc(PaginaEstructuraRef)
        if(datos.exists()){
            console.log('Document Data',datos.data())
        }else{
            console.log('No existe una documentacion')
        }

        return datos.data()
    } catch (error) {
        console.log(error)
        
    }
}
