import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedProductCard from "./AdvertisedProductCard";

const AdvertisedProduct = () => {
  const { data: advertisedFurniture = [], isLoading } = useQuery({
    queryKey: ["advertisedFurniture"],
    queryFn: async () => {
      const res = await fetch(
        "https://big-deal-server-sonjibony.vercel.app/advertisedProducts?advertise=advertised",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  //spinner
  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (
    <div className="my-6">
      {advertisedFurniture?.length > 0 && (
        <div>
          <div>
            <h2 className=" text-center text-3xl text-primary font-bold my-4">
              ADVERTISED PRODUCTS
            </h2>
            <h3 className="text-lg text-center">
              Here are some of our advertised product. You can visit the given
              category of the product to see product detail and to buy them.
            </h3>
          </div>
          <div className="w-11/12 mx-auto grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {advertisedFurniture.map((furniture) => (
              <AdvertisedProductCard
                key={furniture._id}
                furniture={furniture}
              ></AdvertisedProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisedProduct;
