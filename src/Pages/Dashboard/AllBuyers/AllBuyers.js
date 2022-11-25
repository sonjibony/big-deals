import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllBuyers = () => {

  const [deletingBuyer, setDeletingBuyer] = useState(null);

  //closing modal
  const closeModal = () =>{
      setDeletingBuyer(null);
  }

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
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
        if(data.modifiedCount >0){
            toast.success('Verified Successfully');
            refetch();
        }
    })
};

//implementing delete
const handleDeleteBuyer = buyer =>{
  fetch(`http://localhost:5000/users/${buyer._id}`,{
      method: 'DELETE',
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
  })
  .then(res => res.json())
  .then(data => {
      if(data.deletedCount> 0){
          refetch();
          toast.success('deleted successfully')
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
                <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {
        deletingBuyer && <ConfirmationModal
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingBuyer.name}, it can't be undone.`}
        successAction = {handleDeleteBuyer}
        successButtonName="Delete"
        modalData = {deletingBuyer}
        closeModal={closeModal}
        
        >

        </ConfirmationModal>
      }


    </div>
  );
};

export default AllBuyers;
