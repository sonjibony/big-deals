import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const MyBookings = () => {

const {user} = useContext(AuthContext);
const [deletingOrder, setDeletingOrder] = useState(null);

//closing modal
  const closeModal = () =>{
    setDeletingOrder(null);
  }


//fetching data
const url = `http://localhost:5000/bookings?email=${user?.email}`

const {data:orders =[], isLoading,refetch } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
        const res = await fetch(url,{
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const data = await res.json()
        return data;
    }
})


console.log(orders);

//spinner
if(isLoading){
    return <button className=" m-72 btn btn-square loading"></button>;
};

//implementing delete
const onDeletingOrder = order =>{
  fetch(`http://localhost:5000/bookings/${order._id}`,{
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
      <h3 className="text-3xl mb-5">MY ORDERS</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Title</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            
            {orders &&
              orders?.map((order, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td><div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={order.img} alt="" />
                    </div>
                  </div></td>
                  <td>{order.product}</td>
                  <td>{order.price}</td>
                  <td>
                <label onClick={() => setDeletingOrder(order)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                    Delete
                  </label>
                </td>
                  <td>
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-sm btn-accent"> Pay</button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {
        deletingOrder && <ConfirmationModal
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingOrder.name}, it can't be undone.`}
        successAction = {onDeletingOrder}
        successButtonName="Delete"
        modalData = {deletingOrder}
        closeModal={closeModal}
        
        >

        </ConfirmationModal>
      }
    </div>
    );
};

export default MyBookings;