import { Container } from '@mui/material'
import React from 'react'
import CartStyle from '../components/CartStyle'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Cart = () => {
  return (
    <>
    <Header />
    <Container maxWidth='xl'>
     <CartStyle/>
    </Container>
    <Footer />
  </>
  )
}

export default Cart