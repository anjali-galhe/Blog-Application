import React from 'react';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className='main-layout-container'>
      
     { /* Left: Recent Posts List */}
      <div className="recent-posts">
        <h3>Recent Stories</h3>
        <div className="post-item">
          <div className="post-text">
            <span>March 7, 2026</span>
            <h4>How to master React in 30 days</h4>
            <p>Start your journey into modern web development with these tips...</p>
          </div>
        </div>
        {/* More items here */}
      </div>

      {/* Right: Sidebar */}
      <div className="sidebar">
        <div className="sidebar-box">
          <h4>About BlogZen</h4>
          <p>A place where we share thoughts about tech, life, and design.</p>
        </div>
        <div className="sidebar-box">
          <h4>Trending Tags</h4>
          <div className="tags">
            <span>#React</span> <span>#JavaScript</span> <span>#Design</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainLayout;