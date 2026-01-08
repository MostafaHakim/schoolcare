import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { addDays, format, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS_TO_SHOW = 7;
const CENTER_INDEX = Math.floor(DAYS_TO_SHOW / 2);

const CalendarHeader = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [startDate, setStartDate] = useState(
    addDays(selectedDate, -CENTER_INDEX)
  );

  const containerRef = useRef(null);
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef(null);

  const days = Array.from({ length: DAYS_TO_SHOW }, (_, i) =>
    addDays(startDate, i)
  );

  // Handle manual scroll
  const handleScroll = useCallback(() => {
    if (!containerRef.current || isManualScroll.current) return;

    isManualScroll.current = true;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const itemWidth = 72; // w-12 (48px) + gap-12 (48px) = 96px, but let's approximate

      // Find which date is closest to center
      const centerPosition = scrollLeft + containerWidth / 2;
      const itemIndex = Math.round(centerPosition / itemWidth);

      if (itemIndex >= 0 && itemIndex < days.length) {
        const clickedDate = days[itemIndex];
        setSelectedDate(clickedDate);
      }

      isManualScroll.current = false;
    }, 150); // Debounce time
  }, [days]);

  // When selectedDate changes, update startDate to keep it centered
  useEffect(() => {
    setStartDate(addDays(selectedDate, -CENTER_INDEX));
  }, [selectedDate]);

  // Scroll active date into view (only when not manual scrolling)
  useEffect(() => {
    if (isManualScroll.current) return;

    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const itemWidth = 72; // Approximate width of each item

      // Calculate scroll position to center the selected date
      const scrollPosition =
        CENTER_INDEX * itemWidth - containerWidth / 2 + itemWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [startDate]);

  const handleDateClick = (date) => {
    isManualScroll.current = false;
    setSelectedDate(date);
  };

  const handlePrev = () => {
    isManualScroll.current = false;
    setSelectedDate(addDays(selectedDate, -1));
  };

  const handleNext = () => {
    isManualScroll.current = false;
    setSelectedDate(addDays(selectedDate, 1));
  };

  const handleToday = () => {
    isManualScroll.current = false;
    setSelectedDate(today);
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm px-4 py-4 grid grid-cols-2 lg:flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between ">
      {/* Month */}
      <h2 className="text-lg font-semibold text-gray-800 whitespace-nowrap col-span-1 order-1">
        {format(selectedDate, "MMMM yyyy")}
      </h2>

      {/* Dates - Scrollbar hidden */}
      <div className="relative flex-1  max-w-2xl mx-auto col-span-1 order-3 lg:order-2">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex i gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide px-1 p-2 cursor-grab active:cursor-grabbing"
        >
          {days.map((date, index) => {
            const isActive = isSameDay(date, selectedDate);
            const isToday = isSameDay(date, today);

            return (
              <motion.button
                key={date.toISOString()}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDateClick(date)}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className={`flex-shrink-0 w-8 sm:w-10 md:w-12 h-20 rounded-full flex flex-col items-center justify-center text-sm transition-all duration-300 relative
                  ${
                    isActive
                      ? "bg-gradient-to-tl from-violet-800 to-[#5777F6] text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100"
                  } ${isToday && !isActive ? "border border-purple-300" : ""}`}
              >
                <span
                  className={`font-medium ${isActive ? "font-semibold" : ""}`}
                >
                  {format(date, "dd")}
                </span>
                <span
                  className={`text-xs ${
                    isActive ? "opacity-90" : "opacity-70"
                  }`}
                >
                  {format(date, "EE")}
                </span>
                {isToday && !isActive && (
                  <div className="absolute bottom-2 w-1 h-1 rounded-full bg-purple-500" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Center indicator line - optional */}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 justify-end col-span-1 order-2 lg:order-3">
        <button
          onClick={handlePrev}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={handleToday}
          className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors"
        >
          Today
        </button>

        <button
          onClick={handleNext}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
