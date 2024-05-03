import React from "react";
import Banner from "../components/Banner";
import LeftHome from "../components/LeftHome"
import RightHome from "../components/RightHome"
import Testimonial from "../components/Testimonial"
import About from "../components/About"


const Home = () => {
  return (
    <div className="">
      <div className=" pt-44 flex">
        <div className="flex flex-col">
          <div>Discover Sustainable Banking</div>
          <div>Join us on a journey to transform your finances, while also making a positive impact on the planet. Together, we can create a brighter, more sustainable future for all. </div>
          <div className="flex">
            <div>
              <input type="email" name="email" id="email" placeholder="Enter your email address" />
            </div>
            <div>
              Join Now
            </div>
          </div>
        </div>
        <div
          className="h-72 w-96 bg-cover bg-center "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg)",
            filter: "blur(0px) brightness(0.7) contrast(1.2)",
          }}
        />

      </div>
      <RightHome />
      <LeftHome />
      <RightHome />
      <LeftHome />
      <RightHome />
      <LeftHome />
      <RightHome />
      <LeftHome />
      <Testimonial />
      <About />
    </div>
  );
};

export default Home;
