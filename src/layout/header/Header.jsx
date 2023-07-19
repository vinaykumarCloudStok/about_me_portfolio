import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../header/header.css'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <header className='header'>
        <nav className='navbar'>
            <div className="logo">
             <h1> Logo</h1>
            </div>
            <div className="menu-icon">
                <AiOutlineMenu className='icon-color' onClick={()=>setToggle(true)}/>
            </div>
            <ul className={`nav-links ${toggle?"active-nav-links":""}`}>
                <div className="close-btn">
                    <AiOutlineClose className='icon-color' onClick={()=>setToggle(false)}/>
                </div>
                <li> <Link to="#home">Home</Link> </li>
                <li> <Link to="#about">About</Link> </li>
                <li> <Link to="#services">Services</Link> </li>
                <li> <Link to="#projects">Projects</Link> </li>
                <li> <Link to="#contacts">Contact</Link> </li>
            </ul>
            {/* <div className="">
             <Link to="#">Facebook</Link>
             <Link to="#">Instagram</Link>
             <Link to="#">Twitter</Link>
            </div> */}
        </nav>
    </header>
  )
}

export default Header