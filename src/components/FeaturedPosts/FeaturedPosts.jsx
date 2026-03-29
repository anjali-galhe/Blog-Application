import React from 'react'
import './FeaturedPosts.css'
import {featuredPosts} from '../../assets/featuredData.js'

const FeaturedPosts = () => { 
  return (
    <div className='featured-section'>
      {featuredPosts.map((post)=>(
        <div className="card" key={post.id}>
          <div className="card-img">
          <img src={post.image} alt="" />
          <span>{post.tag}</span>
          </div>
          
          <div className="card-content">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>

        </div>
        <div className="card-footer">

          <span>{post.author}</span>
          <span>{post.time}</span>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default FeaturedPosts
