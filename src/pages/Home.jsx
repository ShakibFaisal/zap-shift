import React from "react";
import Banner from "./shared/Banner";
import HowItWork from "./shared/HowItWork";
import Services from "./shared/Services";
import Brands from "./shared/Brands";
import Reviews from "./shared/Reviews";
const reviewpromise=fetch("/reviews.json").then(res => res.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <Services></Services>
      <div className="my-9">
        <h3 className="text-3xl font-bold text-center mb-5">
          We have helped thousand of sales teams
        </h3>
        <Brands></Brands>
      </div>
      <Reviews reviewpromise={reviewpromise}></Reviews>
    </div>
  );
};

export default Home;
