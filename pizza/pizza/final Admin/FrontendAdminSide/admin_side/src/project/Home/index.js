import { useNavigate } from 'react-router'
import Header from '../Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Home = () => {
    
return(
    
    <>
    <div>
  <Header />
</div>
    <div className=" text-white bg-dark div-1">
      
      <div className="navbar">
      

        <hr />
        { sessionStorage.getItem("role")==="admin"?
         <ul className="nav nav-pills flex-column mb-auto">
       </ul>
       : //conditional ? operator
       <ul className="nav nav-pills flex-column mb-auto">
        
           {/* <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/get-emp-live">Order</Link>
         </li> */}
          <li className="list-group-item list-group-item-danger">
           <Link className="nav-link text-black" to ="/Addpizza">Add New Items</Link>
         </li>
         <br />
         <li className="list-group-item list-group-item-primary">
           <Link className="nav-link text-black" to ="/Addtoppings">Add new Topings</Link>
         </li>
         <br />
         <li className="list-group-item list-group-item-danger">
           <Link className="nav-link text-black" to ="/orderstatus">Change order status</Link>
         </li>
         <br />
         <li className="list-group-item list-group-item-primary">
           <Link className="nav-link text-black" to ="/showallpizza">Show Pizzas</Link>
         </li>
         <br />
         <li className="list-group-item list-group-item-danger">
           <Link className="nav-link text-black" to ="/Showtoppings">Show Toppings</Link>
         </li>
         <br />
         <li className="list-group-item list-group-item-primary">
           <Link className="nav-link text-black" to ="/viewprofile">View Profile</Link>
         </li>
         <br />
         <li className="list-group-item list-group-item-danger">
           <Link className="nav-link text-black" to ="/showfeedback">Show All Feedback</Link>
         </li>
   
       </ul>
}
      </div>
      </div>
    </>
)
}
export default Home