"use client";
import React, { useState, useEffect } from "react";

const AnnouncementBar = ({ announcements, speed = 50 }) => {
  const [position, setPosition] = useState(0);
  const [fullText, setFullText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setFullText(announcements.join("   •   ") + "    ");
  }, [announcements]);

  useEffect(() => {
    const moveText = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          if (prevPosition <= -fullText.length) {
            return 0;
          }
          return prevPosition - 1;
        });
      }
    };

    const intervalId = setInterval(moveText, speed);
    return () => clearInterval(intervalId);
  }, [fullText, speed, isPaused]);

  return (
    <div
      className="bg-indigo-600 text-white py-2 px-4 text-sm font-medium overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-live="polite"
    >
      <div
        className="whitespace-nowrap inline-block"
        style={{ transform: `translateX(${position}px)` }}
      >
        {fullText.repeat(2)}
      </div>
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-indigo-600" />
      <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-indigo-600" />
    </div>
  );
};

const App = () => {
  const newsItems = [
    "Track your patent's status: filed, approved, or pending updates!",
    "Exclusive webinar on securing and managing your intellectual property.",
    "Reminder: Submit your patent application before the deadline!",
    "New feature: Receive real-time updates on your IP filing status.",
    "Join our workshop: Protecting your brand with trademarks and copyrights.",
    "IP filing window extended! Submit your applications now.",
    "Notification alert: Check your dashboard for recent IP status changes.",
    "Free consultation: Learn how to file patents and protect your inventions.",
  ];

  return (
    <div className="font-sans">
      <AnnouncementBar announcements={newsItems} speed={30} />
    </div>
  );
};

export default App;