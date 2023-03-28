import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png.png'
import Home from '../pages/Home'
import cards from '../assets/cards.png.png'


const Footer = () => {
    return (
        <>
            <div className="div bg-slate-200 pt-20 pb-20">
                <Container maxWidth='xl'>
                    <div className="footer-wrap flex justify-between">
                        <div className="footer-left w-1/4">
                            <img src={logo} />
                            <p className='my-6 text-gray-500'>We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.</p>
                            <div className="icon-wrapper flex pt-5">
                                <Link><i className="fa-brands fa-square-facebook bg-slate-200 text-black text-2xl ml-5"></i></Link>
                                <Link><i className="fa-brands fa-square-twitter bg-slate-200 text-black text-2xl ml-5"></i></Link>
                                <Link><i className="fa-brands fa-square-youtube bg-slate-200 text-black text-2xl ml-5"></i></Link>
                                <Link><i className="fa-brands fa-square-instagram bg-slate-200 text-black text-2xl ml-5"></i></Link>
                            </div>
                        </div>
                        <div className="information w-1/6 relative">
                            <h3 className='text-2xl'>Information</h3>
                            <hr className='my-4 block w-5/6 h-1 bg-slate-300' />
                            <span className='absolute w-1/3 h-1 bg-indigo-800 top-12'></span>
                            <p className='text-gray-500 py-1'>About us</p>
                            <p className='text-gray-500 py-1'>Payment</p>
                            <p className='text-gray-500 py-1'>Contact us</p>
                            <p className='text-gray-500 py-1'>Stores us</p>
                        </div>
                        <div className="social-links w-1/6 relative">
                            <h3 className='text-2xl'>Social Links</h3>
                            <hr className='my-4 block w-5/6 h-1 bg-slate-300' />
                            <span className='absolute w-1/3 h-1 bg-indigo-800 top-12'></span>
                            <p className='text-gray-500 py-1'>New products </p>
                            <p className='text-gray-500 py-1'>Best sales</p>
                            <p className='text-gray-500 py-1'>Login</p>
                            <p className='text-gray-500 py-1'>My account</p>
                        </div>
                        <div className="footer-left w-1/4 relative">
                            <h3 className='text-2xl'>Newsletter</h3>
                            <hr className='my-4 block w-5/6 h-1 bg-slate-300' />
                            <span className='absolute w-1/3 h-1 bg-indigo-800 top-12'></span>
                            <p className='text-gray-500'>Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.</p>
                            <div className="form pt-5">
                                <input type="text" className='signInInp p-2' placeholder='Your email' />
                                <button className='signInBtn bg-indigo-800 p-2 text-white'>Sign in</button>
                            </div>
                        </div>



                    </div >
                </Container>
            </div>
            <div className="footer-bottom bg-black py-4">
                <Container maxWidth='xl'>
                    <div className="footer-bottom-wrap flex justify-between">
                        <div className='flex'> <p className='text-white mx-2'>Copyright (c)</p>
                            <Link to={Home} className='text-indigo-800 mx-2'>HasThemes</Link>
                            <p className='text-white mx-2'>All Rights Reserved</p></div>
                        <img src={cards} alt="" />
                    </div>

                </Container>
            </div>
        </>
    )
}
export default Footer