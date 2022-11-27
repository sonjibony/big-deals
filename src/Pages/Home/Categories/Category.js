import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import FurnitureCard from "./FurnitureCard";

const Category = () => {
  const [booking, setBooking] = useState(null);
  const { data: allFurniture } = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (
    <div>
      <div>
        {allFurniture?.length ? (
          <h2 className=" text-center text-3xl text-primary font-bold">
            HOPE YOU FIND <br /> WHAT YOU ARE LOOKING FOR. <br /> EXPLORE AND GET THE BEST DEAL FOR YOU.
          </h2>
        ) : (
          <h2 className=" min-h-screen text-4xl text-secondary flex justify-center items-center">
            No product available in this category. Please Visit later.
          </h2>
        )}
      </div>
      <div className="w-3/4 mx-auto grid gap-6  grid-cols-1 my-10 ">
        {allFurniture.map((furniture) => (
          <FurnitureCard
            key={furniture._id}
            furniture={furniture}
            setBooking={setBooking}
          ></FurnitureCard>
        ))}
      </div>
      {booking && (
        <BookingModal booking={booking} setBooking={setBooking}></BookingModal>
      )}
    </div>
  );
};

export default Category;
