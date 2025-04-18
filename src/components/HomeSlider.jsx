import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BASE_URL } from '../config';

const HomeSlider = ({setActivePage}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tagline: "Your debt our priority",
      image: "/homeSlider/1.jpeg", // Replace with your actual image
      content: (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">OUR AIM OUR VISION</h2>
          <p className="mb-4">
            At HEM, we understand the importance of financial literacy and the challenges that arise from its absence.
            We are committed to empowering our clients with the knowledge and tools to effectively manage their finances.
          </p>
          <p className="mb-4">
            We aim to be your trusted partner in the UAE, providing effective solutions to address your credit card and loan concerns.
            We work diligently to negotiate with banks and financial institutions on your behalf, aiming to create a manageable
            repayment plan and alleviate any associated social or legal pressures.
          </p>
          <p>
            We strive to regularize your cash flow and offer you financial peace of mind.
          </p>
        </div>
      )
    },
    {
      id: 2,
      tagline: "Debt counselling services in India & UAE",
      image: "/homeSlider/2.jpeg",
      content: (
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            We offer complimentary debt counseling services in the UAE to clients both within and outside the country
            who are facing overdue loan and credit card payments. Our debt management and counseling programs aim to
            assist individuals and SMEs navigating financial challenges.
          </p>
          <p className="mb-4">
            Economic fluctuations, changes in income, and unforeseen circumstances can lead to cash flow crisis where
            expenses exceed income, resulting in missed loan and credit card payments. Such situations can cause
            significant stress and negatively impact health, relationships, and credit scores.
          </p>
          <p>
            We understand the importance of financial well-being and are committed to providing you with the support
            and guidance you need to regain control of your finances.
          </p>
        </div>
      )
    },
    {
      id: 3,
      tagline: "Debt collection in India & Dubai",
      image: "/homeSlider/3.jpeg",
      content: (
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            Our team of consultants possesses over 15 years of combined experience in providing specialized debt
            collection services in Dubai. We are highly trained and skilled professionals, adept at handling various
            financial issues, including debt management, banking disputes, trade settlements, and forfeiting matters.
          </p>
          <p className="mb-4">
            Our comprehensive approach ensures that clients receive tailored solutions that address their specific needs,
            ultimately leading to successful debt recovery.
          </p>
          <p>
            We would be pleased to discuss how we can assist you further.
          </p>
        </div>
      )
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [slides.length, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ BASE_URL + slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              {slide.tagline}
            </h1>

            {/* <div className="hidden md:block bg-black bg-opacity-50 p-6 rounded-lg mb-8 text-sm md:text-base overflow-y-auto max-h-96">
              {slide.content}
            </div> */}

            <div
              onClick={()=>setActivePage('about')}
              className="bg-secondary-light md:opacity-50 hover:opacity-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 mt-4 cursor-pointer"
            >
              Read More
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 z-20 bg-black opacity-50 hover:opacity-100 text-white p-3 rounded-full transform -translate-y-1/2 cursor-pointer"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>

      <button
        className="absolute top-1/2 right-4 z-20 bg-black opacity-50 hover:opacity-100 text-white p-3 rounded-full transform -translate-y-1/2 cursor-pointer"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 cursor-pointer rounded-full opacity-50 hover:opacity-100 ${currentSlide === index ? 'bg-secondary-light' : 'bg-white bg-opacity-50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;