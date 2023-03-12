
import axios from "axios";
import { useEffect, useState } from "react";
// import './index.css'
import { URL } from '../../config'
import { useNavigate, useLocation,Link } from "react-router-dom";
import { toast } from "react-toastify";
import Home from '../Home'

const Addtoppings = () => {
    const [toppingName,settoppingName] = useState("")
    const [price , setprice]= useState("0")
    
   
    const navigate=useNavigate()

    function saveTopping  ()  {
        if(toppingName==="")
        alert("Enter  topping name")
        else if(price==="")
        alert("Enter the price of the toppings")
        
       
        else{
            const body = {
                toppingName,
                price,
               
               }
            const url = `${URL}toppings/addTopping`
            
            
            // axios.post(url,body).then((response)=> {
            //     const result = response.data
            //     console.log(result.data)
            //     setTopping(result)
            //     console.log("topping is:"+topping.toppingId)
            //     navigate("/addtoppingimage", {state:topping})
            //     if(result['status']=='success'){
            //         toast.success('topping Added successfully')
            //     }else{
            //         toast.error(result['error'])
            //     }
            // })

            axios.post(url,body).then((response)=> {
              const result = response.data
              // console.log(result)
              if(result['status']=='success'){
                  const top=result.data;
                  toast.success('topping Added successfully')
                  // console.log(top.toppingId)
                  navigate ('/addtoppingimage',{state:{top}})
               
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
                <div className="mb-3">
                
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Topping Name</label>
                    <br />
                     <input type="text" value={toppingName} onChange={(e) => settoppingName(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter topping name" />
                </div> 

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Topping  Price</label>
                    <br />
                    <input type="text" value={price} onChange={(e) => setprice(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter topping price name" />
                </div>

              
                <button type="button" onClick={()=> {
                        saveTopping();
                        
                }} className="btn btn-sm btn-success">Add</button>
                   
            </div></>
    
    )

}
export default Addtoppings;