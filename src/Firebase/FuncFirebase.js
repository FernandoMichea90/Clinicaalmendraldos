import { collection, getDocs, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { query } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { storage } from './config'
import { db, auth } from './config'
import Swal from 'sweetalert2';




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
    },
    //Salir de la pagina 
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
// cerrar sesion 
export const logOut = () => {

    alert('log out');
    signOut(auth).then(() => {
        alert('log out');
    }).catch((error) => {
        alert('error logging');
        console.log(error);
    })

}

// llamar al submenu  

export const getSubMenu = async () => {
    // alert('paso por aca');
    const q = query(collection(db, "SubMenu"));
    const querySnapshot = await getDocs(q);
    const response = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        response.push({ id: doc.id, ...doc.data() })
    });
    console.log(response);
    return response

}

// llamar al ColorBox

export const getColorBox = async () => {
    // alert('paso por aca');
    const q = query(collection(db, "ColorBox"));
    const querySnapshot = await getDocs(q);
    const response = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        response.push({ id: doc.id, ...doc.data() })
    });
    console.log(response);
    return response
}
// llamar  a las paginas disponibles

export const getPaginas = async () => {
    // alert('paso por aca');
    const q = query(collection(db, "pagina"));
    const querySnapshot = await getDocs(q);
    const response = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        response.push({ id: doc.id, ...doc.data() })
    });
    console.log(response);
    return response

}

// subir imagen 

export const SubirImagen = async (file) => {
    try {
        console.log(file.type)
        const storageRef = ref(storage, 'prueba')
        const metadata = {
            contentType: file.type,
        };
        uploadBytes(storageRef, file, metadata).then((snapshot) => {
            console.log('imagen subida')

        }).catch(error => {
            console.log(error)
        })
        console.log('descargar url')
        const sendUrl = getDownloadURL(ref(storage, 'prueba'))
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
export const PedirPaginaEstructura = async (ruta) => {
    try {
        const PaginaEstructuraRef = doc(db, "pagina", ruta, 'Estructura', ruta)
        const datos = await getDoc(PaginaEstructuraRef)
        if (datos.exists()) {
            console.log('Document Data', datos.data())
        } else {
            console.log('No existe una documentacion')
        }

        return datos.data()
    } catch (error) {
        console.log(error)

    }
}

export const autentificacionCorreo = async (login) => {
    return await signInWithEmailAndPassword(auth, login.usuario, login.contrasena)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // Swal.fire("Exito!",JSON.stringify(user),'success')
            const response = {
                code: null,
                mensaje: null,
                estado: true
            }
            return response
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const response = {
                code: errorCode,
                mensaje: errorMessage,
                estado: false
            }
            return response
            //Swal.fire(errorCode,errorMessage,'error')
        });
}

// actualizar sub menu 

export const updateSubMenu = async (subMenu) => {
    // crear la referencia a la base de datos 
    const updateSubMenu = doc(db, "SubMenu", subMenu.id)
    // se actualiza el sub menu
   var response= await updateDoc(updateSubMenu, {
        link: subMenu.link,
        titulo: subMenu.titulo
    }).then(() => {
        return {
            error: false
        }
    }).catch(err => {
        console.log(err);
        return {
            error: true,
        }
    })
    return response;
}