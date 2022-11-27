import React from "react";

const AdvertisedProductCard = ({ furniture }) => {
  const { name, img, originalPrice, seller, date,category, isVerified } = furniture;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title ">{name}</h2>
          <div>
            <p className="text-lg">
              {" "}
              <span className="font-bold">Seller- </span>
              {seller} {isVerified?"✅":""}
            </p>{" "}
          </div>
        </div>
        <p>
          {" "}
          <span className="font-bold">Price: </span>${originalPrice}
        </p>
        <p>
          {" "}
          <span className="font-bold">Category: </span>{category}
        </p>
        <p>
          {" "}
          <span className="font-bold">Posted at: </span>
          {date}
        </p>
      </div>
    </div>
  );
};

export default AdvertisedProductCard;
