import { Container } from '@mui/material'
import React from 'react'
import AdminPanel from '../components/AdminPanel'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Admin = () => {
  return (
    <>
    <Header />
    <Container maxWidth='xl'>
      <AdminPanel/>
    </Container>
    <Footer />
  </>
  )
}

export default Admin