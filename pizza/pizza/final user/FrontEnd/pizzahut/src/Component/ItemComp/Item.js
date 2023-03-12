


import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
// import URL from '../../Pages/URL/Url'
import './Item.css'

export default function Item(props) {
    const { itemComp } = props
    // let id = itemComp.itemid
    const navigate = useNavigate()
    const [imageUrl, setImageUrl] = useState(null);
    // let string = `${URL}itemImage/item/${itemComp.itemid}`

    useEffect(() => {
        const itemId = itemComp.itemid;
        fetch(`http://localhost:7070/itemImage/getpizzathumbnail/${itemId}`)
          .then(response => response.arrayBuffer())
          .then(buffer => {
            const blob = new Blob([buffer], {type: 'image/jpeg'});
            const imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
          });
      }, [itemComp.itemid]);

    return (
        <div className='col-md-4 col-sm-6'>
            <div className="itembox shadow">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="Item Image" style={{minHeight:"300px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{itemComp.itemName}</h5>
                        <p className="card-text">{itemComp.type}</p>
                        <p className="card-text">{itemComp.description}...</p>
                        <a className="btn btn-primary"
                            onClick={() => {
                                navigate('/itemSize', { state: { itemid: itemComp.itemid } })
                            }}
                        >View Details</a>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}