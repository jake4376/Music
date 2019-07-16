import { db } from '../helpers/firebase';

export const getUsers = () => {
    const result = db.ref('/users/').orderByKey().limitToFirst(10).once("value").then(function(snapshot) {
        var results = []
        var keys = Object.keys(snapshot.val())
        keys.forEach(function(key){
            results.push(snapshot.val()[key].profile)
        })
        return results
    }).catch((error) => {
        console.log(error)
    })
    return result
}

export const getOneuser = (email) => {
    const query = db.ref('/users').orderByChild('profile/email').equalTo(email).once('value').then((snap) => {
        const result = []
        result.push(Object.values(snap.val())[0].profile)
        return result
    }).catch((error) => {
        console.log("errorrr")
    })
    return query
}

export const pageChange = (uid, oper) => {
    let results;
    if(oper === 'next') {
        results = db.ref('/users').orderByKey().startAt(uid).limitToFirst(5).once('value').then((snapshot) => {
            var result = []
            var keys = Object.keys(snapshot.val())
            keys.forEach(function(key){
                result.push(snapshot.val()[key].profile)
            })
            return result
        }).catch((error) => {
            console.log(error)
        })
    } else {
        results = db.ref('/users').orderByKey().endAt(uid).limitToFirst(5).once('value').then((snapshot) => {
            var result = []
            var keys = Object.keys(snapshot.val())
            keys.forEach(function(key){
                result.push(snapshot.val()[key].profile)
            })
            return result
        }).catch((error) => {
            console.log(error)
        })
    }
    return results
}