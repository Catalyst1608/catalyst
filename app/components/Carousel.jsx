"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const thumbnailsRef = useRef(null);

  const images = [
    {
      src: "/banner.png",
      alt: "Digital Maps by Startup India",
      link: "/digital-maps",
    },
    { src: "/maps.png", alt: "Digital Maps", link: "/digital-maps" },
    { src: "/maarg.png", alt: "Pitch Forward", link: "/pitch-forward" },
    { src: "/investor.png", alt: "Gen AI Exchange", link: "/gen-ai-exchange" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (thumbnailsRef.current && thumbnailsRef.current.children[currentIndex]) {
      thumbnailsRef.current.children[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const visibleThumbnails = [...images, ...images].slice(
    currentIndex,
    currentIndex + 4
  );

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-8 w-full max-w-[1120px] mb-8">
        {/* Carousel Section */}
        <div className="w-full md:w-3/4 relative overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[380px] object-cover object-center"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/15 to-transparent p-6">
            <Link href={images[currentIndex].link}>
              <span className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer text-lg font-semibold">
                Know more
              </span>
            </Link>
          </div>
        </div>

        {/* Thumbnails Section */}
        <div className="w-full md:w-1/4 flex flex-col justify-between">
          <div
            ref={thumbnailsRef}
            className="space-y-3 overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2"
          >
            {visibleThumbnails.map((image, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  index === 0
                    ? "ring-2 ring-blue-500 shadow-lg"
                    : "hover:opacity-100"
                }`}
                onClick={() =>
                  handleSlideChange((currentIndex + index) % images.length)
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  index === 0
                    ? {
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                          repeat: Infinity,
                          repeatDelay: 1,
                        },
                      }
                    : {}
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-20 object-cover rounded-lg"
                />
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

      {/* Scroll to Section */}
      <div className="bg-white rounded-full shadow-lg p-2 py-2 m-3 justify-center text-center">
        Scroll to
      </div>

      {/* Icon Section */}
      <div className="max-w-[1120px]">
        <div className="bg-white rounded-full shadow-lg p-2 overflow-x-auto justify-center text-center">
          <div className="flex space-x-8 px-4">
            {icons.map(({ Icon, text }, index) => (
              <div key={index} className="relative group">
                {/* Button with Icon */}
                <button className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
                  <Icon className="w-6 h-6 text-orange-500" />
                </button>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
