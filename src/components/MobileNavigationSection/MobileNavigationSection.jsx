import MobileNavigationButton from "../MobileNavigationButton/MobileNavigationButton"
import "./MobileNavigationSection.css"
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function MobileNavigationSection() {

    const [selectedButton, setSelectedButton] = useState(null)

    const [buttonsInfo] = useState([
        {title: "Home",icon: <FaHome />},
        {title: "Cart",icon: <FaCartShopping />},
        {title: "Settings",icon: <IoSettingsSharp />},
        {title: "Profile",icon: <FaUser />},
    ])

  return (
    <div className="mobile-navigation-section-container">
        {buttonsInfo.map(button => {
            return <MobileNavigationButton key={button.title} selectedButton={selectedButton} setSelectedButton={setSelectedButton} {...button} />
        })}
    </div>
  )
}

export default MobileNavigationSection