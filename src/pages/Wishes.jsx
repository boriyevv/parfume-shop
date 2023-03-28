
import { Container } from '@mui/material'
import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WishStyle from '../components/WishStyle'

const Wishes = () => {
  return (
    <>
    <Header />
    <Container maxWidth='xl'>
      <WishStyle/>
    </Container>
    <Footer />
  </>
  )
}

export default Wishes