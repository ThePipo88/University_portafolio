import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/NavbarAnimation/Slider';
import SearchInfo from '../../Components/SearchInformation/SearchInfo';

const Principal = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <SearchInfo/>
    </div>
  )
}

export default Principal