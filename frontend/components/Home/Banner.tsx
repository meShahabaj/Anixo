"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Software Solutions",
    subtitle:
      "We build scalable systems that improve operations and support long-term growth.",
  },
  {
    title: "Web & Mobile Applications",
    subtitle:
      "Secure, high-performance platforms designed for reliability and scale.",
  },
  {
    title: "AI & Automation",
    subtitle:
      "Practical automation that reduces costs and improves decision-making.",
  },
];


const SLIDE_DURATION = 5000;

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden text-white
        h-[60vh] min-h-[420px]
        md:h-[70vh] md:min-h-[520px]
        lg:h-[80vh]
      "
    >
      <div className="absolute inset-0 bg-black z-0">
        <div className="max-w-7xl mx-auto h-full px-5 flex flex-col items-center justify-center">
          <div
            className={`
              text-center max-w-3xl transition-all duration-300
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-lg text-white/90 max-w-2xl mx-auto">
              {slides[current].subtitle}
            </p>


          </div>
          <div className="mt-8 animate-float">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Let's Connect
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
