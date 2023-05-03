import React from 'react'
import StartReact from './components/StartReact/StartReact'
import About from './components/About/About.jsx'
import ContactMe from './components/ContactMe/ContactMe'
import Portfolio from './components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NotFound from './components/NotFound/NotFound'
import MasterRouting from './components/MasterRouting/MasterRouting'
import MyModal from './components/Modal/Modal'

export default function App() {

  let routes = createBrowserRouter([
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

