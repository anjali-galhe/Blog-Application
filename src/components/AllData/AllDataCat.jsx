import React from 'react';
import './AllDataCat.css'; // Don't forget to import the CSS!
import { allData } from '../../assets/allData';



const AllDataCat = () => {
  return (
    <div className="allData-container">
      {allData.map((item) => (
        <div className="allData-card" key={item.id}>
          <img src={item.image} alt={item.title}/>
          <div className="allData-info">
            <h2>{item.title}</h2>
            <h4>{item.content}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDataCat;