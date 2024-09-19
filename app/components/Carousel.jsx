'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, FileText, Settings, Users, QrCode, Target } from "lucide-react";

const icons = [
  { Icon: Clock, text: "Time" },
  { Icon: FileText, text: "Documents" },
  { Icon: Settings, text: "Settings" },
  { Icon: Users, text: "Users" },
  { Icon: QrCode, text: "QR Code" },
  { Icon: Target, text: "Target" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/c-3.png",
      alt: "Digital Maps by Startup India",
      link: "https://www.instagram.com/startupindia.gov.in/",
    },
    {
      src: "/c-1.png",
      alt: "Digital Maps",
      link: "https://www.startupindia.gov.in/digital-map/maps",
    },
    {
      src: "/c-2.png",
      alt: "Pitch Forward",
      link: "https://maarg.startupindia.gov.in/",
    },
    {
      src: "/iprn.png",
      alt: "Gen AI Exchange",
      link: "https://investorconnect.startupindia.gov.in/",
    },
    {
      src: "/c-5.png",
      alt: "Gen AI Exchange",
      link: "https://investorconnect.startupindia.gov.in/",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full min-h-screen pt-7">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-90"
        style={{
          backgroundImage: "url('/web-bg.png_raw=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "106vh",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-8">
        {/* Carousel Section */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4 relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm">
            {/* 16:9 aspect ratio container */}
            <div className="relative pt-[56.25%]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <Link href={images[currentIndex].link}>
                <span className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer text-lg font-semibold">
                  Know more
                </span>
              </Link>
            </div>
          </div>

          {/* Thumbnails Section */}
          <div className="w-full md:w-1/4 flex flex-col justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="space-y-3 overflow-y-auto max-h-[55vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-2 ring-blue-500 shadow-lg"
                      : "hover:opacity-100"
                  }`}
                  onClick={() => handleSlideChange(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    index === currentIndex
                      ? {
                          scale: [1, 1.1, 1],
                          // transition: {
                          //   duration: 0.5,
                          //   ease: "easeInOut",
                          //   times: [0, 0.5, 1],
                          //   repeat: Infinity,
                          //   repeatDelay: 1,
                          // },
                        }
                      : {}
                  }
                >
                  {/* 16:9 aspect ratio container for thumbnails */}
                  <div className="relative pt-[56.25%]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  handleSlideChange(
                    (currentIndex - 1 + images.length) % images.length
                  )
                }
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
              >
                &#9664;
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  handleSlideChange((currentIndex + 1) % images.length)
                }
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
              >
                &#9654;
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          {/* Scroll to Section */}
          <div className="bg-white backdrop-blur-sm rounded-full shadow-lg p-2 py-2 mb-4 text-center text-black">
            Scroll to
          </div>

          {/* Icon Section */}
          <div className="bg-white backdrop-blur-sm rounded-full shadow-lg p-2 overflow-x-auto">
            <div className="flex justify-center space-x-8 px-4">
              {icons.map(({ Icon, text }, index) => (
                <div key={index} className="relative group">
                  {/* Button with Icon */}
                  <button className="p-3 rounded-full hover:bg-orange-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-200">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
