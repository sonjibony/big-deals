import React from "react";
import toast from "react-hot-toast";

const FurnitureCard = ({ furniture, setBooking }) => {
  const {
    name,
    img,
    location,
    used,
    resalePrice,
    originalPrice,
    seller,
    date,
    condition,
    year,
    isVerified,
    mobile,
    description,
    _id,
  } = furniture;

  const handleReport = (id) => {
    fetch(`https://big-deal-server.vercel.app/reportedProducts/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Reported Successfully");
        }
      });
  };

  return (
    <div className="card rounded  lg:card-side bg-base-100 ">
      <figure>
        <img className="rounded max-w-[500px]" src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between gap-5 items-center">
          <h2 className="card-title text-2xl text-secondary">{name}</h2>
          <div>
            <p className="text-lg">
              {" "}
              <span className="font-bold">Seller- </span>
              {seller} {isVerified ? "✅" : ""}
            </p>{" "}
          </div>
        </div>

        <div>
          <p className="text-lg">
            {" "}
            <span className="font-bold">Posting Time:</span> {date}
          </p>
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

        <p className="text-lg">
          {" "}
          <span className="font-bold">Location- </span>
          {location}
        </p>
        <p className="text-lg">
          {" "}
          <span className="font-bold">Contact- </span>
          {mobile}
        </p>

        <p className="text-lg">
          {" "}
          <span className="font-bold">Product Description- </span>
          {description}
        </p>

        <hr className="mt-5" />
        <div className="card-actions justify-evenly">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-accent"
            onClick={() => setBooking(furniture)}
          >
            Book Now
          </label>
          <button
            onClick={() => handleReport(_id)}
            className="btn btn-sm btn-primary"
          >
            Report to admin
          </button>{" "}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FurnitureCard;
