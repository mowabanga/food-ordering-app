import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/30 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizza"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        consequatur sint numquam
      </p>
      <button className="mt-4 bg-primary text-white text-sm rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
