import React from 'react'
import { createHashRouter, RouterProvider } from "react-router-dom"
import About from './components/About/About.jsx'
import ContactMe from './components/ContactMe/ContactMe'
import MasterRouting from './components/MasterRouting/MasterRouting'
import MyModal from './components/Modal/Modal'
import NotFound from './components/NotFound/NotFound'
import StartReact from './components/StartReact/StartReact'

export default function App() {

  let routes = createHashRouter([
    {
      path: '/', element: <MasterRouting />, errorElement: <NotFound />,
      children: [
        { index: true, element: <StartReact /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <MyModal /> },
        { path: 'contact', element: <ContactMe /> }]
    }])


  return (
    <>
      {/* <Navbar />
      <StartReact />
      <Portfolio/>
      <About />
      <ContactMe/>
      <Footer />
      <NotFound/> */}

      <RouterProvider router={routes} />

    </>
  )
}

