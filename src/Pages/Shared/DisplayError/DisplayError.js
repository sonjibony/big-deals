import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <p className="text-red-500 text-5xl my-4">Something Went Wrong!!!</p>
      <p className="text-red-500 text-lg my-4">
        {error.statusText || error.message}
      </p>
      <h2 className="text3xl">
        Please{" "}
        <button className="btn btn-sm btn-primary m-4" onClick={handleLogOut}>
          Sign Out
        </button>
        and log back in.
      </h2>
    </div>
  );
};

export default DisplayError;
