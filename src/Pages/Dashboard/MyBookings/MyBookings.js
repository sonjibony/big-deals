import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBookings = () => {

const {user} = useContext(AuthContext);

const url = `http://localhost:5000/bookings?email=${user?.email}`

const {data:orders =[], isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json()
        return data;
    }
})

if(isLoading){
    return <button className=" m-72 btn btn-square loading"></button>;
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
    </div>
    );
};

export default MyBookings;