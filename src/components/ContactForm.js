import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    gymName: '',
    location: '',
    name: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form data logic here
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-10 px-8">
       {/* Flex container to align text and form side by side */}
       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* Text section */}
        <div className="text-left md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">Want to install FitSnap AI Camera in your GYM .Please submit your details below.</h1>
          <p className="text-lg mb-6">Want to install FitSnap AI Camera in your GYM ? Please submit your details below.</p>
        </div>
        
        {/* Form section */}
        <div className="w-full md:w-1/2">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
              <input
                className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 outline-none placeholder-gray-400 focus:border-blue-500"
                type="text"
                name="gymName"
                placeholder="Name Of Gym"
                value={formData.gymName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 outline-none placeholder-gray-400 focus:border-blue-500"
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 outline-none placeholder-gray-400 focus:border-blue-500"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <input
                className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 outline-none placeholder-gray-400 focus:border-blue-500"
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 outline-none placeholder-gray-400 focus:border-blue-500"
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="text-left">
              <button
                className="bg-white text-black px-4 py-2 font-bold hover:bg-blue-600 rounded-full"
                type="submit"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    {/* Footer Section */}
    <footer className="bg-black text-white w-full mt-8 py-8">
        <div className="flex flex-col md:flex-row justify-around text-left space-y-4 md:space-y-0 gap-6">
          {/* Left section */}
          <div className='text-left'>
            <h2 className="text-2xl font-bold mb-4">Get FitSnap</h2>
            <p>Be the first to test the AI personal trainer! Stay updated by joining our mailing list.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Social icons */}
              <a href="#" className="text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Center section */}
          <div className='text-left'>
          <div>
            <h2 className="text-2xl font-bold mb-4">Download the App</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Android - Google Play Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iOS - Apple App Store
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className=" mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Etiam consequat sem ullamcorper, euismodmetus sit</p>
          <p>+91 0000000000</p>
        </div> 
          </div>
          

          {/* Right section */}
          <div className='tetx-left'>
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
       {/*  <div className="text-center mt-8">
          <p>Contact</p>
          <p>Etiam consequat sem ullamcorper, euismodmetus sit</p>
          <p>+91 0000000000</p>
        </div> */}
      </footer>
    </div>
  );
};

export default ContactForm;
