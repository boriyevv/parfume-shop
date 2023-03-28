import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleAmount, removeProduct } from '../redux/product-slice'



const CartItem = (props) => {
    // console.log(props.count)
    const dispatch = useDispatch()
    const toggle = (type) => {
        dispatch(toggleAmount({ type, id: props.id }))
    }

    const removeProducts = ()=>{
        dispatch(removeProduct(props.id))
    }

    // console.log(products)

    return (
        <div key={props.id} className="block">
            <div className="cart-wrapper flex justify-between py-5 items-center ">
                <img src={props.img} className='w-40 h-40 ' alt="" />
                <p className='flex w-40 text-indigo-600'>{props.title}</p>
                <span className='p-2 border rounded-xl bg-indigo-600 text-white w-30'>In stock</span>
                <div className='flex'>
                    <span className=' border  border-indigo-600  text-indigo-600  p-3'>{props.count}</span>
                    <div>
                        <button onClick={() => toggle('add')} className='block border border-indigo-600 text-indigo-600 w-8'>+</button>
                        {props.count == 1 ? <button onClick={removeProducts} className='block border border-indigo-600  text-indigo-600 w-8'>-</button> : 
                        <button onClick={() => toggle('remove')} className='block border border-indigo-600  text-indigo-600 w-8'> -</button>}

                    </div>
                </div>
                <span className='text-indigo-600'>$ {props.price}</span>
                <span className='text-indigo-600'>$ {props.userPrice}</span>
                <button onClick={removeProducts} className='border rounded-2xl  bg-indigo-500 w-8 h-8'><i className="fa-solid fa-trash-can text-white "></i></button>
                <button onClick={removeProducts} className='border rounded-xl p-2 border-indigo-600 text-indigo-600'>Remove from cart</button>
            </div>
            <hr />
        </div>
    )
}

export default CartItem