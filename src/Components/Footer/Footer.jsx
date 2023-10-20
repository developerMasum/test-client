import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-white text-black p-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section (3/4) */}
        <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Footer Cards */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg">Fast & Free Shipping</h4>
            <p>Get your orders delivered quickly and for free.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg">Super Deals</h4>
            <p>Discover amazing discounts on our products.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg">Apex Rewards</h4>
            <p>Earn rewards and benefits as an Apex member.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg">Sign up and Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg">About Apex</h4>
            <p>Learn more about our company and its history.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg">Help</h4>
            <p>Get assistance with your orders and inquiries.</p>
          </div>
        </div>

        {/* Right Section (1/4) */}
        <div className="md:w-1/4 flex justify-center items-center">
          {/* Payment Logos */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg">Accepted Payments</h4>
            {/* Add your payment method logos here */}
            <div className="mx-10">
              <img
                src="https://i.ibb.co/6bpdj8d/a6402468-6140-4958-bc85-1d4db76d9b1a.png"
                alt="Payment Method 1"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
