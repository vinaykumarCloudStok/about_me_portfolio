import React from 'react'
import ServiceCard from '../../../components/serviceCard/ServiceCard'
import '../ourServices/ourservice.css'
import port from '../../../assets/web.jpg'
import port1 from '../../../assets/app.avif'
import port2 from '../../../assets/resp.avif'
import port3 from '../../../assets/seo.avif'
import port4 from '../../../assets/content.jpg'
import port5 from '../../../assets/devops.avif'
const OurServices = () => {
    const data = [{ name: "Website Design", img: port }, { name: "App Developement", img: port1 }, { name: "Responsive Web Design", img: port2 },
    { name: "SEO",img:port3 }, { name: "Content Type",img:port4 }, { name: "DevOps" ,img:port5}

    ]
    return (
       <section>
        <div className="our-service-container">
            <h1>Our Services</h1>
            <div className="portfolio-container">
             {
                data.map((el,i)=>(
                    <ServiceCard key={i} head={el.name}  img={el.img}/>
                ))
             }
            </div>
        </div>
       </section>
    )
}

export default OurServices