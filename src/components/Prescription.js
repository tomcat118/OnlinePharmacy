import React from 'react'
import './Prescription.css'
import HamburgerButton from './HamburgerButton'
import Cart from './cart.png'
import Slider from './Slider'
import PrescriptionTabs from './PrescriptionTabs'

const Prescription = () => {
  return (
    <div className = 'header_background'> 
        <img src = {Cart} className = 'cart' alt = 'Cart'/>
        <HamburgerButton/> 
        <PrescriptionTabs/>
    </div>
  )
}

export default Prescription