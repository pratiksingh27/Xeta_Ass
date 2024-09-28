import React from "react";
import img from "../img/profileImg.jpg";

const testimonials = [
  {
    name: "Riya Awasthi",
    text: "I LOVE the FitSnap. To train my daily exercise, it offers a wide range of categories that fit my needs.",
    image: img,
  },
  {
    name: "Riya Awasthi",
    text: "I LOVE the FitSnap. To train my daily exercise, it offers a wide range of categories that fit my needs.",
    image: img,
  },
  {
    name: "Riya Awasthi",
    text: "I LOVE the FitSnap. To train my daily exercise, it offers a wide range of categories that fit my needs.",
    image: img,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          WHAT OUR CLIENTS SAY
          <br /> ABOUT US
        </h2>

        {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-60">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg">
              <p className="text-gray-800 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 mr-4"
                />
                <div className="text-left">
                  <p className="text-lg font-bold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 rounded-lg flex flex-col justify-between h-60"
            >
              {/* Text at the top */}
              <p className="text-gray-800 mb-4">{testimonial.text}</p>

              {/* Image and Name at the bottom */}
              <div className="flex items-center justify-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 mr-4"
                />
                <div className="text-left">
                  <p className="text-lg font-bold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
