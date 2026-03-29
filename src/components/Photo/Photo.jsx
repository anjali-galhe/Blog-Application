import React from 'react';
import './Photo.css';
import { galleryImages } from '../../assets/galleryData'; 

const Photo = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Visual Stories</h1>
        <p>A collection of moments captured through the lens.</p>
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <div key={item.id} className={`gallery-item ${item.span}`}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-hover">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;