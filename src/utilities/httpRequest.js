export default function httpRequest(method, url, stringValues){
  return new Promise ((resolve, reject) => {
    // try{
        const request = new XMLHttpRequest();

        request.open(method, url, true);
        request.addEventListener('load', ()=>{
            const response = request.responseText;
            resolve(response);
        })
        request.send(stringValues);
    // } catch(error){
    //   reject(error)
    // }

  })

}
