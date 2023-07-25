import React from 'react'
import Layout from '../Layout'
import Hero from './hero/Hero'
import MyBio from './myBio/MyBio'
import OurServices from './ourServices/OurServices'

const Home = () => {
  return (
    <Layout>
       <Hero/>
       <MyBio/>
       <OurServices/>
    </Layout>
  )
}

export default Home