"use client";
import React from "react";
import "./pages.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment: "This is an amazing service! Highly recommend it.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Weaver_bird.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "A fantastic experience from start to finish.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Weaver_bird.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment: "I loved working with this team. They are the best!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Weaver_bird.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Bob Brown",
      comment: "Highly professional and very responsive.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Weaver_bird.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="flex items-center justify-around w-[40vw] mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-10 border-2 border-white">
      <div className="bg-gray-800 text-white py-8 w-[100%]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <>
              <div
                key={testimonial.id}
                className="flex items-center bg-gray-700 p-4 rounded-lg shadow-lg"
              >
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mr-4 object-cover"
                />

                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.comment}</p>
                </div>
              </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
