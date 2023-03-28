import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import { addProduct, removeProduct } from '../redux/product-slice';
import { useDispatch } from 'react-redux';
import { loadState } from '../utils/storage';
import { addWish, removeWish } from '../redux/wishes-slice';


const OurProductItem = (props) => {

    const [state, setState] = useState(false)
    const [state1, setState1] = useState(false)
    const dispatch = useDispatch()


    const toggleProduct = () => {
        setState(!state)
        if(!state){
            dispatch(addProduct(props))
        }
        else if(state){
            dispatch(removeProduct(props.id))
        } 
    }

    const toggleWish = () => {
        setState1(!state1)
        if(!state1){
            dispatch(addWish(props))
        }
        else if(state1){
            dispatch(removeWish(props.id))
        } 
    }



    return (
        <div className="relative">
            <div key={props.id}>
                <Card sx={{ maxWidth: 305, height: 460 }} >
                    <CardMedia
                        sx={{ width: 305, height: 300 }}
                        image={props.img}
                    // title="green iguana"
                    />
                    <CardContent> 
                        <Typography gutterBottom variant="h6" component="div" sx={{ maxWidth: 300 }}>
                            {props.title}
                        </Typography>
                    </CardContent>

                    <div className="flex justify-between align-middle px-5">
                        <p className='m-0 p-0 font-bold'>$ {props.price}</p>

                        {state ? <button onClick={toggleProduct} className=' border rounded-2xl  bg-slate-300 w-8 h-8'><i className="fa-solid fa-trash-can text-red-600"></i></button>
                            : <button onClick={toggleProduct} className=' border rounded-2xl  bg-slate-300 w-8 h-8'><i className="fa-solid fa-plus text-black"></i></button>}
                    </div>

                </Card>
            </div>
            {state1 ? <button onClick={toggleWish} className='absolute top-1 right-3 '><i className=" absolute top-0 right-1 fa-solid fa-heart ml-8 text-2xl text-red-600"></i></button> :
                <button onClick={toggleWish}  className='absolute top-1 right-3 '><i className=" absolute top-0 right-1 fa-regular fa-heart ml-8 text-2xl  text-red-600"></i></button>
            }
        </div>


    )
    // " absolute top-0 right-1 fa-regular fa-heart ml-8 text-2xl text-red-600 "
        }

    export default OurProductItem