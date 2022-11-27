import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./CategoryCard";

const Categories = () => {
  //using react query
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("https://big-deal-server.vercel.app/category").then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (
    <div className="mt-6 my-16">
      <div className="divider w-1/2 mx-auto">Second-Hand Products</div>
      <h1 className="text-4xl font-bold text-center">CATEGORY</h1>
      <div className=" my-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Category key={category.categoryNo} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
