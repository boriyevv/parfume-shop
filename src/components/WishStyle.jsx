import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import WishItem from './WishItem'
import { nanoid } from '@reduxjs/toolkit'

const WishStyle = () => {

    const { wishes } = useSelector((state1) => state1.wishProduct)

    return (
        <div className='bg-white '>
            <div className="cart m-10">
                <Typography variant='h3' >Your Wish Items</Typography>
                <hr className='m-5' />
            </div>
            <div className="wrapper">
                <div className='flex bg-indigo-600 py-4 px-20 justify-between'>
                    {/* <div className='flex'> */}
                    <Typography variant='h6' color={'white'}  >Product Image</Typography>
                    <Typography variant='h6' color={'white'} >Product Name</Typography>
                    <Typography variant='h6' color={'white'} >Stack Status</Typography>
                    <Typography variant='h6' color={'white'} >Price</Typography>
                    <Typography variant='h6' color={'white'} >Action</Typography>
                    <Typography variant='h6' color={'white'} >Checkout</Typography>
                    {/* </div> */}
                </div>

                {
                    wishes?.map((el) => (
                        <WishItem key={nanoid()} {...el} />
                    ))
                }


            </div>
        </div>

    )
}

export default WishStyle