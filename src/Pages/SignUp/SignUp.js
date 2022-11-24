import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail]= useState('');
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

if(token){
  navigate('/');
}

  //implementing sign up
  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name,data.email,data.option);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  //saving user in db
  const saveUser = (name,email,option) =>{
    const user = {name, email, option};
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setCreatedUserEmail(email);
      // console.log('saved user',data);
      // navigate("/");

    })
  }




  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must include uppercase number and special character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <label className="label">
            <span className="label-text">Choose your option</span>
          </label>

          <select
            {...register("option", {})}
            className="select select-primary w-full max-w-xs"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          <input
            className="btn btn-accent w-full mt-4 mb-2"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-accent font-extrabold" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
