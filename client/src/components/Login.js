import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState([])
  //   const history = useHistory()

    

  //   function onSubmit(e){
  //       e.preventDefault()
  //       const user = {
  //           email,
  //           password
  //       }
       
  //       fetch(`/login`,{
  //         method:'POST',
  //         headers:{'Content-Type': 'application/json'},
  //         body:JSON.stringify(user)
  //       })
  //       .then(res => {
  //           if(res.ok){
  //               res.json().then(user => {
  //                   history.push(`/users/${user.id}`)
  //               })
  //           }else {
  //               res.json().then(json => setErrors(Object.entries(json.errors)))
  //           }
  //       })
       
  //   }


  return (

  
    <form >
    {/* <!-- Email input --> */}
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
{/*   
    <!-- Password input --> */}
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
    {/* <!-- 2 column grid layout for inline styling --> */}
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        {/* <!-- Checkbox --> */}
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div class="col">
        {/* <!-- Simple link --> */}
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    {/* <!-- Submit button --> */}
    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
{/*   
    <!-- Register buttons --> */}
    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
  )
}
export default Login;