"use client";

import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BanCardsSection from "./Components/BanCardSection";
import NatureSection from "./Components/NatureSection";
import EnergyContainer from "./Components/EnergyContainer";
import NutrientsSection from "./Components/NutrientsSection";
import SimpleSection from "./Components/SimpleSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import ReadySection from "./Components/ReadySection";
import Footer from "./Components/Footer";


export default function Home() {
 
  return (
    <div className="mx-auto">
     
        <>
          <Navbar />
          <Hero />
          <BanCardsSection />
          <NatureSection />
          <EnergyContainer />
          <NutrientsSection />
          <SimpleSection />
          <TestimonialsSection />
          <ReadySection />
          <Footer />
        </>
      
    </div>
  );
}
