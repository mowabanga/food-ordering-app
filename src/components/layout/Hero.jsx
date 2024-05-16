import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold ">
          Everything
          <br /> is better
          <br /> with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-600 text-sm">
          Feeling sad, eat a pizza. Happy? Eat a pizza? Moody, eat a pizza?
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex gap-2 text-white px-4 py-2 rounded-full items-center">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="Pizza image"
        />
      </div>
    </section>
  );
};

export default Hero;
