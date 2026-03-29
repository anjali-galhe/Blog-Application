import React from 'react'
import { blogData } from '../../assets/blogData'
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="reels-wrapper">
      {blogData.map((item) => (
        <div className="reel-card" key={item.id}>
          {/* Video Background */}
          {/* <video 
            src={item.video} 
            className="video-player"
            loop
            muted
            autoPlay
            playsInline
          /> */}
          <video
  src={item.video}
  className="video-player"
  loop
  muted
  autoPlay
  playsInline
  preload="metadata"
/>

          {/* Text Content Overlay */}
          <div className="reel-details">
            <div className="content-left">
              <span className="tag">#{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>

            {/* Side Buttons like Instagram */}
            <div className="side-icons">
              <div className="icon">❤️</div>
              <div className="icon">💬</div>
              <div className="icon">✈️</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;