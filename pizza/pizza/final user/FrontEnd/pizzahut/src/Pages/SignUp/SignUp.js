import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import logo from '../../images/colorLogo.png'
import signupImg from '../../images/SignUpimg.jpg'
import URL from '../URL/Url'
import '../Signin/Sign.css'

export default function Signup() {
    const scroolUp = () => {
        window.scrollTo(0, 0)
    }

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNo, setphoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [role, setrole] = useState('User')

    const SignUp = () => {
        if (password != ConfirmPassword) {
            toast.error("Please confirm password")
        } else {
            const body = {
                firstName, lastName, email, phoneNo, password, role
            }
            const url = `${URL}user/signup`
            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result);
                if (result.status == "success") {
                    toast.success("Registered Successfully")
                    navigate('/signin')
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }
    return (
        <motion.div style={{ overflowX: "hidden" }} onLoad={scroolUp} className='fixedcontent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="row shadow sticky-top"  >
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "darkslateblue" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand"><img src={logo} alt="" id='headerlogoProfile' onClick={() => (navigate('/'))} style={{cursor:"pointer"}}/></a>
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
                                    style={{ backgroundColor: "cornsilk", color: "black" }}
                                    whileHover={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
                                    whileTap={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
                                    onClick={() => (navigate('/signin'))}
                                >Sign In</motion.button>
                            </div>
                            <div className=''>
                                <motion.button className='btn btn-primary SignButton float-start'
                                    style={{ backgroundColor: "cornsilk", color: "black" }}
                                    whileHover={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
                                    whileTap={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
                                    onClick={() => (navigate('/signup'))}
                                >Sign up</motion.button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div >
            <br />
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container' style={{ backgroundColor: "white", minHeight: "500px" }}>
                    <br />
                    <center><h3>Your Pizza is ready🍕</h3></center> <hr />
                    <div className='row'>
                        <div className="col">
                            <center><img src={signupImg} alt="" style={{ marginTop: "4%" }} /></center>
                        </div>
                        <div className="col" style={{ padding: "1rem" }}>
                            <center><h3>Sign Up now!!!</h3></center>
                            <div className="form">
                                <form action="JavaScript:SignUpasd()">
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="label-control">First Name</label>
                                                <input onChange={e => (
                                                    setFirstName(e.target.value)
                                                )}
                                                    required="true" type="text" className="form-control shadow" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="label-control">Last Name</label>
                                                <input onChange={e => (
                                                    setLastName(e.target.value)
                                                )}
                                                    required="true" type="text" className="form-control shadow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control">Email</label>
                                        <input onChange={e => (
                                            setemail(e.target.value)
                                        )}
                                            required="true" type="email" className="form-control shadow" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control ">Phone Number   (excluding postal code)</label>
                                        <input onChange={e => (
                                            setphoneNumber(e.target.value)
                                        )}
                                            maxLength="10" minLength="10"
                                            required="true" type="tel" className="form-control shadow" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control">Password</label>
                                        <input onChange={e => (
                                            setPassword(e.target.value)
                                        )}
                                            minLength="5" maxLength="10"
                                            required="true" type="password" className="form-control shadow" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control">Confirm Password</label>
                                        <input onChange={e => (
                                            setConfirmPassword(e.target.value)
                                        )}
                                            minLength="5" maxLength="10"
                                            required="true" type="password" className="form-control shadow" />
                                    </div>
                                    <div>
                                        <h6 style={{ color: "grey" }}>All Rights reserved with @PizzaTech</h6>
                                    </div>
                                    <div className="col">
                                        <motion.button className='float-end UpBtn'
                                            whileHover={{ backgroundColor: "rgb(7, 84, 133)", color: "white" }}
                                            onClick={SignUp}
                                        >Submit</motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </motion.div>
    )
}
