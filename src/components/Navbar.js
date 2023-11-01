import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import Login from '../assets/login.png'
import { Link } from 'react-router-dom'
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import '../styles/Navbar.css'
import '../fonts/Wallington-Regular.ttf'
import '../fonts/Voga-Medium.ttf'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='Pure Devotion'/>
        <div className='PD'>Pure Devotion</div>
        <div className='hiddenLinks'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/campaign">CAMPAIGN</Link>
        <Link to="/contact">CONTACT US</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/campaign">CAMPAIGN</Link>
        <Link to="/contact">CONTACT US</Link>
        <span className="seperate">|&nbsp;&nbsp;&nbsp;</span>
        <img src={Login} alt='Login'/>
        <Link>LOGIN</Link>
        <Link to="/donatenow"><button id="dnb">Donate Now</button></Link>

        <button id="navtoggle" onClick={toggleNavbar}>
          <ReorderSharpIcon/>
        </button>

      </div>
    </div>
  )
}

export default Navbar

