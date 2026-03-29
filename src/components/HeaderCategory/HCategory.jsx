import React from "react";
import { useParams } from "react-router-dom";
import { allData } from "../../assets/allData";
import "./HCategory.css";

const HCategory = () => {
  const { category } = useParams();

  const filteredData = allData.filter(
    (item) =>
      item.category?.toLowerCase() === category?.toLowerCase()
  );

  return (
   <div className="category-container">
  <h1 className="category-title">{category}</h1>

  {filteredData.length > 0 ? (
    <div className="category-grid">
      {filteredData.map((item) => (
        <div className="category-card" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div className="card-content">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h2>No Data Found</h2>
  )}
</div>
  );
};

export default HCategory;