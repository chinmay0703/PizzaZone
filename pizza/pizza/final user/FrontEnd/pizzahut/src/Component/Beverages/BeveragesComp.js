import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import URL from '../../Pages/URL/Url'
import '../ItemComp/Item.css'

export default function BeveragesComp(props) {
    const { itemComp } = props
    // let id = itemComp.itemid
    const navigate = useNavigate()

    let string = `${URL}itemImage/item/${itemComp.itemid}`
    return (
        <div className='col-md-4 col-sm-6'>
            <div className="itembox  shadow">
                <div class="card">
                    <img src={string} class="card-img-top img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{itemComp.itemName}</h5>
                        <p className="card-text">{itemComp.type}</p>
                        <p className="card-text">{itemComp.description}...</p>
                        <a className="btn btn-primary"
                            onClick={() => {
                                navigate('/beverageSize', { state: { itemid: itemComp.itemid }})
                            }}
                        >View Details</a>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}


// description: "waah bete moj krdi"
// itemName: "mamaria"
// itemid: 1
// type: "veg"