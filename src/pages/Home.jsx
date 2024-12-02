import React, { useState, useEffect, useRef } from "react";
import ClientCounter from "../components/ClientsCounter";
import ClientCarousel from "./ClientCarousel";

const services = {
  Cleanliness: {
    1: require("../images/services/cleanliness/1.JPEG"),
    2: require("../images/services/cleanliness/2.JPEG"),
    3: require("../images/services/cleanliness/3.JPEG"),
  },
  GreeneryLandscaping: {
    1: require("../images/services/greenery_landscaping/1.JPEG"),
    2: require("../images/services/greenery_landscaping/2.jpg"),
    3: require("../images/services/greenery_landscaping/3.JPG"),
  },
  CrystalPonds: {
    1: require("../images/services/crystal_ponds/1.JPEG"),
    2: require("../images/services/crystal_ponds/2.jpg"),
    3: require("../images/services/crystal_ponds/3.JPEG"),
  },
  BasementRefresh: {
    1: require("../images/services/basement_refresh/1.JPEG"),
    2: require("../images/services/basement_refresh/2.JPEG"),
    3: require("../images/services/basement_refresh/3.JPEG"),
  },
  PowerWashPro: {
    1: require("../images/services/power_wash_pro/1.JPEG"),
    2: require("../images/services/power_wash_pro/2.JPEG"),
    3: require("../images/services/power_wash_pro/3.JPG"),
  },
  AutumnCare: {
    1: require("../images/services/autumn_care/1.jpg"),
    2: require("../images/services/autumn_care/2.JPG"),
    3: require("../images/services/autumn_care/3.JPG"),
  },
  GutterCare: {
    1: require("../images/services/gutter_care/1.JPG"),
    2: require("../images/services/gutter_care/2.JPEG"),
    3: require("../images/services/gutter_care/1.JPG"),
  },
  DebrisRemoval: {
    1: require("../images/services/debris_removal/1.JPEG"),
    2: require("../images/services/debris_removal/2.JPEG"),
    3: require("../images/services/debris_removal/3.JPEG"),
  },
  HolidayMagic: {
    1: require("../images/services/holiday_magic/1.JPG"),
    2: require("../images/services/holiday_magic/2.JPG"),
    3: require("../images/services/holiday_magic/3.JPG"),
  },
  WinterCare: {
    1: require("../images/services/winter_care/1.JPEG"),
    2: require("../images/services/winter_care/2.JPEG"),
    3: require("../images/services/winter_care/3.JPEG"),
  },
  Handyman: {
    1: require("../images/services/handyman/1.JPEG"),
    2: require("../images/services/handyman/2.jpg"),
    3: require("../images/services/handyman/3.JPEG"),
  },
  MovingServices: {
    1: require("../images/services/moving/1.JPG"),
    2: require("../images/services/moving/2.JPG"),
    3: require("../images/services/moving/3.JPEG"),
  },
};

const photos = [
  {
    1: "gutter care",
    2: require("../images/services/gutter_care/1.JPG"),
  },
  {
    1: "debris removal",
    2: require("../images/services/debris_removal/1.JPEG"),
  },
  {
    1: "holiday magic",
    2: require("../images/services/holiday_magic/1.JPG"),
  },
  {
    1: "winter care",
    2: require("../images/services/winter_care/1.JPEG"),
  },
  {
    1: "handyman",
    2: require("../images/services/handyman/1.JPEG"),
  },
  {
    1: "moving",
    2: require("../images/services/moving/1.JPG"),
  },
];

