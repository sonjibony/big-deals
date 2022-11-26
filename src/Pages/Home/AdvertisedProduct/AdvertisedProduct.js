import { useQuery } from "@tanstack/react-query";
import React from "react";
import FurnitureCard from "../Categories/FurnitureCard";

const AdvertisedProduct = () => {
  const { data: advertisedFurniture = [], isLoading } = useQuery({
    queryKey: ["advertisedFurniture"],
    queryFn: () =>
      fetch(
        "http://localhost:5000/advertisedProducts?advertise=advertised"
      ).then((res) => res.json()),
  });

  //spinner
  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (

    <>
    {
        advertisedFurniture?.length > 0  &&
        <div>
        <div>
          <h2 className=" text-center text-3xl text-primary font-bold">
            ADVERTISED PRODUCTS
          </h2>
        </div>
        <div className="w-3/4 mx-auto grid gap-6  grid-cols-1 my-10 ">
          {advertisedFurniture.map((furniture) => (
            <FurnitureCard
              key={furniture._id}
              furniture={furniture}
              // setBooking={setBooking}
            ></FurnitureCard>
          ))}
        </div>
      </div>
      
    }

    
    </>
    
  );
};

export default AdvertisedProduct;
