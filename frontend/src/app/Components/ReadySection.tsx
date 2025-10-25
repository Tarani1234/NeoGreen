import React from "react";
import Image from "next/image";

const ReadySection = () => {
  return (
    <section className="ready_section flex items-center justify-center py-16 lg:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-playfair leading-tight">
              When You’re Ready, <br /> NeoGreens is Here.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              One clean, simple habit to help you feel better every day.
            </p>
            <a
              href="https://neogreens.com/product-page/"
              target="_self"
              className="inline-block"
            >
              <button
                disabled
                className="border border-gray-400 text-gray-400 py-3 px-8 rounded-full font-semibold cursor-not-allowed opacity-70 transition"
              >
                Coming Soon
              </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
            <div className="ready_img_wrap lg:mt-40">
              <Image
                src="/images/Frame(1).png"
                alt="NeoGreens Frame"
                width={500}
                height={250}
                className="rounded-lg object-contain  sm:w-full w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;