const photos2 = [
  {
    1: "cleanliness",
    2: require("../images/services/cleanliness/1.JPEG"),
  },
  {
    1: "greenery landscaping",
    2: require("../images/services/greenery_landscaping/1.JPEG"),
  },
  {
    1: "crystal ponds",
    2: require("../images/services/crystal_ponds/1.JPEG"),
  },
  {
    1: "basement refresh",
    2: require("../images/services/basement_refresh/1.JPEG"),
  },
  {
    1: "power wash pro",
    2: require("../images/services/power_wash_pro/1.JPEG"),
  },
  {
    1: "autumn care",
    2: require("../images/services/autumn_care/1.jpg"),
  },
];

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const autoScrollRef1 = React.useRef(null);
  const autoScrollRef2 = React.useRef(null);
  const touchRef1 = React.useRef(null);
  const touchRef2 = React.useRef(null);
  const maxIndex = Math.ceil(photos.length / 2) - 1;

  useEffect(() => {
    const maxIndex1 = Math.ceil(photos.length / 2) + 1; // Враховуємо 2 елементи в рядку
    const maxIndex2 = Math.ceil(photos2.length / 2) + 1;

    startAutoScroll(setCurrentIndex1, maxIndex1, autoScrollRef1);
    startAutoScroll(setCurrentIndex2, maxIndex2, autoScrollRef2);

    return () => {
      stopAutoScroll(autoScrollRef1);
      stopAutoScroll(autoScrollRef2);
    };
  }, []);

  const startAutoScroll = (setter, maxIndex, ref) => {
    if (ref.current) {
      clearInterval(ref.current); 
    }

    ref.current = setInterval(() => {
      setter((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; 
        }
        return prevIndex + 1; 
      });
    }, 8000);
  };

  const stopAutoScroll = (ref) => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null; // Скидаємо значення рефа
    }
  };

  const handleTouchStart = (e, ref) => {
    ref.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, ref, setter, maxIndex) => {
    e.currentTarget.startX = null; // Скидаємо початкову позицію

    setter((currentIndex) => {
      if (currentIndex >= maxIndex) {
        setter(0); // Повертаємося на перший слайд
        startAutoScroll(setter, maxIndex, ref); // Відновлюємо авто-скрол
      } else {
        startAutoScroll(setter, maxIndex, ref); // Відновлюємо авто-скрол
      }
      return currentIndex;
    });
  };

  const handleTouchMove = (
    e,
    ref,
    currentIndex,
    currentIndexSetter,
    maxIndex
  ) => {
    if (!ref.current) return;

    const deltaX = e.touches[0].clientX - ref.current;

    if (Math.abs(deltaX) < 50) return;

    if (deltaX > 0) {
      currentIndexSetter((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (deltaX < 0) {
      currentIndexSetter((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return maxIndex; 
        }
        return prevIndex + 1;
      });
    }

    ref.current = null; 
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileView(true);
        setShowMore(false)
      } else {
      }

      if (window.innerWidth > 768) {
        setMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
       <main>
      {mobileView ? (
        <div>
          <div className="relative">
            {/* Карусель фотографій 1 */}
            <div
              className="overflow-x-scroll scroll-snap-x-mandatory flex"
              onTouchStart={(e) => handleTouchStart(e, touchRef1)}
              onTouchMove={(e) =>
                handleTouchMove(
                  e,
                  touchRef1,
                  currentIndex1,
                  setCurrentIndex1,
                  Math.ceil(photos.length / 2) - 1
                )
              }
              onTouchEnd={(e) =>
                handleTouchEnd(
                  e,
                  autoScrollRef1,
                  setCurrentIndex1,
                  Math.ceil(photos.length / 2) - 1
                )
              }
            >
              <div
                className="flex collage-container transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex1 * 50}%)`,
                }}
              >
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative w-1/2 flex-shrink-0 px-1"
                  >
                    <div className="image-wrapper">
                      <img
                        src={photo[2]}
                        alt={photo[1]}
                        className="object-cover rounded-lg small-pic"
                      />
                      <div className="overlay">
                        <h3 className="image-title">{photo[1]}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-3">
            {/* Карусель фотографій 2 */}
            <div
              className="overflow-x-scroll scroll-snap-x-mandatory flex"
              onTouchStart={(e) => handleTouchStart(e, touchRef2)}
              onTouchMove={(e) =>
                handleTouchMove(
                  e,
                  touchRef2,
                  currentIndex2,
                  setCurrentIndex2,
                  Math.ceil(photos2.length / 2) - 1
                )
              }
              onTouchEnd={(e) =>
                handleTouchEnd(
                  e,
                  autoScrollRef2,
                  setCurrentIndex2,
                  Math.ceil(photos2.length / 2) - 1
                )
              }
            >
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex2 * 50}%)`,
                }}
              >
                {photos2.map((photo, index) => (
                  <div
                    key={index}
                    className="relative w-1/2 flex-shrink-0 px-1"
                  >
                    <div className="image-wrapper">
                      <img
                        src={photo[2]}
                        alt={photo[1]}
                        className="object-cover rounded-lg small-pic"
                      />
                      <div className="overlay">
                        <h3 className="image-title">{photo[1]}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full max-w-7xl p-5 pb-5 mx-auto gap-5 md:columns-2 lg:columns-3 space-y-5">
            <img
              alt="gallery"
              src={services.AutumnCare[2]}
              className="big-pic"
            />
            <img
              alt="gallery"
              src={services.CrystalPonds[2]}
              className="small-pic"
            />
            <img
              alt="gallery"
              src={services.Cleanliness[1]}
              className="small-pic"
            />
            <img
              alt="gallery"
              src={services.BasementRefresh[1]}
              className="big-pic"
            />
            <img
              alt="gallery"
              src={services.GreeneryLandscaping[3]}
              className="big-pic "
            />
            <img
              alt="gallery"
              src={services.DebrisRemoval[1]}
              className="small-pic"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="show-more-btn text-white font-bold py-2 px-10"
              onClick={toggleShowMore}
            >
              {showMore ? "hide more" : "show more"}
            </button>
          </div>
        </div>
      )}

      {showMore && (
        <div className="w-full max-w-7xl p-5 pb-5 mx-auto gap-5 md:columns-2 lg:columns-3 space-y-5">
          <img alt="gallery" src={services.Handyman[1]} className="big-pic" />
          <img
            alt="gallery"
            src={services.GutterCare[1]}
            className="small-pic"
          />
          <img
            alt="gallery"
            src={services.HolidayMagic[1]}
            className="small-pic"
          />
          <img
            alt="gallery"
            src={services.MovingServices[1]}
            className="big-pic"
          />
          <img
            alt="gallery"
            src={services.PowerWashPro[1]}
            className="big-pic "
          />
          <img
            alt="gallery"
            src={services.WinterCare[1]}
            className="small-pic"
          />
        </div>
      )}

    </main>
    <ClientCounter/>
    <ClientCarousel/>
    </div>
   
  );
};

export default Home;
