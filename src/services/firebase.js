import firebase from '../configuration/firebase';


export function createUserAccount( email, password ) {
   return new Promise ((resolve, reject) => {
     try {
         firebase.auth().createUserWithEmailAndPassword(email, password)
           .then((user)=>{
                resolve(user)
            })
           .catch((error)=>{
               reject(error)
         })
     } catch (error) {
        reject(error)
     }
   })
}

export function signInUser (email, password) {
  return new Promise ((resolve, reject) => {
    try{
       firebase.auth().signInWithEmailAndPassword(email, password)
         .then( user =>{
            resolve(user)
         })
         .catch(error =>{
           reject(error)
         })
    } catch (error){
      reject(error)
    }

  })
}
