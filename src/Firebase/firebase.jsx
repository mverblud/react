import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(

    {
        apiKey: "AIzaSyAsbYzfEdOz6Ekf_q9nrb2ZOTGsWm0jcAY",
        authDomain: "coderhouse-ovsuspension.firebaseapp.com",
        projectId: "coderhouse-ovsuspension",
        storageBucket: "coderhouse-ovsuspension.appspot.com",
        messagingSenderId: "235190710134",
        appId: "1:235190710134:web:37b500583e97c913241457"
    }

);

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}