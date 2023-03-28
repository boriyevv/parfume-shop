import { Container } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestBlog from '../components/LatestBlog'
import NewArrivalProducts from '../components/NewArrivalProducts'
import OurProducts from '../components/OurProducts'

const Shop = () => {
    return (
        <>
            <Header />
            <Container maxWidth='xl'>
                <OurProducts />
                <NewArrivalProducts />
                <LatestBlog />
            </Container>
            <Footer />
        </>
    )
}

export default Shop