import React from 'react'
import {AiOutlineGithub,AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import '../hero/hero.css'
const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-body">
            <div className="hero-content">
                <p>Hello,<span>I'm</span></p>
                <h1>Vinay Kumar</h1>
                <h3>Front-end Developer</h3>
                <p className='para'>With knowledge in web development and design,I offer the <br /> best projects resulting in quality work</p>
                <div className="btn-container">
                    <button>Let's Talk</button>
                </div>
                <div className="social-link">
                    <div className="icon">
                        <AiOutlineGithub className='icon-color'/>
                    </div>
                    <div className="icon">
                        <FaLinkedinIn  className='icon-color'/>
                    </div>
                    <div className="icon">
                        <AiOutlineInstagram  className='icon-color'/>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <div className="hexagon"></div>
            </div>
        </div>
    </section>
  )
}

export default Hero