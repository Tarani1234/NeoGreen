"use client";
import React from "react";
import Image from "next/image";

const NatureSection = () => {
  const cards = [
    {
      id: 1,
      icon: "/images/Brain.svg",
      title: "Feel Foggy or Unfocused?",
      desc: "Designed to support mental clarity with B12 and adaptogens.",
      imgDesktop: "/images/Glass.png",
      imgMobile: "/images/Glass.png",
    },
    {
      id: 2,
      icon: "/images/Brain(2).svg",
      title: "Bloating or Indigestion?",
      desc: "Aids digestion with probiotics and digestive enzymes.",
      imgDesktop: "/images/image-2.png",
      imgMobile: "/images/image-2.png",
    },
    {
      id: 3,
      icon: "/images/Run.svg",
      title: "Constant Energy Crashes?",
      desc: "Supports sustained energy with clean, plant-based nutrients.",
      imgDesktop: "/images/image(3).png",
      imgMobile: "/images/image(3).png",
    },
    {
      id: 4,
      icon: "/images/Jar.svg",
      title: "Busy Routines messing up nutrition?",
      desc: "One simple scoop a day keeps your essentials covered.",
      imgDesktop: "/images/image(4).png",
      imgMobile: "/images/image(4).png",
    },
    {
      id: 5,
      icon: "/images/Home.svg",
      title: "Too many supplements to choose from?",
      desc: "NeoGreens simplifies it all. Just one powder, once a day.",
      imgDesktop: "/images/image(5).png",
      imgMobile: "/images/image(5).png",
    },
    {
      id: 6,
      icon: "/images/Light.svg",
      title: "Frequent body pains and aches?",
      desc: "Takes care of essential vitamin deficiencies to support overall wellness.",
      imgDesktop: "/images/image(6).png",
      imgMobile: "/images/image(6).png",
    },
  ];

  return (
    <section className="bg-white py-10 px-6 sm:py-16 sm:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 md:sticky md:top-20">
          <h2 className="font-playfair font-semibold mb-4 text-3xl sm:text-4xl md:text-5xl text-[#172223] leading-tight">
            Backed by Nature. Built for Your Routine.
          </h2>
          <p className="mb-6 lg:text-xl sm:text-xl md:text-2xl text-[#172223] font-medium">
            NeoGreens goes where you go - from home to the office to the gym.
            One scoop a day will help you overcome all your wellness roadblocks
            with ease.
          </p>
          <button className="border border-gray-400 text-gray-400 py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition">
            Coming Soon
          </button>
          <div className="mt-6">
            <Image
              src="/images/neogreen.png"
              alt="neogreen"
              width={250}
              height={350}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl"
            />
          </div>
        </div>

        {/* Right Side - Scrollable Cards */}
        <div className="md:w-1/2 lg:max-h-[80vh] lg:overflow-y-scroll flex flex-col gap-15 pr-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="sticky bg-white rounded-2xl p-6 w-full flex flex-col gap-4"
              style={{
                top: "20px",
                transform: "scale(1)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <h5 className="font-semibold text-lg sm:text-xl text-gray-900">
                    {card.title}
                  </h5>
                  <p className="text-sm sm:text-base text-gray-600">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block mt-4 w-full">
                <Image
                  src={card.imgDesktop}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Mobile Image */}
              <div className="block lg:hidden mt-4 w-full">
                <Image
                  src={card.imgMobile}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NatureSection;