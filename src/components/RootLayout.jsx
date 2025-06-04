import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        {/* The Outlet component will render the child routes */}
    </div>
  )
}

export default RootLayout