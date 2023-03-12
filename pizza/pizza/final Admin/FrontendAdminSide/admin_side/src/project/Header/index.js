import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate ,useHistory} from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header =() =>{

    //const history = useHistory();
    //const navigate = useNavigate()
    const Logout = () => {
     
        sessionStorage.clear()
        window.location = '/Signin';
    }

    

    return (
        <div>
            <div className="row shadow sticky-top" style={{ backgroundColor: "#fff" }} >
                <div className="col">
                   
                       
                   
                      <div className='text'><h1>Welcome to PizzaZone</h1></div>   <div style={{float: 'right'}}>
            <button onClick={Logout}>Logout</button>
        </div>

                </div>

                
                 

                </div>
            </div>
           
        
    )
}

export default Header;