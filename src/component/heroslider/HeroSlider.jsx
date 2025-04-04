import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-20 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500"
      onClick={onClick}
    >
      <FaChevronRight size={20} style={{ strokeWidth: 0.5 }} />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-20 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500"
      onClick={onClick}
    >
      <FaChevronLeft size={20} style={{ strokeWidth: 0.5 }} />
    </div>
  );
}

export default function SimpleSlider() {
  const slides = [
    {
      subtitle: "Smart Products",
      title: "Winter Offer 2024 Collection",
      image: "/banner2.png",
    },
    {
      subtitle: "New Arrivals",
      title: "Spring 2024 Collection",
      image: "/banner1.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass:
      "slick-dots absolute bottom-20 left-1/2 transform -translate-x-1/2",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#F0E0FF]">
      <Slider {...settings} className=" mx-auto w-full">
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col-2 max-sm:flex-col max-sm:text-center items-center justify-center h-auto max-w-7xl mx-auto">
              <div className="md:w-1/2 md:text-left max-sm:pt-10 sm:pl-20 lg:pl-30 xl:pl-40 transition-opacity duration-500 slide-in">
                <h3 className="max-lg:text-xl lg:text-3xl mb-3 md:mb-8">
                  {slide.subtitle}
                </h3>
                <h1 className="xl:text-6xl sm:text-4xl lg:text-5xl mb-6 md:mb-10 leading-20 max-lg:leading-15 pr">
                  {slide.title}
                </h1>
                <Link href="#shop_now">
                  <span className="border border-gray-600 w-full py-4 px-8 cursor-pointer">
                    Shop Now
                  </span>
                </Link>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center transition-opacity duration-500 image-slide-up pt-10">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}: ${slide.title}`}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
