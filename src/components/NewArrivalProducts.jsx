import React, { useEffect, useState } from 'react'
import { request } from '../config/request';
import { Button } from '@mui/material';
import OurProductItem from './OurProductItem';

const NewArrivalProducts = () => {
    const [state, setState] = useState(false)
    const [data, setData] = useState([])
    const [toggleData, setToggleData] = useState("arrivalProducts1")



    const toggleTab = (str) => {
        setToggleData(str)
        request.get(str).then((response) => {
            setData(response.data)
        })
    }

    useEffect(()=>{
        toggleTab("arrivalProducts1")
    },[])


    const toggleProduct = () => {
        setState(!state)
    }

    return (
        <div>

            <div>
                <h2 className='text-center text-4xl font-semibold mt-40'>New Arrival Products</h2>
                <div className="flex justify-center my-5" >
                    <hr className='w-20 h-1 bg-indigo-800 border '></hr>
                </div>
                <p className='text-center pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissamos Repullat</p>
                <div className="card-wrapper flex justify-between">
                    {
                        data.map((item) => <OurProductItem key={item.id} {...item} />)
                    }
                </div>

                <div className="flex justify-around mt-5">
                    <Button onClick={() => toggleTab("arrivalProducts1")} variant='inherit'><i className="fa-solid fa-arrow-left mr-2"></i> Prev</Button>

                    <div className="flex gap-4">
                        <button onClick={() => toggleTab("arrivalProducts1")} className={toggleData == "arrivalProducts1" ? "bg-slate-300 w-8 h-8 border border-neutral-900" : 'w-8 h-8 border border-neutral-900'}>1</button>
                        <button onClick={() => toggleTab("arrivalProducts2")} className={toggleData == "arrivalProducts2" ? "bg-slate-300 w-8 h-8 border border-neutral-900" : 'w-8 h-8 border border-neutral-900'}>2</button>
                    </div>

                    <Button onClick={() => toggleTab("arrivalProducts2")} variant='inherit'>Next <i className="fa-solid fa-arrow-right ml-2"></i></Button>
                </div>

            </div>

        </div>
    )
}

export default NewArrivalProducts