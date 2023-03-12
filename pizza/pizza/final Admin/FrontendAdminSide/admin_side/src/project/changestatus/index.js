import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../Home";

import { URL } from "../../config";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Changestatus = () => {

    const location = useLocation();
    const [deliveryId,setDeliveryId] = useState("");
    const deliveryid=location.state.deliveryid
    const [deliverystatus,setDeliverystatus] = useState("")
    
  const [product, setProducts] = useState();
  const navigate = useNavigate();

  // const getProducts = () => {
  //   // setDeliveryId(location.state.deliveryid)
    
  //   console.log("delivery id:"+ deliveryid)
  //   const url = `${URL}cart/deliveryid/${deliveryid}`
  //   axios.get(url).then((response) => {
  //     const result = response.data;
  //     console.log(result)
  //     if (result["status"] === "success") {
  //       setProducts(result["data"]);
  //       console.log("products"+product.data)
  //     }
  //     else{
  //       console.log("error")
  //     }
  //   });
  // }

  // useEffect(() => {

  //   getProducts();
  //   console.log(product)
    
  // },[]);

  // console.log("products outside"+ product);
  useEffect(() => {
    console.log("in useEffect")
    console.log(deliveryid)
    const url = `${URL}cart/deliveryid/${deliveryid}`;
  axios.get(url).then((response) => {
    const result = response.data;
    console.log(result);
    if (result["status"] === "success") {
      console.log(result.data)
      setProducts(result.data);
      console.log("products"+ product);
    } else {
      console.log("error");
    }
  });
  }, []);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
      }}
    />
  );
 

  function savePizza  ()  {
      if(deliverystatus==="")
      alert("Enter  type of pizza")
     
      else{
          const body = {
            deliverystatus
          }
          console.log(deliverystatus)
          const url = `${URL}DeliveryStatus/dStatus/${deliveryid}`
          // http://localhost:7070/DeliveryStatus/dStatus/1
          // http://localhost:7070/DeliveryStatus/dStatus/1
          axios.put(url,body).then((response)=> {
              const result = response.data
              console.log(result)
              if(result['status']=='success'){
                  toast.success('Status updated')
                  navigate ('/orderstatus')
               
              }else{
                  toast.error(result['error'])
              }
          })
        }
      }

  return (
    <>
      <Home />

      <div className="outerdiv-emp-form">
          <h1> Orders Details </h1>
          {/* {deliveryId} */}
          <hr/>
        {/* {products.map((product) => { */}
          {/* return ( */}
          {product?(
            <p >
              <div className="row">
                <div className="col">
                  <p>
                  <p><b>Pizza Type :</b> {product.itemsize.item.type}</p>  
                  <p><b>Pizza Name :</b>{product.itemsize.item.itemName}</p> 
                  <p><b>Pizza Size :</b> {product.itemsize.size}</p>  
                  <p><b>Current Delivery Status :</b> {product.deliveryId.deliveryStatus}</p>  
                  {/* <p>{product.toppings.toppingName}</p>  
                  <p>{product.toppings.price}</p>   */}
                  </p>
                 
                </div>
                <div className="col">
              
                </div>
            
                <div className='update'>
              
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Select Status</label>
                    <br />
                     <select className="form-select form-select-sm" onChange={(e) => setDeliverystatus(e.target.value)} aria-label="Default select example">
                    <option value={setDeliverystatus}>choose Status</option>
                        <option >Order preparing</option>
                        <option >Out for delivery</option>
                        <option >Delivered</option>
                    </select>
                     
                     {/* <input type="text" value={type} onChange={(e) => settype(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter pizza Type" /> */}
                </div>  
                <button type="button" onClick={savePizza} class="btn btn-sm btn-success">Update Status</button>
              </div>
              </div>

               
             
              
              <ColoredLine color="black" />
            </p>):(<h1>loading</h1>)}
          {/* );
         })}  */}
      </div>
    </>
  );
};

export default Changestatus;
