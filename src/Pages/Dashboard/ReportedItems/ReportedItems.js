import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ReportedItems = () => {
  const [deletingReportedItem, setDeletingReportedItem] = useState(null);

  //closing modal
  const closeModal = () => {
    setDeletingReportedItem(null);
  };

  //fetching data using react query
  const {
    data: reports = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/reportedProducts?report=reported"
      );
      const data = await res.json();
      return data;
    },
  });

  //deleting reported product items
  const onDeletingReportedItem = (report) => {
    fetch(`http://localhost:5000/products/${report._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("deleted successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (
    <div>
      <h2 className="text-3xl">Reported Items</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Item</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, i) => (
              <tr className="hover" key={report._id}>
                <th>{i + 1}</th>

                <td>{report.seller}</td>

                <td>{report.gmail}</td>
                <td>{report.name}</td>

                <td>
                  <label
                    onClick={() => setDeletingReportedItem(report)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deletingReportedItem && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingReportedItem.name}, it can't be undone.`}
          successAction={onDeletingReportedItem}
          successButtonName="Delete"
          modalData={deletingReportedItem}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ReportedItems;
