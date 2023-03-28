import React from 'react'
import { Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { nanoid } from '@reduxjs/toolkit'

const CartStyle = () => {

  const { products, count } = useSelector((state) => state.product)

  // console.log(count)




  return (
    <div className='bg-white '>
      <div className="cart m-10">
        <Typography variant='h3' >Your Cart Items</Typography>
        <hr className='m-5' />
      </div>
      <div className="wrapper">
        <div className='flex bg-indigo-600 p-4 justify-between'>
          {/* <div className='flex'> */}
          <Typography variant='h6' color={'white'}  >Product Image</Typography>
          <Typography variant='h6' color={'white'} >Product Name</Typography>
          <Typography variant='h6' color={'white'} >Stack Status</Typography>
          <Typography variant='h6' color={'white'} >Q-ty</Typography>
          <Typography variant='h6' color={'white'} >Price</Typography>
          <Typography variant='h6' color={'white'} >User Price</Typography>
          <Typography variant='h6' color={'white'} >Action</Typography>
          <Typography variant='h6' color={'white'} >Checkout</Typography>
          {/* </div> */}
        </div>

      {
        products?.map((el)=>(
          <CartItem key={nanoid()} {...el}/>
        ))
      }

        <div className="total w-1/3 bg-slate-100 py-5 px-10 m-10">
          <div className="flex justify-between my-5">
            <h2 className='text-indigo-600'>Product</h2>
            <h3 className='text-indigo-600'>Total</h3>
          </div>
          <div className="flex justify-between my-5">
            <h2 className='text-indigo-600'>Shipping</h2>
            <p className='text-indigo-600'>Free shipping</p>
          </div>
          <hr />
          <div className="flex justify-between my-5">
            <h2 className='text-indigo-600'>Total Price</h2>
            <h3 className='text-indigo-600'>$ 329</h3>
          </div>

        </div>

        <div className="flex w-1/3 gap-5 m-10">
          <button className='border rounded-xl py-2 px-5 border-indigo-600 text-indigo-600'>Update cart</button>
          <button className='border rounded-xl py-2 px-5 border-indigo-600 text-indigo-600'>Check out</button>
        </div>

      </div>
    </div>

  )
}

export default CartStyle