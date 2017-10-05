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
         .then( authdUser =>{
            resolve(authdUser)
         })
         .catch(error =>{
           reject(error)
         })
    } catch (error){
      reject(error)
    }

  })
}

export function signOutUser (){
   return new Promise ((resolve, reject) => {
     try{
       firebase.auth().signOut()
        .then( ()=>{
           console.log('signed out')
           resolve()
        })
        .catch( error =>{
          reject(error)
        })
     }catch(error){
       reject(error)
     }
   })
}

export function getSignedInUser(){
  return new Promise ((resolve, reject) => {
    try{
      firebase.auth().onAuthStateChanged(function(user) {
         console.log(user)
         if (user) {
            resolve(user)
         }
         else {
           reject(user)// No user is signed in.
         }
     });

    }catch(error){
      reject(error)
    }

  })
}
