import React, { useEffect, useState } from 'react'
import { request } from '../config/request';
import { store } from '../redux/store';
import {saveState} from '../utils/storage'

// pictures

import Balzam from '../assets/balzam.jpg.png'
import Ten from '../assets/ten.jpg.png'
import MackUp from '../assets/mackup.jpg.png'
import OurProductItem from './OurProductItem';



store.subscribe(()=>{
    saveState('wishProduct', store.getState().wishProduct)
})
store.subscribe(()=>{
    saveState('product', store.getState().product)
})




const OurProducts = () => {

    const [toggleData, setToggleData] = useState("newProduct")
    const [data, setData] = useState([])
    
    const toggleTab = (str) => {
        setToggleData(str)
        request.get(str).then((response) => {
            setData(response.data)
        })
    }
useEffect(()=>{
    toggleTab("newProducts")
},[])

    return (
        <div>

            <div>
                <h2 className='text-center text-4xl font-semibold mt-40'>Our Products</h2>
                <div className="flex justify-center my-5" >
                    <hr className='w-20 h-1 bg-indigo-800 border '></hr>
                </div>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
                <div className="tab-wrapper flex justify-evenly my-10">
                    <button onClick={() => toggleTab("newProducts")}  className={toggleData == "newProducts" ? "text-indigo-800" : ""}>New Products</button>
                    <button onClick={() => toggleTab("onsale")}  className={toggleData == "onsale" ? "text-indigo-800" : ""}>On Sale</button>
                    <button onClick={() => toggleTab("upcoming")} className={toggleData == "upcoming" ? "text-indigo-800" : ""}>Upcoming</button>
                </div>
                <div className="card-wrapper flex justify-between">
                    {
                        data.map((item) => <OurProductItem key={item.id} {...item}/> )
                    }
                </div>
            </div>
            <div className="img-wrapper flex justify-between mt-12 mb-12">
                <img src={Ten} alt="discount" className='w-1/5' />
                <img src={Balzam} alt="discount" className='w-1/5' />
                <img src={MackUp} alt="discount" className='w-2/4' />
            </div>

        </div>
    )
}

export default OurProducts