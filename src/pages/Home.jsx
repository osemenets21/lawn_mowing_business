import React, { useState } from "react";

const services = {
  Cleanliness: {
    1: require("../images/services/cleanliness/1.JPEG"),
    2: require("../images/services/cleanliness/2.JPEG"),
    3: require("../images/services/cleanliness/3.JPEG"),
  },
  GreeneryLandscaping: {
    1: require("../images/services/greenery_landscaping/1.JPEG"),
    2: require("../images/services/greenery_landscaping/2.JPEG"),
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
    1: require("../images/services/autumn_care/1.JPEG"),
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

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <main>
      <div className="w-full max-w-7xl p-5 pb-5 mx-auto gap-5 sm:columns-1 md:columns-2 lg:columns-3 space-y-5">
        <img alt="gallery" src={services.AutumnCare[2]} className="big-pic"/>
        <img alt="gallery" src={services.CrystalPonds[2]} className="small-pic"/>
        <img alt="gallery" src={services.Cleanliness[1]} className="small-pic"/>
        <img alt="gallery" src={services.BasementRefresh[1]} className="big-pic"/>
        <img alt="gallery" src={services.GreeneryLandscaping[3]} className="big-pic "/>
        <img alt="gallery" src={services.DebrisRemoval[1]} className="small-pic"/>
      </div>

     

      <div className="flex justify-center mt-6">
        <button
          className="show-more-btn text-white font-bold py-2 px-10"
          onClick={toggleShowMore}
        >
          {showMore ? "hide more" : "show more"}
        </button>
      </div>

      {/* {showMore && (
        <div className="container lg:px-38 mt-6">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="service-block w-1/2 p-1 md:p-2">
                <img
                  src={services.GutterCare[1]}
                  alt="gallery"
                  className="small-image block h-full w-full rounded-lg object-cover object-center"
                />
                 <h3>gutter care</h3>
              </div>
              <div className="service-block w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="small-image block h-full w-full rounded-lg object-cover object-center"
                  src={services.Handyman[1]}
                />
                <h3>handyman</h3>
              </div>
              <div className="service-block w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="big-image block h-full w-full rounded-lg object-cover object-center"
                  src={services.HolidayMagic[1]}
                />
                  <h3>holiday magic</h3>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="service-block w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="big-image block h-full w-full rounded-lg object-cover object-center"
                  src={services.MovingServices[1]}
                />
                <h3>moving services</h3>
              </div>
              <div className="service-block w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="small-image block h-full w-full rounded-lg object-cover object-center"
                  src={services.PowerWashPro[1]}
                />
                <h3>power wash pro</h3>
              </div>
              <div className="service-block w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="small-image block h-full w-full rounded-lg object-cover object-center"
                  src={services.WinterCare[1]}
                />
                 <h3>winter care</h3>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </main>
  );
};

export default Home;
