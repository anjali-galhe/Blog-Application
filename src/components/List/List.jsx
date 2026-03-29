import React from "react";
import posts from'../../assets/postData'
import "./List.css";

const List = () => {
  return (
    <section className="blog-section">

      {posts.map((post, index) => (

        <div
          key={post._id}
          className={`blog-card ${index % 2 !== 0 ? "reverse" : ""}`}
        >

          <div className="blog-image">
            <img src={post.image} alt="" />
          </div>

          <div className="blog-content">

            <p className="blog-meta">
              {post.createdAt} • {post.category}
            </p>

            <h2>{post.title}</h2>

            <p>{post.description}</p>

            <button>Read More</button>

          </div>

        </div>

      ))}
    </section>
  );
};

export default List;