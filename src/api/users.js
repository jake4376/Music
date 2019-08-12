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

export const getPractise = (email) => {
    const query = db.ref('/users').orderByChild('profile/email').equalTo(email).once('value').then((snap) => {
        let output = {
            practice: [],
            playlist: [],
            practice_total: 0,
            playlist_total: 0,
        }
        console.log(snap.val())
        const result = Object.values(snap.val())[0];
        const practices = Object.keys(result.practices);
        const practice_data = Object.keys(result.practice_data);
        let practice_total = 0
        let playlist_total = practices.length
        practices.forEach(function (ele) {
            let val = result.practices[ele]
            let total = 0
            let this_month = 0
            let last_month = 0
            let today_total = 0
            let last_date = 0
            if (practice_data.indexOf(ele) !== -1) {
                const timevalue = Object.values(result.practice_data[ele])
                timevalue.forEach(function (eletime) {
                    const temp = Object.values(eletime)
                    temp.forEach(function (time) {
                        const dual = time['time']
                        const datestring = time['date']
                        const date = parseInt(datestring.slice(6, 8), 10)
                        const month = parseInt(datestring.slice(3, 5), 10)
                        const year = parseInt(datestring.slice(0, 2), 10)
                        const today = new Date()
                        const month_now = today.getMonth()
                        const date_now = today.getDate()
                        const year_now = today.getFullYear()%100
                        if ( year === year_now) {
                            if (month === (month_now + 1)) {
                                this_month += dual
                                if (date === date_now) {
                                    today_total += dual
                                } else if ( date === date_now - 1) {
                                    last_date += dual
                                }
                            } else if (month === month_now) {
                                last_month += dual
                            }
                        }
                        total += dual
                        practice_total += dual
                    })
                })
            }
            val.total = `${Math.round(total/60)}min`
            val.last_date = last_date
            val.today = today_total
            val.last_month = last_month
            val.this_month = this_month
            if (!!val.last_practiced) {
                const last = val.last_practiced
                const date = new Date(last*1000)
                const year = date.getFullYear()
                const month = date.getMonth()
                const datel = date.getDate()
                val.last_practiced = `${month}.${datel}.${year}`
            }
            output.practice.push(val)
        })
        const playlists = Object.keys(result.playlists)
        const playlist_data = Object.keys(result.playlist_data)
        playlists.forEach(function (ele) {
            let val = result.playlists[ele]
            let total = 0
            let this_month = 0
            let last_month = 0
            let today_total = 0
            let last_date = 0
            if (playlist_data.indexOf(ele) !== -1) {
                const timevalue = Object.values(result.playlist_data[ele])
                timevalue.forEach(function (eletime) {
                    const temp = Object.values(eletime)
                    temp.forEach(function (time) {
                        const dual = time['time']
                        const datestring = time['date']
                        const date = parseInt(datestring.slice(6, 8), 10)
                        const month = parseInt(datestring.slice(3, 5), 10)
                        const year = parseInt(datestring.slice(0, 2), 10)
                        const today = new Date()
                        const month_now = today.getMonth()
                        const date_now = today.getDate()
                        const year_now = today.getFullYear()
                        if ( year === year_now) {
                            if (month === (month_now + 1)) {
                                this_month += dual
                                if (date === date_now) {
                                    today_total += dual
                                } else if ( date === date_now - 1) {
                                    last_date += dual
                                }
                            } else if (month === month_now) {
                                last_month += dual
                            }
                        }
                        total += dual
                    })
                })
            }
            val.total = `${Math.round(total/60)}min`
            val.last_date = last_date
            val.today = today_total
            val.last_month = last_month
            val.this_month = this_month
            
            output.playlist.push(val)
        })
        output.practice_total = practice_total
        output.playlist_total = playlist_total
        return output
    }).catch((error => {
        console.log(error)
    }))
    return query
}