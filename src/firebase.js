import { initializeApp } from "firebase/app";
import { 
        createUserWithEmailAndPassword,
        getAuth, 
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { use } from "react";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD5N8_JgFI2JFgRJd3rKJp4uF9C-OloZhM",
  authDomain: "netflix-clone-f97ff.firebaseapp.com",
  projectId: "netflix-clone-f97ff",
  storageBucket: "netflix-clone-f97ff.firebasestorage.app",
  messagingSenderId: "738941826686",
  appId: "1:738941826686:web:96776d00f5346b59130a2f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc (collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
       });
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};