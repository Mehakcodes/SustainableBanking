import React from "react";
import Banner from "../components/Banner";
import LeftHome from "../components/LeftHome";
import RightHome from "../components/RightHome";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Carousel from "../components/Carousel";
import { FaStar } from "react-icons/fa";
import { WiSnowWind } from "react-icons/wi";

const Home = () => {

  return (
    <div className="">
      <div className=" pt-36 flex px-36 gap-20 pb-24">
        <div className="flex flex-col pt-12">
          <div className="text-5xl font-semibold pb-8 ">
            Discover Sustainable Banking
          </div>
          <div className="text-justify text-lg pb-8">
            Join us on a journey to transform your finances, while also making a
            positive impact on the planet. Together, we can create a brighter,
            more sustainable future for all.{" "}
          </div>
          <div className="flex gap-7 items-center ">
            <div>
              <input
                className="border-2 p-2 rounded-3xl bg-slate-100 pr-28 text-black"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="border-2 rounded-3xl bg-green-700 cursor-pointer text-white px-4 py-2 hover:bg-green-500 font-bold hover:text-black ">
              Join Now
            </div>
          </div>
        </div>
        <div
          className="h-96 w-full bg-cover bg-center "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg)",
            // filter: "blur(0px) brightness(0.9) contrast(1)",
          }}
        />
      </div>
      <div>
        <div className="w-full mb-20 bg-green-500 h-24 flex justify-between px-28 items-center ">
          <div className="text-white font-bold text-3xl ">
            Green Innovation Meets Finance
          </div>
          <div className="flex gap-5 text-white font-bold">
            <div>Secure Online Banking</div>
            <div>Invest Sustainably</div>
          </div>
        </div>
      </div>
      <RightHome
        title="E-Banking Solutions "
        content="Experience seamless and eco-friendly banking with our intuitive online banking platform. Manage your finances conveniently while reducing paper waste and carbon emissions.
        Explore our cutting-edge E-Banking solutions. Enjoy convenient, eco-friendly banking from anywhere, anytime. Let's make digital banking the green way. "
        imageUrl1="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg"
        imageUrl2="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg"
        linkUrl="/E-Banking"
      />
      <LeftHome
        title="Green Investment Opportunities "
        content="Invest in a sustainable future with our range of green investment opportunities. Grow your wealth while supporting environmentally friendly projects and initiatives that make a positive impact on the planet."
        imageUrl1="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg"
        imageUrl2="https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg"
        linkUrl="/Green_Investment"
      />
      <RightHome
        title="Sustainable Credit Solutions "
        content="Access responsible financing solutions tailored to your needs. Whether it's a personal loan for eco-friendly home improvements or a sustainable credit card with competitive rates, we're here to help you make responsible financial decisions."
        imageUrl1="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
        imageUrl2="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/CreditHub"
      />
      <LeftHome
        title="Impact Calculator: Measure Your Influence"
        content="Use our deposit impact calculator to see the real-world impact of your savings. Understand how your money can contribute to positive environmental and social change, empowering you to make informed financial choices that align with your values."
        imageUrl1="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/Impact"
      />
      <RightHome
        title="Carbon Offset Tracker: Neutralize Your Footprint"
        content="Take control of your carbon footprint with our carbon offset tracker. Monitor and offset your emissions by supporting certified carbon offset projects, helping you neutralize your impact on the environment and contribute to a greener future."
        imageUrl1="https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg"
        linkUrl="/CarbonCoin"
      />
      <Testimonial />

      <About />
    </div>
  );
};

export default Home;
