import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make signin api call
      const url = `${URL}admin/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')
          const { userId , firstName, lastName ,email,phoneNo } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['userId'] = userId 
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['email'] = email
          sessionStorage['phoneNo'] = phoneNo
          sessionStorage['loginStatus'] = 1
          navigate('/home')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className="row">
        <div className="col"></div>
        <div className="col">
   
                
 
       
         <div className=" formdiv">
        <h2>Admin Login</h2>
        <input onChange={(e) => { setEmail(e.target.value) }}  placeholder="Enter Email" type="text" name="email" />
           <br/><br/>
            <input onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" type="password" name="password"  />
            <br/><br/>
         
            <button onClick={signinUser} className="btn btn-md btn-primary" type="submit"> Login</button>
          <br />
           
        
        </div>
        </div>
    <div className="col"></div>
    </div>
      
   
  )
}

export default Signin
