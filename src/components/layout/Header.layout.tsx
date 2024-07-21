import React from 'react'
import Navbar from '../common/Navbar'
import InfoNavbar from '../common/InfoNavbar'

function Header() {
  return (
    <header className='z-20'>
      <InfoNavbar/>
      <Navbar/>
    </header>
  )
}

export default Header
