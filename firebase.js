import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC-5T4L29eEBeNKbvDcX7jWG8VKxQEwhMI",
    authDomain: "uber-eats-react-native-523eb.firebaseapp.com",
    projectId: "uber-eats-react-native-523eb",
    storageBucket: "uber-eats-react-native-523eb.appspot.com",
    messagingSenderId: "456069345214",
    appId: "1:456069345214:web:7552ea3c9f1eeb14cc93ef"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase