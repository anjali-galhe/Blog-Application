import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import HomeCato from '../components/HomeCato/HomeCato'
import MainLayout from '../components/MainLayout/MainLayout'
import Footer from '../components/Footer/Footer'
import List from '../components/list/List'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedPosts/>
      <HomeCato/>
      <List/>
      <MainLayout/>
      <Footer/>
    </div>
  )
}

export default Home
