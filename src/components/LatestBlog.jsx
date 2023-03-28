import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// pictures

import Shampun from '../assets/shampun.png.png'
import Tush from '../assets/tush.png.png'
import Lak from '../assets/lak.png.png'
import Balzam1 from "../assets/balzam1.png.png"
import Shutka from '../assets/shutka.png.png'

import Jpg1 from '../assets/1.jpg.png'
import Jpg2 from '../assets/2.jpg.png'
import Jpg3 from '../assets/3.jpg.png'
import Jpg4 from '../assets/4.jpg.png'
import Jpg5 from '../assets/5.jpg.png'
// import Jpg6 from '../assets/'

const LatestBlog = () => {
    return (
        <div>

            <div className='p-8'>
                <h2 className='text-center text-4xl font-semibold mt-40'>From Our Latest Blog</h2>
                <div className="flex justify-center my-5" >
                    <hr className='w-20 h-1 bg-indigo-800 border '></hr>
                </div>
                <p className='text-center pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissamos Repullat</p>
                <div className="card-wrapper flex justify-between mb-14">
                    <Card sx={{ maxWidth: 305, height: 460 }}>
                        <CardMedia
                            sx={{ maxWidth: 300, height: 300 }}
                            image={Tush}
                            title="green iguana"
                        />
                        <CardContent>
                            <h6 className='text-indigo-700'>Fashion</h6>
                            <Typography gutterBottom variant="h6" component="div" sx={{ maxWidth: 300 }}>
                                This is first Post For Blog
                            </Typography>
                            <p className='m-0 p-0 font-light'>Posted By: <Link className='text-indigo-700' to='/'>HasTech</Link> 12TH Nov 2023</p>
                        </CardContent>


                    </Card>
                    <Card sx={{ maxWidth: 305, height: 460 }}>
                        <CardMedia
                            sx={{ maxWidth: 300, height: 300 }}
                            image={Shutka}
                            title="green iguana"
                        />
                        <CardContent>
                            <h6 className='text-indigo-700'>Fashion</h6>
                            <Typography gutterBottom variant="h6" component="div" sx={{ maxWidth: 300 }}>
                                This is first Post For Blog
                            </Typography>
                            <p className='m-0 p-0 font-light'>Posted By: <Link className='text-indigo-700' to='/'>HasTech</Link> 12TH Nov 2023</p>
                        </CardContent>

                    </Card>
                    <Card sx={{ maxWidth: 305, height: 460 }}>
                        <CardMedia
                            sx={{ maxWidth: 300, height: 300 }}
                            image={Lak}
                            title="green iguana"
                        />
                        <CardContent>
                            <h6 className='text-indigo-700'>Fashion</h6>
                            <Typography gutterBottom variant="h6" component="div" sx={{ maxWidth: 300 }}>
                                This is first Post For Blog
                            </Typography>
                            <p className='m-0 p-0 font-light'>Posted By: <Link className='text-indigo-700' to='/'>HasTech</Link> 12TH Nov 2023</p>
                        </CardContent>

                    </Card>
                    <Card sx={{ maxWidth: 305, height: 460 }}>
                        <CardMedia
                            sx={{ maxWidth: 300, height: 300 }}
                            image={Balzam1}
                            title="green iguana"
                        />
                        <CardContent>
                            <h6 className='text-indigo-700'>Fashion</h6>
                            <Typography gutterBottom variant="h6" component="div" sx={{ maxWidth: 300 }}>
                                This is first Post For Blog
                            </Typography>
                            <p className='m-0 p-0 font-light'>Posted By: <Link className='text-indigo-700' to='/'>HasTech</Link> 12TH Nov 2023</p>
                        </CardContent>


                    </Card>
                </div>
                <hr className='mb-5' />
                <div className="pic-wrapper flex p-8 justify-between">
                    <img src={Jpg1} alt="Jpg1" />
                    <img src={Jpg2} alt="Jpg2" />
                    <img src={Jpg3} alt="Jpg3" />
                    <img src={Jpg4} alt="Jpg4" />
                    <img src={Jpg5} alt="Jpg5" />
                    <img src={Jpg2} alt="Jpg2" />

                </div>
            </div>

        </div>
    )
}

export default LatestBlog