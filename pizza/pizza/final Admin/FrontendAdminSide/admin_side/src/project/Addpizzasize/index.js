
import axios from "axios";
import React, { useEffect, useState } from "react";
import './index.css'
import { URL } from '../../config'
import { useNavigate, useLocation,Link } from "react-router-dom";
import { toast } from "react-toastify";
import Home from '../Home'
// import Pizzaimage from '../pizzaimage'

const Addpizzasize = () => {

  

    const [itemId , setItemId]= useState("")
    const [size , setsize]= useState("")
    const [price , setprice]= useState("0.0")
    const location = useLocation()
    
    const [pizza, setPizza] = useState([])
 
    const navigate=useNavigate()
       
    useEffect(() => {
        if (location.state && location.state.pizza) {
            setPizza(location.state.pizza)
            setItemId(location.state.pizza['itemid'])
        }
      }, [])
      console.log("item id:" + itemId)
      console.log(pizza)


    //   const getProducts = () => {
    //     axios.get(url).then((response) => {
    //       const result = response.data
    //       if (result['status'] == 'success') {
    //         setProducts(result['data'])
    //         const { itemId  } = result['data']
            
    //           }
    //     })
    //   }
      const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    );

  
    const drinkCheck=()=>{
        if(pizza.type=='Beverages'){
            console.log("beverages madhe")
            return <>
                <option value="200ml">200ml</option>
                        <option value="500ml">500ml</option>
                        <option value="750ml">750ml</option>
            </>
        }
    }
      
    function addpizzasize ()  {
         if(itemId==="")
        alert("Enter itemid")
        else if(size==="")
        alert("Enter pizza size")
        else if(price==="")
        alert("Enter pizza price")
        else{
            const body = {
                itemId,
                size,
                price,
                
            }
           
           
            const url=`${URL}itemSize/addItemSize`

            axios.post(url,body).then((response)=> {
                const result = response.data
                console.log(result)
                if(result['status']=='success'){
                    toast.success('pizza size and price Added successfully')
                    setsize("")
                    setprice("0.0")
                    navigate ('/Addpizzasize')
                   // reload()
                }else{
                    toast.error(result['error'])
                }
            })
   
           
            
        }
    }
    
     
   
 
    return(
        <>
        <Home />
        <div className="outerdiv-emp-form">
              
                <p>enter the size details for : {pizza['itemName']}</p>
                
                
                <ColoredLine color="black" />
              
          
                <div className="mb-3">
                    <br />
                     </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter pizza size</label>
                    <br />
                    <select className="form-select form-select-sm" onChange={(e) => setsize(e.target.value)} aria-label="Default select example">
                    <option value={setsize}>choose Size</option>
                        <option value="Small">Small</option>
                        <option value="Regular">Regular</option>
                        <option value="Large">Large</option>
                        <option value="200ml">200ml</option>
                        <option value="500ml">500ml</option>
                        <option value="750ml">750ml</option>
                        {drinkCheck}
                    </select> 
                    {/* <input type="text" value={size} onChange={(e) => setsize(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter pizza size" /> */}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter pizza price</label>
                    <br />
                    <input type="number" value={price} onChange={(e) => setprice(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter pizza price" />
                </div>
                 {/* <h5><b>Add Pizza Image</b></h5>
                <Pizzaimage />
                <br />  */}
                <button type="button" onClick={addpizzasize} className="btn btn-sm btn-success">Add</button>
                <button  onClick={()=>(navigate('/pizzaimage',{state:pizza}))} className="btn btn-primary mx-3 ">Add Image</button> 
                
               
            </div>
        
            </>
    
    )

}
export default Addpizzasize;