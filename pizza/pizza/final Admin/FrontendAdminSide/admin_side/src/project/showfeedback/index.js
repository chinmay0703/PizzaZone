import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from '../Home'

import {URL} from '../../config'


const Showfeedback = () => {
  const url = 'http://3.110.197.217:5000/feedback/feedbackList'
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setProducts(result['data'])
        //  var person = result['data'];

        // localStorage.setItem('person', JSON.stringify(person)); //stringify object and store
        // var retrievedPerson = JSON.parse(localStorage.getItem('person')); //retrieve the object
        // localStorage.removeItem("person")

      }
    })
  }
 


  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);

  return (
      <>
            <Home />
      
        <div className="outerdiv-emp-form">
          
          {products.map((product) => {
            return (
              <p>
                <p><strong>No :</strong> {product['feedbackId']}</p>
                <p><b>Name :</b> {product['FirstName']} {product['LastName']}</p>

                <p><strong>Phone No :</strong> {product['phoneNo']}</p>
                
                <p><strong>Email Id :</strong> {product['email']}</p>
                 <p><strong>feedback :</strong> {product['feedback']}</p>
                 
                <ColoredLine color="black" />
                </p>
               

            )
          })}
      </div>
     
   
    </>
  )
}

export default Showfeedback
