import React from "react";
import Image from "next/image";

const EnergyContainer = () => {
  const cards = [
    {
      img: "/images/increase.svg",
      title: "Increased Energy Levels",
    },
    {
      img: "/images/improved.svg",
      title: "Improved Gut Health",
    },
    {
      img: "/images/boosted.svg",
      title: "Boosted Immunity",
    },
    {
      img: "/images/natural.svg",
      title: "Natural Detox",
    },
    {
      img: "/images/daily.svg",
      title: "Daily Nourishment",
    },
  ];

  return (
    <section className="ban_cards_section bg-background py-8 mt-10 flex justify-center items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 w-32 sm:w-36 md:w-auto"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={80}
                height={80}
                className="mb-2 object-contain"
              />
              <h5 className="text-lg font-medium">{card.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyContainer;
