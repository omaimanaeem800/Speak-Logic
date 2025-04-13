import React, { useState } from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";

const books = [book1, book2, book3, book4, book5];

const BookCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // center index
  const totalBooks = books.length;

  const moveLeft = () => {
    setActiveIndex((prev) => (prev - 1 + totalBooks) % totalBooks);
  };

  const moveRight = () => {
    setActiveIndex((prev) => (prev + 1) % totalBooks);
  };

  return (
    <div className="w-full h-[80vh] bg-[#d0f7d8] flex items-center justify-center overflow-hidden relative">
      <div className="relative w-full max-w-5xl h-96 flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          {books.map((book, index) => {
            const angle = (360 / totalBooks) * index; // calculate angle for rotation
            const distance = 250; // distance from the center

            const rotateY = angle - (activeIndex * (360 / totalBooks)); // calculate the Y-axis rotation for each card
            const zIndex = totalBooks - Math.abs(activeIndex - index); // Adjust z-index based on active card

            const scale = activeIndex === index ? 1.3 : 1; // Increase scale for the active book
            const boxShadow = activeIndex === index ? "0 0 30px rgba(0, 0, 0, 0.3)" : "0 0 10px rgba(0, 0, 0, 0.1)"; // Stronger shadow for the active book
            const border = activeIndex === index ? "3px solid #007BFF" : "none"; // Add border to the active book

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  transform: `rotateY(${rotateY}deg) translateZ(${distance}px) scale(${scale})`,
                  zIndex,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="w-48 h-72 bg-white shadow-xl rounded-xl overflow-hidden"
                  style={{
                    boxShadow: boxShadow,
                    border: border,
                    transition: "all 0.7s ease-in-out", // Smooth transition for boxShadow and border
                  }}
                >
                  <img
                    src={book}
                    alt={`Book ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <button
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 mx-4"
          onClick={moveLeft}
        >
          ◀
        </button>
        <button
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 mx-4"
          onClick={moveRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default BookCarousel;
