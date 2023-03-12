
import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'
import { URL } from '../../config'
import { useNavigate, useLocation,Link } from "react-router-dom";
import { toast } from "react-toastify";
import Home from '../Home'

const Addpizza = () => {
    const [type,settype] = useState("")
    const [itemName , setitemName]= useState("")
    const [description , setdescription]= useState("")
 
    

   
    const navigate=useNavigate()

    function savePizza  ()  {
        if(type==="")
        alert("Enter  type of pizza")
        else if(itemName==="")
        alert("Enter the pizza name")
        else if(description==="")
        alert("Enter pizza description")
       
        else{
            const body = {
                type,
                itemName,
                description,
               
                
            }
            const url = `${URL}item/addpizza`
            
            
            axios.post(url,body).then((response)=> {
                const result = response.data
                console.log(result)
                if(result['status']=='success'){
                    const pizza=result.data;
                    console.log("pizza in add pizza")
                    toast.success('pizza Added successfully')
                    console.log(result)
                    navigate ('/Addpizzasize',{state:{pizza}})
                 
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
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter pizza type</label>
                    <br />
                     <select className="form-select form-select-sm" onChange={(e) => settype(e.target.value)} aria-label="Default select example">
                    <option value={settype}>choose Type</option>
                        <option value='Veg'>Veg</option>
                        <option value='Nonveg'>NonVeg</option>
                        <option value='Beverages'>Beverages</option>
                    </select>
                     
                     {/* <input type="text" value={type} onChange={(e) => settype(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter pizza Type" /> */}
                </div> 

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter pizza name</label>
                    <br />
                    <input type="text" value={itemName} onChange={(e) => setitemName(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter pizza name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter pizza desription</label>
                    <br />
                    <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} className="form-control form-control-sm " id="exampleFormControlInput1" placeholder="Enter pizza desription" />
                </div>

               
                <button type="button" onClick={savePizza} className="btn btn-sm btn-success">Add</button>
                   
            </div></>
    )
}
export default Addpizza;