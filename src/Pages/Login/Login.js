import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState('');


  //implementing login
  const handleLogin = data =>{
console.log(data);
  }

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
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
              })}
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn  w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && (
              <p className="text-red-600 mt-2 mb-2">{loginError}</p>
            )}
          </div>
        </form>
        <p>
          New to Brush N Floss?{" "}
          <Link className="text-accent font-extrabold" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent  w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
