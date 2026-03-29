import React from 'react'
import './Hero.css'
import {data} from '../../assets/heroData.js'

const Hero = () => {
  const mainPost = data[0]
  const smallPost = data.slice(1)
  return (
    <div className='hero-section'>
      <div className="hero-left">

        <img src={mainPost.image} alt="" />
        <div className="hero-overlay">
          <span> {mainPost.category}</span>
          <h2>{mainPost.title}</h2>
          <p>date</p>
        </div>
      </div>
      <div className="hero-right">

        {smallPost.map((post)=>(

          <div className='hero-small' key={post.id}>
            <img src={post.image} alt="" />
            <div className="hero-overlay">
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Hero
