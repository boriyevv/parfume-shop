import { Container, Badge } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png.png'
import usFlag from '../assets/us-flag.jpg.svg'
// import CartItem from './CartItem'


const Header = () => {

    const {badgeCount} = useSelector((state) => state.product)
    const { wishCount } = useSelector((state1) => state1.wishProduct)

    console.log(badgeCount)


    return (<>
        <div className="header bg-black">
            <Container maxWidth="xl">
                <div className="header-wrap flex justify-between">
                    <div className="header-left py-3">
                        <Link><i className="fa-brands fa-square-facebook text-white bg-black text-2xl ml-5"></i></Link>
                        <Link><i className="fa-brands fa-square-twitter text-white bg-black text-2xl ml-5"></i></Link>
                        <Link><i className="fa-brands fa-square-youtube text-white bg-black text-2xl ml-5"></i></Link>
                        <Link><i className="fa-brands fa-square-instagram text-white bg-black text-2xl ml-5"></i></Link>
                        <Link to={"tel:904435567"} className="ml-12 text-white"><i className="fa-solid fa-phone text-white"></i>  (+998)90-443-55-67</Link>
                    </div>
                    <div className="header-right py-3 mt-1 ">
                        <Link className='text-white ml-5'>Setting</Link>
                        <Link className='text-white ml-5'>USD $</Link>
                        <Link className='text-white ml-5'> <img src={usFlag} className="inline" /> English</Link>
                    </div>

                </div>
            </Container>
        </div>
        <div className="navbar mt-5">
            <Container maxWidth="xl">
                <div className="nav-wrap flex justify-between">
                    <Link><img src={logo} /></Link>
                    <div className="nav-menu flex">
                        <NavLink to='/' className={({ isActive }) => { return ('text-2xl ml-8' + (isActive ? " text-indigo-800" : ' ')) }}>Home</NavLink>
                        <NavLink to='/shop' className={({ isActive }) => { return ('text-2xl ml-8' + (isActive ? " text-indigo-800" : ' ')) }}>Shop</NavLink>
                        <NavLink to='/wishes' className={({ isActive }) => { return ('text-2xl ml-8' + (isActive ? " text-indigo-800" : ' ')) }}>Wishes</NavLink>
                        <NavLink to='/cart' className={({ isActive }) => { return ('text-2xl ml-8' + (isActive ? " text-indigo-800" : ' ')) }}>Cart</NavLink>
                        <NavLink to='/admin' className={({ isActive }) => { return ('text-2xl ml-8' + (isActive ? " text-indigo-800" : ' ')) }}>Admin Panel</NavLink>
                    </div>
                    <div className="nav-right">
                        <Link><i className="fa-solid fa-magnifying-glass ml-8 text-2xl"></i></Link>

                        <Badge badgeContent={1} color='error'>
                            <Link><i className="fa-solid fa-arrows-rotate ml-8 text-2xl"></i></Link>
                        </Badge>
                        <Badge badgeContent={wishCount} color='error'>
                            <Link to={'/wishes'}><i className="fa-regular fa-heart ml-8 text-2xl"></i></Link>
                        </Badge>
                        <Badge badgeContent={badgeCount} color='error'>
                            <Link to={'/cart'}><i className="fa-solid fa-briefcase ml-8 text-2xl"></i></Link>
                        </Badge>

                    </div>
                </div>

            </Container>
        </div>
    </>

    )
}

export default Header