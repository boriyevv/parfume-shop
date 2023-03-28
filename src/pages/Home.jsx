import { Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestBlog from '../components/LatestBlog'
import NewArrivalProducts from '../components/NewArrivalProducts'
import OurProducts from '../components/OurProducts'
import Properties from '../components/Properties'


const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Carousel />
        <Properties/>
        <OurProducts/>
        <NewArrivalProducts/>
        <LatestBlog/>
      </Container>
      <Footer />
    </>
  )
}

export default Home