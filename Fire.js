import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default function Fire() {
    const firebaseConfig = {
        apiKey: "AIzaSyBfC_3mHLh6DgtO_gbP9aURB7ZUw1XjkoI",
        authDomain: "todoapp-b4723.firebaseapp.com",
        projectId: "todoapp-b4723",
        storageBucket: "todoapp-b4723.appspot.com",
        messagingSenderId: "858276898462",
        appId: "1:858276898462:web:a1d1f3120a83e28c6e7d8f",
        measurementId: "G-2VQ3GZYC9C"
    };

// init firebase app
    initializeApp(firebaseConfig)

// init services
    const db = getFirestore()

//collection ref
    const colRef = collection(db, 'users')

//get collection data
    getDocs(colRef)
        .then((snapshot) => {
            let users = []
            snapshot.docs.forEach((doc) => {
                users.push({...doc.data(), id: doc.id  })
            })
            console.log(users)
        })
        .catch(err => {
            console.log(err.message)
        })
}



/*
class Fire {
    lists;
    constructor(callback) {
        this.init(callback)
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if( user) {
                callback(null, user)
            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error)
                    })
            }
        })
    }

    getLists(callback) {
        let ref = firebase
            .firestore()
            .collection('users')
            .doc(this.userId)
            .collection('lists')

        this.unsubscribe = ref.onSnapshot(snapshot => {
            this.lists = []

            snapshot.forEach(doc => {
                this.lists.push({id: doc.id, ...doc.data()})
            })

            callback(this.lists)
        })
    }

    get userId() {
        return firebase.auth().currentUser.uid
    }
}

export default Fire
*/
