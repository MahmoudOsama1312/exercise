import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function MasterRouting() {
  return (
    <>

      <NavbarComponent/>
      <Outlet />
      <Footer/>

    </>
  )
}
