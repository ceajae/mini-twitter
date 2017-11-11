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

export function updateUser(userId, name, value){
  return new Promise  ((resolve, reject) =>{
      try{
          firebase.auth().updateUser(userId, {
               name: value
          })

      }catch(error){
        reject(error)
      }
  })
}

export function fileUpload(file,fileName){
  return new Promise((resolve, reject) =>{
        const storageRef = firebase.storage().ref()
        var uploadTask = storageRef.child('images/' + fileName).put(file);
      //  this._handleSavePhotoUrl(fileName);
        uploadTask.on('state_changed',
           (snapshot)=> {
               var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done' );
              //  this.setState({percent: progress})
               switch (snapshot.state){
                 case 'paused':
                    console.log('Upload is paused');
                    break;
                 case 'running':
                    console.log('Upload is running');
                    break;
                }
               if(progress == 100){
                  resolve(fileName);
               }
         }
        // function(error) {
        //    switch (error.code) {
        //       case 'storage/unauthorized' :
        //         console.log('not permitted')
        //         break;
        //       case 'storage/canceled':
        //         console.log('cancelled upload')
        //         break;
        //      case 'storage/unknown':
        //         console.log('unknown')
        //         break;
        //    }
        // },
        //  function(){
        //    var downloadURL = uploadTask.snapshot.downloadURL;
        //  })

      )
}
)}

export function downloadPhotoUrl(fileName){
  return new Promise ((resolve, reject) =>{
      console.log('happppy!!')
      const storageRef = firebase.storage().ref();
      storageRef.child('images/'+ fileName ).getDownloadURL()
        .then( url =>{
           console.log(url)
           resolve(url)
        })
        .catch(error =>{
          reject(error)
        })
  })
}


export function resetPassword(email){
  return new Promise ((resolve, reject)=> {

    firebase.auth().sendPasswordResetEmail(email)
        .then(()=> {
           console.log('email sent')
           resolve()
        })
        .catch((error)=> {
           console.log(error)
           reject(error)
        });
  })
}
