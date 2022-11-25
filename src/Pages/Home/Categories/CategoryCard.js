import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, img} = category;
    return (
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-28" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions">
        <Link to={`/furniture/${name}`}>
        
      <button className="btn btn-sm btn-outline btn-secondary">Show Category</button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default Category;