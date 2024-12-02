import React, { useState } from "react";

const ClientCarousel = () => {
  const reviews = [
    require("../images/google_reviews/1.png"),
    require("../images/google_reviews/2.png"),
    require("../images/google_reviews/3.png"),
    require("../images/google_reviews/4.png"),
    require("../images/google_reviews/5.png"),
    require("../images/google_reviews/6.png"),
    require("../images/google_reviews/7.png"),
    require("../images/google_reviews/8.png"),
  ];

  const googleMapsLink = "https://maps.app.goo.gl/JMtzrY26W3TDQbjN9";

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="client-carousel">
      <h2>
        What <span>Our Clients</span> Say
      </h2>
      <div className="carousel-container">
        <button className="prev-button" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="carousel-slide">
          <img src={reviews[currentIndex]} alt={`Review ${currentIndex + 1}`} />
        </div>
        <button className="next-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="brand-container">
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          <img
            src={require("../images/google_reviews/google.png")}
            alt="google"
          />
          <span>See more reviews on Google</span>
        </a>
        <img
          className="brand-img-2"
          src={require("../images/google_reviews/brand_2.PNG")}
          alt="brand"
        />

        <img
          className="brand-img"
          src={require("../images/google_reviews/brand.png")}
          alt="brand"
        />
      </div>
    </section>
  );
};

export default ClientCarousel;
