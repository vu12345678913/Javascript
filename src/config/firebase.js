import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBO0fuOP_vcCd97935QJcWGTYsrpeQyrEw",
  authDomain: "chat-app-gs-503c2.firebaseapp.com",
  projectId: "chat-app-gs-503c2",
  storageBucket: "chat-app-gs-503c2.firebasestorage.app",
  messagingSenderId: "706644569294",
  appId: "1:706644569294:web:05d9fc37ab9360b4b5349f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup =async (username,email,password) => {
    try {
            const res = await createUserWithEmailAndPassword(auth,email,password);
            const user = res.user;
            await setDoc(doc(db,"users",user.uid),{
                id:user.uid,
                username:username.toLowerCase(),
                email,
                name:"",
                avatar:"",
                bio:"hey, im the using chat app",
                lastSeen:Date.now()
            })
            await setDoc(doc(db,"chats",user.uid),{
                chatData:[]
            })
    }catch (error) {
            console.error(error)
            toast.error(error.code)
    }

}

export {signup}