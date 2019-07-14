import { db } from '../helpers/firebase';

export const getUsers = () => {
    const result = db.ref('/users/').once("value").then(function(snapshot) {
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