import React from 'react'
import car from '../assets/car.png.png'
import returns from '../assets/returns.png.png'
import person from '../assets/person.png.png'
import idCard from '../assets/idcard.png.png'
import Discount from '../assets/discount.jpg.png'
import Lipstick from '../assets/lipstick.png.png'
import Polish from '../assets/polish.jpg.png' 

const Properties = () => {
    return (
        <div className="wrapper">
            <div className='flex bg-indigo-800 p-8 justify-between'>
                <div className='flex'>
                    <img src={car} alt="car" />
                    <div className='ml-3'>
                        <h3 className='text-white'>Free Shipping</h3>
                        <p className='text-white'>On all orders over $75.00</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={returns} alt="car" />
                    <div className='ml-3'>
                        <h3 className='text-white'>Free Returns</h3>
                        <p className='text-white'>Returns are free within 9 days</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={person} alt="car" />
                    <div className='ml-3'>
                        <h3 className='text-white'>100% Payment Secure</h3>
                        <p className='text-white'>OYour payment are safe with us.</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={idCard} alt="car" />
                    <div className='ml-3'>
                        <h3 className='text-white'>Support 24/7</h3>
                        <p className='text-white'>Contact us 24 hours a day</p>
                    </div>
                </div>

            </div>
            <div className="img-wrapper flex justify-between mt-12 mb-12">
                <img src={Discount} alt="discount" className='w-2/4' />
                <img src={Lipstick} alt="discount" className='w-1/5' />
                <img src={Polish} alt="discount" className='w-1/5' />
            </div>
        </div>
    )
}

export default Properties