"use client";
import React from "react";
import Image from "next/image";

const NatureCards = () => {
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
    <div className="flex flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`bg-white shadow-lg rounded-lg p-6 mx-4 sm:mx-6 lg:mx-8 ${
            index === 0 ? "active" : ""
          }`}
          style={{ position: "sticky", top: "15vh", zIndex: 1000 + index }}
        >
          <div className="flex items-center gap-4">
            <Image
              src={card.icon}
              alt={`${card.title} icon`}
              width={60}
              height={60}
              className="object-contain"
              sizes="(max-width: 768px) 50px, 60px"
              priority={index === 0}
            />
            <div>
              <h5 className="font-semibold text-lg sm:text-xl text-gray-900">
                {card.title}
              </h5>
              <p className="text-sm sm:text-base text-gray-600">{card.desc}</p>
            </div>
          </div>

          {/* Desktop Image */}
          <Image
            className="hidden lg:block mt-4 w-full h-auto"
            src={card.imgDesktop}
            alt={`${card.title} desktop illustration`}
            width={300}
            height={250}
            sizes="(min-width: 1024px) 300px, 100vw"
            priority={index === 0}
          />

          {/* Mobile Image */}
          <Image
            className="block lg:hidden mt-4 w-full h-auto"
            src={card.imgMobile}
            alt={`${card.title} mobile illustration`}
            width={300}
            height={250}
            sizes="(max-width: 1023px) 100vw, 300px"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default NatureCards;
