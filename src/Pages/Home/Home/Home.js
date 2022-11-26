import React from "react";
import AdvertisedProduct from "../AdvertisedProduct/AdvertisedProduct";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedProduct></AdvertisedProduct>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
