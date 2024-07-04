import { firebaseConfig } from "../config"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export class FirebaseApp {
    static FirebaseApp = undefined
    static auth = undefined
    static init() {
        this.FirebaseApp = initializeApp(firebaseConfig)
        this.auth = getAuth()
        // signInWithEmailAndPassword(this.auth,"tizuogu@gmail.com", "moggizu")

    }
}