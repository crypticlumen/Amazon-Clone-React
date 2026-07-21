//Amazon Project
import React from 'react'

import './navbarBelt.css';

import amazonLogo from '../../../Assests/AmazonLogo.webp';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const NavbarBelt = () => {
  return (
    <div className='navbarBelt'>
      <div className='leftnavBelt'>
        <div className="leftnavBeltLogo">
        <img className='amazonLogonavbar' src={amazonLogo} alt='amazonLogo' />
        <span className='navbar_inLogo'>.in</span>
        </div>
        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
            <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize: "22px"}} / >
          </div>
        </div>
      </div>
      <div className='navbarBeltSearchBox'>

      </div>
      <div className='rightnavBelt'>

      </div>
    </div>
    
  )
}

export default NavbarBelt;
      