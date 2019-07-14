import { firebaseAuth } from '../helpers/firebase';
// rBugq84jJcQP61hF49kq2uzDSAI2 hiromi0@protonmail.com
export const auth_talken = (email, pw) => 
    firebaseAuth().signInWithEmailAndPassword(email, pw).then(response => response.user.uid).catch((error) => {
        console.log(error)
    })