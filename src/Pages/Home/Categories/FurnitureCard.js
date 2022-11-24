import React from "react";
import { Link } from "react-router-dom";

const FurnitureCard = ({ furniture }) => {
  const {
    name,
    img,
    location,
    used,
    resalePrice,
    originalPrice,
    seller,
    time,
    condition,
    year,
    mobile,
    description,
  } = furniture;
  return (
    <div className="card rounded  lg:card-side bg-base-100 ">
      <figure>
        <img className="rounded" src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-2xl text-secondary">{name}</h2>
          <h2 className="text-lg text-primary">Posted at: {time}</h2>
        </div>

        
        <div>
          <p className="text-lg">
            {" "}
            <span className="font-bold">Original Price:</span> ${originalPrice}
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-bold">Resale Price:</span> ${resalePrice}
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-bold">Year of buying: </span>
            {year}
          </p>

          <p className="text-lg">
            {" "}
            <span className="font-bold">Used for:</span> {used} years
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-bold">Condition: </span>
            {condition}
          </p>
        </div>
        <div>
          <p className="text-xl">{description}</p>
        </div>
        <div className="flex justify-evenly">
          <p className="text-lg">
            {" "}
            <span className="font-bold">Seller- </span>
            {seller}
          </p>
          <p className="text-lg font-bold">{location}</p>
          <p className="text-lg">
            {" "}
            <span className="font-bold">Contact No- </span>
            {mobile}
          </p>
        </div>
        <hr className="mt-5" />
        <div className="card-actions justify-evenly">
          <button className="btn btn-sm btn-accent">Book Now</button>
          <Link to='/'>
          <button className="btn btn-sm btn-accent">Go Back</button>
          </Link>
          <button className="btn btn-sm btn-primary">
            Report to admin
          </button>{" "}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FurnitureCard;
