// src/components/HeroSection.js
import React from 'react';
import video from "../img/video.mp4"
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 h-screen flex flex-col items-center justify-center text-center">
      {/* Navbar */}
      {/* <nav className="absolute top-0 left-0 right-0 p-4 bg-[#FFFFFF4D] flex justify-between items-center z-20">
        <div className="text-white font-bold text-lg">FITSMAP</div>
        <div className="flex items-center justify-around space-x-4">
          <a href="#" className="text-white">Lorem ipsum</a>
          <a href="#" className="text-white">Lorem ipsum</a>
          <a href="#" className="text-white">Lorem ipsum</a>
          <a href="#" className="bg-transparent text-white border border-blue-500 px-4 py-2 rounded-full">Contact Us</a>
        </div>
      </nav> */}
      <Navbar/>

      {/* Hero Image */}
      <div className="relative w-full h-full">
      <video
    src={video}  // replace with your actual video link
    autoPlay
    muted
    loop
    className="w-full h-full object-cover z-0"
  />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Fitsnap for GYM</h1>
          <p className="text-lg mt-4 px-6 max-w-2xl">
            Welcome to the next generation of fitness! At FitSnap, we are thrilled to introduce the power of Artificial Intelligence (AI) to revolutionize your gym experience.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 w-full bg-white py-6 flex justify-around items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">50+</h2>
          <p className="text-gray-600">GYM Enrolled</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">250+</h2>
          <p className="text-gray-600">Users Enroll</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">60+</h2>
          <p className="text-gray-600">Workout Sessions</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
