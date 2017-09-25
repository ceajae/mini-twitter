export default function updateUserProfile(){

  const stringUserProfile = JSON.stringify({
        ...this.props.formValues
  })


  const request = new XMLHttpRequest();

  request.open('POST', 'http://localhost:3030/users', true)
  request.addEventListener('load', ()=>{
      const response = request.responseText;
  })

  request.send(stringUserProfile)
}
