import React from "react";

const BanCardsSection = () => {
  const cards = [
    {
      img: "https://neogreens.com/wp-content/uploads/2025/06/Gluten-free.svg",
      title: "Gluten-Free",
    },
    {
      img: "https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg",
      title: "100% Vegan",
    },
    {
      img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg",
      title: "Organic",
    },
    {
      img: "https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg",
      title: "Zero Synthetic Nutrients",
    },
  ];

  return (
    <section className="ban_cards_section bg-background py-4">
      <div className="container mx-auto px-6">
        <ul className="flex justify-center items-center gap-15 flex-wrap">
          {cards.map((card, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center text-center md:text-left gap-2"
            >
              <img src={card.img} alt={card.title} className="mb-2 w-15 h-15" />
              <h5 className="text-lg font-medium ml-4">{card.title}</h5>
              {/* Render dot only if not the last item */}
              {index !== cards.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-black ml-4 md:ml-4 mt-1 md:mt-0"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BanCardsSection;
