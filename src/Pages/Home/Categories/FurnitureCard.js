import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const FurnitureCard = ({ furniture, setBooking }) => {

  // class App extends React.Component{
  //   state = {date: new Date()}
  //   render(){
  //     return 
  //   }
  // }

  // const d = new Date();
  // console.log('he visited me at',d);

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
    mobile,
    description,
    _id
  } = furniture;


  // const {
  //   data: sellers = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["sellers"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/users?option=seller");
  //     const data = await res.json();
  //     return data;
  //   },
  // });



  // if (isLoading) {
  //   return <button className=" m-72 btn btn-square loading"></button>;
  // }

  const handleReport = (id) => {
    fetch(`http://localhost:5000/reportedProducts/${id}`, {
      method: "PUT",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Reported Successfully");
          // refetch();
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
          {/* <h2 className="text-lg text-primary">Posted at: {`${new Date().getHours()}`} </h2>  */}
          <h2 className="text-lg text-primary">Posted at: {date} </h2> 
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

        
          {/* <p className="text-lg">
            {" "}
            <span className="font-bold">Seller- 
            </span>{
                  seller?.status?
                  <p>{seller}✅</p>
                   :
                  <p>{seller}</p>


                }
          </p> */}


          <p className="text-lg">
            {" "}
            <span className="font-bold">Seller- </span>
            {seller}
          </p>
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
          {/* <Link to="/">
            <button className="btn btn-sm btn-accent">Go Back</button>
          </Link> */}
          <button onClick={() => handleReport(_id)} className="btn btn-sm btn-primary">Report to admin</button>{" "}
          
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FurnitureCard;
