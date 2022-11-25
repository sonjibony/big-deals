import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });

  const handleAddProduct = (data) => {
    const furniture = {
      category: data.category,
      img: data.img,
      condition: data.condition,
      description: data.description,
      location: data.location,
      mobile: data.mobile,
      name: data.name,
      originalPrice: data.originalPrice,
      resalePrice: data.resalePrice,
      seller: data.seller,
      used: data.used,
      year: data.used,
    };
    console.log(furniture);

    //save doctor info in db
    fetch("http://localhost:5000/furniture", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //         // authorization : `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(furniture),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully!");
          navigate("/dashboard/myProducts");
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (
    <div className="w-full p-7 mx-auto">
      <h2 className="text-4xl">Add A Product</h2>

      <form
        className="grid gap-6 grid-cols-2"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: " Product name is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>

          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", {
              required: "Price is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalPrice && (
            <p className="text-red-600">{errors.originalPrice.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            {...register("resalePrice", {
              required: "This  is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resalePrice && (
            <p className="text-red-600">{errors.resalePrice.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Purchasing Year</span>
          </label>
          <input
            type="text"
            {...register("year", {
              required: "Year is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.year && <p className="text-red-600">{errors.year.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">How many years used</span>
          </label>
          <input
            type="text"
            {...register("used", {
              required: "This is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.used && <p className="text-red-600">{errors.used.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: "This is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>

          <select
            {...register("condition")}
            className="select select-bordered w-full max-w-xs"
          >
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            {...register("seller", {
              required: "Name is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.seller && (
            <p className="text-red-600">{errors.seller.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Contact No</span>
          </label>
          <input
            type="text"
            {...register("mobile", {
              required: "This  is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && (
            <p className="text-red-600">{errors.mobile.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "This is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-600">{errors.location.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Product Photo URL</span>
          </label>
          <input
            type="text"
            {...register("img", {
              required: "Photo is required",
            })}
            className="input input-bordered w-full max-w-xs pt-2"
          />
          {errors.img && <p className="text-red-600">{errors.img.message}</p>}
        </div>

        <input
          className="btn btn-accent w-full mt-4 mb-2 mx-auto"
          value="Add Doctor"
          type="submit"
        />
        {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddProduct;
