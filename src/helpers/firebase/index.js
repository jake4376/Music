import firebase from 'firebase'
import { firebaseConfig } from '../../config.js'

firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth
export const db = firebase.database()
export const storage = firebase.storage()


