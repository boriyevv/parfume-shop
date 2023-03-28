import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWish} from '../redux/wishes-slice'



const WishItem = (props) => {
    const dispatch = useDispatch()



const removeWishes = () => {
    dispatch(removeWish(props.id))
}

    return (
        <div className="block mx-10">
            <div className="cart-wrapper flex justify-between p-5 items-center ">
                <img src={props.img} className='w-40 h-40 ' alt="" />
                <p className='flex w-40 text-indigo-600'>{props.title}</p>
                <span className='p-2 border rounded-xl bg-indigo-600 text-white w-30'>In stock</span>
                <span className='text-indigo-600'>$ {props.price}</span>
                <button onClick={removeWishes} className='border rounded-2xl bg-slate-100 w-8 h-8'><i className="fa-solid fa-heart text-red-600"></i></button>
                <button onClick={removeWishes} className='border rounded-xl p-2 border-indigo-600 text-indigo-600'>Remove from wishes</button>
            </div>
            <hr />
        </div>

    )
}

export default WishItem