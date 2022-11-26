import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);

  //closing modal
  const closeModal = () => {
    setDeletingProduct(null);
  };

  //fetching data
  const url = `http://localhost:5000/products?gmail=${user?.email}`;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      //     , {
      //     headers: {
      //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
      //     },
      //   });
      const data = await res.json();
      return data;
    },
  });

  //spinner
  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  //implementing delete
  const onDeletingProduct = (order) => {
    fetch(`http://localhost:5000/products/${order._id}`, {
      method: "DELETE",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("deleted successfully");
        }
      });
}

 //advertising
    const handleAdvertising = (id) => {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Advertised Successfully");
            refetch();
          }
        });
    };



  return (
    <div>
      <h3 className="text-3xl mb-5">MY PRODUCTS</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={product.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{product.resalePrice}</td>
                  <td>{product.name}</td>

                  <td>
                    <label
                      onClick={() => setDeletingProduct(product)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  </td>
                  {/* <td>
                    <button onClick={(() => handleAdvertising(id))} className="btn btn-xs btn-accent">Advertise </button>
                  </td> */}

{/* <td>
                  {buyer?.status !== "verified" && (
                    <button
                      onClick={() => handleVerification(buyer._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Verify
                    </button>
                  )}
                </td> */}

                  <td>
                
                {
                  product?.advertise?
                  <p className="text-green-500 ">Advertised</p>
                :
                <button
                  onClick={() =>handleAdvertising(product._id)}
                  className="btn btn-xs btn-primary">
                  Advertise
                </button>
                }

                  </td>

                  {/* <td>
                    {product.price && !product.paid && (
                      <Link to={`/dashboard/payment/${product._id}`}>
                        <button className="btn btn-sm btn-accent"> Pay</button>
                      </Link>
                    )}
                    {product.price && product.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProduct.name}, it can't be undone.`}
          successAction={onDeletingProduct}
          successButtonName="Delete"
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
