import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div>
    <Navbar/>
    </div>
     <div>
       <Outlet/>
     </div>
    <Footer/>
    </>
  )
}

export default Layout