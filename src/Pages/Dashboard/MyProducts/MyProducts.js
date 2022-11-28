import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);

  //closing modal
  const closeModal = () => {
    setDeletingProduct(null);
  };

  //fetching added product data according to mail
  const url = `https://big-deal-server-sonjibony.vercel.app/products?gmail=${user?.email}`;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  //spinner
  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  //deleting my added products
  const onDeletingProduct = (order) => {
    fetch(
      `https://big-deal-server-sonjibony.vercel.app/products/${order._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("deleted successfully");
          refetch();
        }
      });
  };

  //advertising my added products
  const handleAdvertising = (id) => {
    fetch(`https://big-deal-server-sonjibony.vercel.app/products/${id}`, {
      method: "PUT",
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
      <h3 className="text-3xl my-6 text-center font-bold text-primary">
        MY PRODUCTS
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
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
                  <td>{product.name}</td>
                  <td>{product.resalePrice}</td>

                  <td>{product.status}</td>

                  <td>
                    <label
                      onClick={() => setDeletingProduct(product)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  </td>

                  <td>
                    {product?.advertise ? (
                      <p className="text-green-500 ">Advertised</p>
                    ) : (
                      <button
                        onClick={() => handleAdvertising(product._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Advertise
                      </button>
                    )}
                  </td>
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
