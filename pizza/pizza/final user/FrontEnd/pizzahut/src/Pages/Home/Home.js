import { Dropdown } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../../images/colorLogo.png'
import deal1 from '../../images/deal1.jpg'
import deal2 from '../../images/deal2.jpg'
import Header from '../Header/Header'
import SignInModal from '../Modal/SignInModal/SignInModal'
import SignUpModal from '../Modal/SignUpModal/SignUpModal'
import './Home.css'

export default function Home() {

  const [UpModal, setsignUpModal] = useState(false)
  const openSignUp = () => setsignUpModal(true)
  const closeSignUp = () => setsignUpModal(false)

  const [InModal, setsignInModal] = useState(false)
  const openSignIn = () => setsignInModal(true)
  const closeSignIn = () => setsignInModal(false)

  const navigate = useNavigate()

  const loginstatus = sessionStorage.getItem("currentloginStatus")
  const chechLogin = () => {
    if (loginstatus != 1) {
      var drop = document.getElementById('dropdown-basic')
      drop.disabled = true
    }
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div >
        <div onLoad={chechLogin}>
          <div className="row shadow sticky-top"  >
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
              <div className="container-fluid">
                <a className="navbar-brand"><img src={logo} alt="" id='headerlogoProfile' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                  <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" onClick={() => (navigate('/pizza'))} id='headerBtn'>Pizzas</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => (navigate('/Vegpizza'))} id='headerBtn'>Veg pizzas</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => (navigate('/beverages'))} id='headerBtn'>Drinks</a>
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                  <div className=''>
                    <motion.button className='btn btn-primary SignButton'
                      whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      onClick={()=>(navigate('/signin'))}
                    >Sign In</motion.button>
                  </div>
                  <div className=''>
                    <motion.button className='btn btn-primary SignButton float-start'
                      whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      onClick={()=>(navigate('/signup'))}
                    >Sign up</motion.button>
                  </div>
                  
                </div>
              </div>
            </nav>
          </div >
        </div >
        <div className='flatter'>
          <div className="row">
            <div className="col">
              <div style={{ height: "200px" }}></div>
              <div className='' >
                <h1 className='text1'>Feeling hungry </h1>
                <h1 className='text1'>Order Pizza's</h1><br />
                <center>
                  <button className='orderButton'
                    // whileHover={{ scale: 1.03, backgroundColor: "yellow" }}
                    onClick={() => (navigate('/pizza'))}
                  >Order Here</button>
                </center>
              </div>
              <div style={{ height: "200px" }}></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='container'>
        <div className="row">
          <div className="col">
            <motion.img src={deal1} alt="" className='img-fluid'
              onClick={()=>(navigate('/pizza'))}
              whileHover={{ cursor: "pointer" }}
              style={{minWidth: "300px", marginBottom:"1%"}}
            />
          </div>
          <div className="col">
            <motion.img src={deal2} alt="" className='img-fluid'
              onClick={() => (InModal ? closeSignIn() : openSignIn())}
              whileHover={{ cursor: "pointer" }}
              style={{minWidth: "300px"}}
            />
          </div>
        </div>
      </div><br />
      <br />
      <br />
      <br />
    </div>
  )
}



{/* <div className="row HeaderRow">
  <div className="col">
    <img src={logo} alt="Logo" className='logo' />
  </div>
  <div className="col">
    <motion.button className='float-end SignButton'
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => (InModal ? closeSignIn() : openSignIn())}
    >Sign In</motion.button>
    {InModal && <SignInModal SignInModal={InModal} handclose={closeSignIn} />}

    <motion.button className='float-end SignButton'
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => (UpModal ? closeSignUp() : openSignUp())}
    >Signup</motion.button>
    {UpModal && <SignUpModal signUpModal={UpModal} handclose={closeSignUp} />}

    <motion.button className='float-end btn btn-link linkBtn'
      whileHover={{ scale: 1.03, color: "burlywood" }}
      whileTap={{ scale: 0.98, color: "burlywood" }}
      onClick={() => (navigate('/pizza'))}
    >Menu</motion.button>

    <motion.button className='float-end btn btn-link linkBtn'
      whileHover={{ scale: 1.03, color: "burlywood" }}
      whileTap={{ scale: 0.98, color: "burlywood" }}
      onClick={() => (navigate('/aboutUs'))}
    >About</motion.button>
  </div>
</div> */}