import React from 'react'
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"

const Layout = ({component}) => {
  return (
    <>
    <Header/>
    {component}
    <Footer/>
    
    </>

  )
}

export default Layout