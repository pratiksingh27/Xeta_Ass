// src/components/ThingsYouNeed.js
import React from 'react';
import img1 from "../img/needImg.jpg"

const ThingsYouNeed = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">THINGS YOU NEED</h2>
      </div>

      {/* Image with Labels */}
      <div className="md:relative mx-auto">
        <img
          src={img1}
          alt="Workout Equipment"
          className="w-full h-auto max-h-[900px] object-cover"
        />
        
        {/* Labels */}
        <div className="absolute top-12 left-96 hidden md:flex">
          <div className="flex items-center gap-2">
          <p className="ml-2 text-black text-sm">Headphones</p>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            
          </div>
        </div>
        
        <div className="absolute bottom-28 right-96 hidden md:flex">
          <div className="flex items-center">
          <p className="ml-2 text-black text-sm">A Tab With FitSnap</p>
            <span className="w-3 h-3 bg-black rounded-full"></span>
           
          </div>
        </div>

        <div className="absolute bottom-10 left-96 hidden md:flex">
          <div className="flex items-center">
          <p className="ml-2 text-black text-sm">Fitness Band</p>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            
          </div>
        </div>
      </div>

      {/* Revolutionize Text */}
      <div className="text-center py-4">
        <h2 className="md:text-5xl text-2xl font-light italic tracking-widest">REVOLUTIONIZE YOUR FITNESS</h2>
      </div>

      {/* Feature List and Download Section */}
      <div className='py-10'>
      <div>
      <h2 className="text-4xl font-bold mb-10">LOREM IPSUM</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16 max-w-5xl mx-auto">
        {/* Features List */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
          <ul className="text-left space-y-2">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> 24/7 AI Trainer
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Unlimited Access
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> 150+ Exercises
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Customized Plans
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Advanced AI Camera
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Voice Feedback
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Real-Time Feedback
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Rep Counter
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Saved Workout Videos
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Activity History
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Voice Commands
            </li>
          </ul>
        </div>

        {/* Download Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-lg mb-4">
            To benefit from all the features of FitSnap, the ideal tablet featuring 8GB RAM and an immersive 11-inch screen should offer a balance of performance and display quality.
          </p>
          <a href="#" className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md">
            Download Brochure
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ThingsYouNeed;
