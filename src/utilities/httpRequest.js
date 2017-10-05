export default function httpRequest(method, url, stringValues){
  console.log(stringValues)
  return new Promise ((resolve, reject) => {
    // try{
        const request = new XMLHttpRequest();

        request.open(method, url, true);
        request.addEventListener('load', ()=>{
            const response = request.responseText;
            resolve(response);
        })
        console.log(stringValues)
        request.send(stringValues);
    // } catch(error){
    //   reject(error)
    // }

  })

}
