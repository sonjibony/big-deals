import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?option=buyer");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  const handleVerification = id =>{
    fetch(`http://localhost:5000/users/${id}`,{
        method: 'PUT',
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
        if(data.modifiedCount >0){
            toast.success('Verified Successfully');
            refetch();
        }
    })
}

  return (
    <div>
      <h2 className="text-3xl">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr className="hover" key={buyer._id}>
                <th>{i + 1}</th>
                {
                  buyer?.status?
                  <td>{buyer.name}✅</td>
                   :
                  <td>{buyer.name}</td>


                }
                {/* <td>{buyer.name}</td> */}
                <td>{buyer.email}</td>
                <td>
                  {buyer?.status !== "verified" && (
                    <button
                      onClick={() => handleVerification(buyer._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Verify
                    </button>
                   )} 
                </td>
                <td>
                  <button className="btn btn-xs ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
