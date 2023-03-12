import React from 'react'
import { useNavigate } from 'react-router'
import {motion} from  'framer-motion'
import './Footer.css'
import facebook from '../../images/facebook.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import ios from '../../images/ios.svg'
import playstore from '../../images/playstore.png'
import fssai from '../../images/fssai.svg'


export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footer' style={{ overflowX: "hidden" }}><br />
      <div className="row linkRow">
        <div className="col">
          <table className='table-responsive'>
            <th><h5>About</h5></th>
            <tbody>
              <tr><a className='footerLink' onClick={()=>(navigate('/FAQs'))}>FAQ's</a></tr>
              <tr><a className='footerLink' onClick={()=>(navigate('/aboutUs'))}>About Us</a></tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table>
            <th><h5>Legal</h5></th>
            <tbody>
              <tr> <a className='footerLink' onClick={()=>(navigate('/Terms-and-condition'))}>Terms and Conditions</a></tr>
            </tbody>
          </table>
        </div><div className="col">
          <table>
            <th><h5>Social Media</h5></th>
            <tbody>
              <tr style={{display:'inline'}}>
             <span> <td> <a className='footerLink' href="https://www.facebook.com/" target="_blank">&nbsp;<img src={facebook} alt='Facebook'/></a></td></span>
             <span><td> <a className='footerLink' href="https://www.youtube.com/" target="_blank">&nbsp;<img src={youtube} alt='Facebook'/></a></td></span>
             <span><td> <a className='footerLink' href="https://www.instagram.com/" target="_blank">&nbsp;&nbsp;<img src={instagram} alt='Facebook'/></a></td></span>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div style={{marginLeft:"35%"}}>
       <a href='#' target="_blank" >
      <img src={ios} alt='ios' style={{height:"50px"}}/ >&nbsp;&nbsp;</a>
      <a href='#' target="_blank" >
      <img src={playstore} alt='Playstore' style={{height:"50px"}}/></a>
      
      </div>
      <br/>
      <div>
        <h6 className='feedbackRow'>Help us in serving you better <motion.button className='feedbackBtn'
          whileHover={{backgroundColor:"gray",color:"white"}}
          onClick={()=>(navigate('/Feedback'))}
        >Give Feedback</motion.button></h6>
      </div>
      <br />
      <div>
        <h6 className='info'>Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. *T&C Apply.</h6>
        <h6 className='info'>Hurry up and place your order now!</h6>
        <h6 className='info'>© 2022 Pizza Hut India. All rights reserved. License Number: 45781256894512</h6>
      </div>
      <br />
    <div style={{marginLeft:"45%",marginBottom:"2%"}}>
    <img src={fssai} alt='fssai'style={{height:"100px",backgroundColor:"white",borderRadius:"10px"}}/ >
    </div>
      {/* <br /> */}
    </div>

    
  )
}
