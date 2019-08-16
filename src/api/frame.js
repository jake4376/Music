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
      url: downloadURL,
      data: stringData
    }
    const value = db.ref('/frameworks/'+ID).set(req).then(() => {
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

export const update = (data) => {
  const value = storage.ref().child(data.present.metadata.id).delete().then(function() {
    const result = storage.ref().child(data.present.metadata.id).putString(data.string).then(function(snapshot) {
      return snapshot.ref.getDownloadURL()
    }).then(downloadUrl => {
      let req = {
        name: data.present.metadata.name,
        creator: data.present.metadata.creator,
        id: data.present.metadata.id,
        data: data.string,
        url: downloadUrl
      }
      var updates = {}
      updates[`${data.present.metadata.id}`] = req
      db.ref('/frameworks').update(updates)
      return true
    }).catch((error) => {
      console.log(error)
    })
    return result
  })
  return value
}
export const ondelete = (id) => {
  const result = storage.ref().child(id).delete().then(function() {
    const success = db.ref('/frameworks').child(id).remove().then(function() {
      return true
    })
    return success
  })
  return result
}