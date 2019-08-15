import { db, storage } from '../helpers/firebase';

export const setdata = (data) => {
  const stringData = JSON.stringify(data)
  const ID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
  const result = storage.ref().child(ID).putString(stringData).then(function(snapshot) {
    return snapshot.ref.getDownloadURL() 
  }).then((downloadURL) => {
    const req = {
      creator: data.metadata.creator,
      id: ID,
      name: data.metadata.name,
      url: downloadURL
    }
    const value = db.ref('/frameworks/'+ID).set(req).then(() => {
      console.log("success save data")
      return true
    }).catch((error) => {
      console.log(error)
      return false
    })
    return value
  }).catch((err) => {
    console.log(err)
    return false
  })
  return result
}

export const getdata = () => {
  const result = db.ref('/frameworks').once('value').then(function(snapshot) {
    let data = Object.values(snapshot.val())
    return data
  })
  return result
}

export const getonedata = (data) => {
  console.log(data)
}