"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";


interface Banner {
  title: string;
  description: string;
  updatedAt: string;
}

const Hero: React.FC = () => {
  const [banner, setBanner] = useState<Banner>({ title: "", description: "", updatedAt: "" });

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get<Banner[]>("http://localhost:5000/api/banners");
        const banners = response.data;

        if (banners.length > 0) {
          
          const latestBanner = banners.reduce((latest, current) =>
            new Date(current.updatedAt) > new Date(latest.updatedAt) ? current : latest
          );
          setBanner(latestBanner);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <section className="bg-[#2c4143] text-white py-12 px-6 sm:py-16 sm:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-bold mb-4 font-playfair text-4xl sm:text-5xl md:text-6xl leading-tight">
            {banner.title || "Here's to the New You"}
          </h2>
          <p className="mb-6 mt-4 text-lg sm:text-xl md:text-2xl font-medium">
            {banner.description || "One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel."}
          </p>
          <button className="bg-color text-gray-700 py-3 px-8 sm:py-4 sm:px-9 mt-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
            Coming Soon
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/neogreen.png"
            alt="neogreen"
            width={500}
            height={400}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
