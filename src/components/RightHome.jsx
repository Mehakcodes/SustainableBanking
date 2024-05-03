import React from "react";
import { Link } from "react-router-dom";

const RightHome = () => {
  return (
    <div className="flex flex-wrap items-center justify-between h-[80vh] px-10 py-20">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center pr-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Title Here
        </h2>
        <p className="text-lg md:text-xl mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a molestiae, sit nostrum officiis maxime vero ad dolores, reiciendis adipisci eum quo dolor qui alias nisi ratione dolorum fugiat magni corporis, consequatur eaque harum libero! Deleniti ab quod doloremque quae? Voluptate quibusdam nostrum dolor architecto dolores repellat quis temporibus dolorem?
        </p>
        <Link
          to="#"
          className="bg-green-600 hover:bg-green-900 text-xl text-white font-bold py-3 px-6 rounded-lg inline-block"
        >
          Read More
        </Link>
      </div>
      <div className="image w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 space-x-4">
        <div className="relative">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*"
            alt=""
            className="w-80 h-56 md:w-96 md:h-72 object-cover rounded-lg shadow-md"
            style={{ marginTop: "-60px" }}
          />
        </div>
        <div className="relative">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*"
            alt=""
            className="w-80 h-56 md:w-96 md:h-72 object-cover rounded-lg shadow-md"
            style={{ marginTop: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightHome;
