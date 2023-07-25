import React from 'react'
import '../../layout/home/ourServices/ourservice.css'
import { Link } from 'react-router-dom'
const ServiceCard = (props) => {
    const {img,name} = props
  return (
    <div className="portfolio-box" >
    <img src={img} alt="" />
    <div className="portfolio-layer">
        <h4>{name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur tempore dignissimos obcaecati, dolores veritatis, </p>
        <Link className='link-external'>  Read More </Link>
    </div>
</div>
    
  )
}

export default ServiceCard