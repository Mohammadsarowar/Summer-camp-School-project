import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Banner from "./Banner/Banner";

const ExtaHome = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
      
        <Banner/>
     
      
        <div>
          <h1 className="text-5xl font-bold text-blue-700">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Welcome to", "Learn Skills From Our Top Instructors"]}
            />
          </h1>
          <p className="py-6">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet
            consectetur adipiscing area we followelit.
          </p>
          <div className="flex">
            <button className="btn btn-primary mt-2">Get Started</button>
            <p className="ml-8">
              Have any Question?
              <br />
              <span className="text-2xl bold">0541502061</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtaHome;
