import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from '../Home'

import {URL} from '../../config'
import { useNavigate } from 'react-router-dom'


const Showtoppings = () => {
  const url = `${URL}toppings/showAll`
  const [topping, setToppings] = useState(null)

  const navigate=useNavigate()

  useEffect(() => {
  axios.get(url).then((response) => {
    const result = response.data
    if (result['status'] == 'success') {
      setToppings(result.data[0])
    }
  })
  }, [])

  
  function deletetopping(toppingId){
    const url =`${URL}/toppings/delete/${toppingId}`
    axios.delete(url).then((response)=>{
      window.location.reload(false);
  
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
console.log(topping)
  return (
      <>
            <Home />
      
        <div className="outerdiv-emp-form">
          
          {/* {products.map((product) => {
            return ( */}
            {topping?(
              <p>
                  <p><strong>Topping Name  :</strong> {topping['toppingName']}</p>
                 <p><strong>Topping Price :</strong> {topping['price']}</p>
                 
                <div className='update'>
              
              <button type="button" onClick={()=>(navigate('/edittoppings',{state:{toppingId:topping['toppingId']}}))} class="btn btn-sm btn-success">Update</button>   
              <button onClick={()=>deletetopping(topping['toppingId'])} class="btn btn-danger mx-3">delete</button>        
              {/* <button onClick={()=>deletesize(product['itemId'])} class="btn btn-danger mx-3">delete</button> */}
              </div>
  
                <ColoredLine color="black" />
                </p>
               
               ):(<h2>loading</h2>)}
            {/* )
          })} */}
      </div>
     
   
    </>
  )
}

export default Showtoppings
