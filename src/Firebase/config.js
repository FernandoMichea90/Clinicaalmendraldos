import { initializeApp } from "@firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseconfig={
    apiKey: "AIzaSyDukiDPOt9aZa4dczn1HUSE_sKwFYUOOXQ",
    authDomain: "clinicaalmendral2021.firebaseapp.com",
    projectId: "clinicaalmendral2021",
    storageBucket: "clinicaalmendral2021.appspot.com",
    messagingSenderId: "398245497669",
    appId: "1:398245497669:web:1f517eb5e7cde2ae628c2c",
    measurementId: "G-JG30BFE00G"
}
const app =initializeApp(firebaseconfig)
export const db=getFirestore(app)
export const storage = getStorage(app);

//export default db