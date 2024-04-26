import React from 'react';

const CreditHubPage = () => {
  return (
    <div className="pt-20 pb-32 relative">
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center imgg"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/9034670/pexels-photo-9034670.jpeg)",
            filter: "blur(0px) brightness(0.7) contrast(1.2)" ,
          }}
        />
        <div className="relative z-1 text-white text-center pt-44">
          <h1 className="text-4xl font-bold mb-4">Empower Your Financial Journey</h1>
          <p className="text-lg mb-8">Accessible, Engaging, and Secure Lending Solutions</p>
        </div>
      </div>
      <div className='pt-56 px-12 text-l text-bold text-black pl-44 pr-44 text-center'>
          <h1>Welcome to our lending platform, where sustainability drives every decision. Whether you're an individual, business, or project aiming to make a meaningful impact, we're here to support you. Our tailored lending solutions ensure that every endeavor receives the necessary funding and guidance to thrive sustainably. Let's work together to turn your vision into reality.</h1>
      </div>

    <div className="pt-20 flex justify-center ">
    <div className="pl-20 pr-11 bg-yellow-200 pt-12  pb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Who can apply for a loan?</h1>
        <ul>
        <li className="mb-2">&#10003; Individuals with sustainable initiatives</li>
        <li className="mb-2">&#10003; Entrepreneurs seeking to implement eco-friendly projects</li>
        <li className="mb-2">&#10003; Businesses committed to making a positive environmental impact</li>
        <li className="mb-2">&#10003; Community leaders driving sustainability-focused initiatives</li>
        <li className="mb-2">&#10003; Projects dedicated to social or cultural sustainability</li>
        <li className="mb-2">&#10003; Anyone passionate about creating a better, more sustainable future</li>
        </ul>
    </div>
    <div className=" bg-cover loans2" style={{ backgroundImage: "url(https://images.pexels.com/photos/7768204/pexels-photo-7768204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }} />
    </div>

    <div>
        <h1 className='pt-20 text-center font-bold text-3xl'>OUR LENDING PRODUCTS</h1>
        <p className='text-center  text-l'>Lending for a Sustainable Tomorrow</p>
    </div>

    <div className='flex flex-wrap gap-6 items-center content-center pl-36 pr-36 py-11 '>
          <div className='loanbox '>
            <h1>American Express Sustainable Earn Credit Card</h1>
          </div>
          <div className='loanbox'>
            <h1>Green Business Loans</h1>
          </div>
          <div className='loanbox'>
            <h1>Raise Capital Directly from investors</h1>
          </div>
    </div>

    </div>
  );
};

export default CreditHubPage;
