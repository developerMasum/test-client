import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-10-31T00:00:00"); // Set your target date and time here

    const updateTimer = () => {
      const currentTime = new Date();
      const timeDifference = targetDate - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/BfTyn66/markus-spiske-Mb-G7kw-Wpt-II-unsplash.jpg")',
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/4">
          <div className="card bg-primary p-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              Campaign starts in
            </h2>
            <div className="timer-values">
              <div>
                <span className="text-red-600 text-3xl font-bold">
                  {timeRemaining.days}
                </span>
                <span className="text-white text-lg">days</span>
              </div>
              <div>
                <span className="text-green-600 text-3xl font-bold">
                  {timeRemaining.hours}
                </span>
                <span className="text-white text-lg">hours</span>
              </div>
              <div>
                <span className="text-blue-600 text-3xl font-bold">
                  {timeRemaining.minutes}
                </span>
                <span className="text-white text-lg">minutes</span>
              </div>
              <div>
                <span className="text-yellow-600 text-3xl font-bold">
                  {timeRemaining.seconds}
                </span>
                <span className="text-white text-lg">seconds</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4">
          <h1 className="text-5xl font-bold text-neutral-content">
            <span style={{ color: "red" }}>Appexx</span>
            <span style={{ color: "green" }}> Shoes</span>
          </h1>
          <p className="py-6 text-neutral-content">
            Welcome to Appexx Shoes! Discover the latest trends in footwear and
            step into style and comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
