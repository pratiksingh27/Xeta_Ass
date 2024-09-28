import React from "react";
import img1 from "../img/3f044dec29199b21136f83647539e774.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import video from "../img/video2.mp4"

function ChooseSection() {
  return (
    <div className=" py-10">
      <div className="text-center mb-8 leading-loose">
        <h2 className="text-3xl font-bold">WHY CHOOSE FITSNAP</h2>
        <p className="text-gray-600">GET REALTIME UPDATE WITH AI</p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-1">
        {/* First Row */}
        <div className="md:flex items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Focus on Needs"
              className="object-cover w-full md:h-auto h-60"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 bg-[#7D8DC7] h-[100%] grid items-center justify-center">
            <div>
            <h3 className="text-white text-2xl font-semibold">
              Enhanced Focus On Individual Needs
            </h3>
            <p className="text-white text-sm mt-2">
              FitSnap: Ditch Bad Form. Embrace Perfect Workout. AI Analyzes Your
              Moves In Real-Time For Flawless Fitness.
            </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center">
  {/* Text Section (now on the left) */}
  <div className="w-1/2 bg-[#5E9ED7] h-[100%] grid items-center justify-center">
    <div>
    <h3 className="text-white text-2xl font-semibold">
      Enhanced Focus On Individual Needs
    </h3>
    <p className="text-white text-sm mt-2">
      FitSnap: Ditch Bad Form. Embrace Perfect Workout. AI Analyzes Your Moves In Real-Time For Flawless Fitness.
    </p>
    </div>
  </div>

  {/* Image Section (now on the right) */}
  <div className="w-1/2">
  <video
    src={video}  // replace with your actual video link
    autoPlay
    muted
    loop
    className="w-full h-full object-cover z-0"
  />
  </div>
</div>


        {/* Third Row */}
        <div className="flex items-center ">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={img2}
              alt="Focus on Needs"
              className="object-cover w-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-1/2 bg-[#C46DA0] h-[100%] grid items-center justify-center">
           <div>
           <h3 className="text-white text-2xl font-semibold">
              Enhanced Focus On Individual Needs
            </h3>
            <p className="text-white text-sm mt-2">
              FitSnap: Ditch Bad Form. Embrace Perfect Workout. AI Analyzes Your
              Moves In Real-Time For Flawless Fitness.
            </p>
           </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex items-center ">
  {/* Text Section (now on the left) */}
  <div className="w-1/2 bg-[#69996A] h-[100%] grid items-center justify-center">
    <div>
    <h3 className="text-white text-2xl font-semibold">
      Enhanced Focus On Individual Needs
    </h3>
    <p className="text-white text-sm mt-2">
      FitSnap: Ditch Bad Form. Embrace Perfect Workout. AI Analyzes Your Moves In Real-Time For Flawless Fitness.
    </p>
    </div>
  </div>

  {/* Image Section (now on the right) */}
  <div className="w-1/2">
    <img
      src={img3}
      alt="Focus on Needs"
      className="object-cover w-full"
    />
  </div>
</div>
      </div>
    </div>
  );
}

export default ChooseSection;
