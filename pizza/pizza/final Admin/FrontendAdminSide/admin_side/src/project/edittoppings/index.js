import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import { useLocation } from 'react-router'
import Home from '../Home'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Placeholder } from 'react-bootstrap'


const Edittoppings = () => {
    const {state} = useLocation()
    const {toppingId} = state
    
    const [products, setProducts] = useState([])

    const [toppingName,setToppingName]=useState('')
    const [price,setPrice]=useState('')

    const navigate=useNavigate()
    const location = useLocation();
  console.log(location);

    useEffect(() => {
  
        getProducts()
    },[])

    

      
  
    const save = () => {
        if (toppingName.length == 0) {
            toast.warning('please enter pizza type')
          } else if (price.length == 0) {
            toast.warning('please enter pizza name')
          }  else {
            const body = {
                toppingName,
                price,
             
            }

           
                
             
          const url =`${URL}/toppings/updateTopping/${toppingId}`
            axios.put(url,body).then((response) => {
                const result =response.data
                if(result['status']=='success'){
                    toast.success('successfully updated ')
                    navigate('/showtoppings')
                }else{
                    toast.error(result['error'])
                }
            })
        }
    }
  
    
      const getProducts = () => {
        const url=`${URL}/toppings/toppingListbyId/${toppingId}`
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
            setProducts(result['data'])
           
          }
        })
      }
    return (
        <><div>
          <Home />
        </div><div className='edit'>
            <h2 className="title"><b>Update Topping</b></h2>
            {products.map((product) => {
                    return (        
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Topping Name    :
                </label>
                <input
                  value={toppingName}
                  onChange={(e) => {
                    setToppingName(e.target.value)
                  } }
                  type="text"
                  className="form-control" placeholder= {product['toppingName']} />
              </div>
      
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Price :
                </label>
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value)
                  } }
                  type="text"
                  className="form-control" placeholder= {product['price']} />
              </div>
      
      
              <div className="mb-3">
                <button onClick={save} className="btn btn-success" >
                  update Topping
                </button>
                <Link to="/showtoppings" className="btn btn-danger float-end">
                  Cancel
                </Link>
            
    
               </div>
              </div>
            )
          })}             
            </div>
            </>
          
        )
      }

export default Edittoppings;
