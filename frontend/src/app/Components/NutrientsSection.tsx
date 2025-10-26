import React from "react";
import Image from "next/image";

const NutrientsSection = () => {
  const infoList = [
    "Probiotic content",
    "Organic nutrients",
    "Scientific backing transparency",
    "Taste profile",
    "Ingredient sourcing transparency",
    "Cognitive-enhancing ingredients",
    "Gut–Brain Axis support",
    "Avoids questionable fillers (e.g., gums, stevia)",
    "Sustainability",
    "Protein quality",
    "Allergen-free",
    "Digestibility",
  ];

  // Example images for middle and other tables
  const middleImgs = Array(12).fill(
    "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"
  );
  const plantBasedImgs = [
    "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
  ];

  const animalBasedImgs = plantBasedImgs; // reuse for simplicity
  const wheyImgs = [
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
    "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg",
  ];

  return (
    <section className="nutrients_section flex items-center justify-center">
      <div className="container">
        <div className="nutrients_wrap">
          <h2>One Scoop. 60+ Nutrients. It&apos;s That Easy.</h2>

          <p className="text-xl ">
            NeoGreens is built to take the confusion out of wellness. You get
            the essentials – no synthetic ingredients, harsh formulas, or
            hidden additives. Just smart, science-backed nutrition that
            respects your time and your trust.
          </p>
          <a
            href="https://neogreens.com/product-page/"
            target="_self"
            className="secondarybtn disabledBtn"
          >
            <button className="border border-gray-400 text-gray-400 py-4 px-10 rounded-full font-semibold hover:bg-gray-100 transition">
            Coming Soon
          </button>
          </a>
        </div>

        <div className="nutrients_table_flex">
          {/* Information Table */}
          <div className="nutrients_table first_table">
            <div className="title_table">
              <h4>Information</h4>
            </div>
            <ul className="table_list">
              {infoList.map((item, idx) => (
                <li key={idx}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Table */}
          <div className="nutrients_table middle">
            <div className="title_table">
              <Image
                src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
                alt="NeoGreens Logo"
                width={150}
                height={50}
              />
            </div>
            <ul className="table_list">
              {middleImgs.map((img, idx) => (
                <li key={idx}>
                  <Image src={img} alt="" width={24} height={24} />
                  <p></p>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant-based Table */}
          <div className="nutrients_table">
            <div className="title_table">
              <h4>Plant-based</h4>
            </div>
            <ul className="table_list">
              {plantBasedImgs.map((img, idx) => (
                <li key={idx}>
                  <Image src={img} alt="" width={24} height={24} />
                  <p></p>
                </li>
              ))}
            </ul>
          </div>

          {/* Animal-based Table */}
          <div className="nutrients_table">
            <div className="title_table">
              <h4>Animal-based</h4>
            </div>
            <ul className="table_list">
              {animalBasedImgs.map((img, idx) => (
                <li key={idx}>
                  <Image src={img} alt="" width={24} height={24} />
                  <p></p>
                </li>
              ))}
            </ul>
          </div>

          {/* Whey Table */}
          <div className="nutrients_table">
            <div className="title_table">
              <h4>Whey</h4>
            </div>
            <ul className="table_list">
              {wheyImgs.map((img, idx) => (
                <li key={idx}>
                  <Image src={img} alt="" width={24} height={24} />
                  <p></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutrientsSection;
