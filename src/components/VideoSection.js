import React from 'react';

const VideoSection = () => {
  return (
    <>
    <header className="text-center py-8 leading-loose">
      <h1 className="text-5xl font-bold">LOREM IPSUM</h1>
      <p className="text-gray-600 mt-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
    </header>
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-6 flex flex-col items-center lg:flex-row lg:justify-between py-10 max-w-7xl">
        {/* Left Text */}
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold">LOREM IPSUM<br/> DOLOR SIT AMET,</h2>
        </div>

        {/* Right Embedded Video */}
        <div className="lg:w-1/2 flex justify-center">
          <iframe
            /* width="560"
            height="315" */
            src="https://www.youtube.com/embed/link-to-your-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section></>
    
  );
};

export default VideoSection;
