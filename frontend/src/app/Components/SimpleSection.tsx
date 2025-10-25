import React from "react";
import Image from "next/image";
const SimpleSection = () => {
  return (
    <section className="simple_section flex items-center justify-center">
      <div className="container">
        <div className="simple_wrap">
          <div className="simple_content_wrap">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="simple_content">
                  <h2 className="text-3xl sm:text-5xl md:text-4xl font-bold font-playfair">
                    The Simple Solution to Modern Lifestyle Health Issues
                  </h2>
                  <p className="text-gray-700 mb-6">
                    From long hours to missed meals, we understand how wellness
                    gets pushed aside. NeoGreens is our answer to that. Backed
                    by science, grounded in nature, and made to meet you where
                    you are.
                  </p>
                  <a
                    href="https://neogreens.com/about-us/"
                    target="_self"
                    className="inline-block bg-[#efecd6] rounded-full text-black font-medium py-4 px-10 transition duration-300 hover:bg-transparent border border-[#efecd6]
  hover:text-[#efecd6]"
                  >
                    <span>Our Story</span>
                  </a>
                </div>
              </div>
              {/* Right Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="simple_img_main relative w-full max-w-lg md:max-w-full">
                  <Image
                    className="desktop_img rounded-lg shadow-lg w-full h-auto"
                    src="/images/simple.png"
                    width={900}
                    height={500}
                    alt="simple"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSection;
