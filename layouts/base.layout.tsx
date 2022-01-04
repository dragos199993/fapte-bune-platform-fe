import React, { FC } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const BaseLayout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
