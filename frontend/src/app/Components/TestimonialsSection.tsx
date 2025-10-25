"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    title: "Finally, mental clarity that sticks with just one scoop.",
    text: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I’m sharp, calm, and focused even on the toughest days.",
    img: "/images/Rectangle(1).png",
    name: "Krithi Koushal",
  },
  {
    title: "No more bloating, only a lighter, happier gut.",
    text: "I’ve tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty—my stomach feels balanced, refreshed, and energized.",
    img: "/images/Rectangle(2).png",
    name: "Midhun Roy",
  },
  {
    title: "Reset my routine inside and out.",
    text: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
    img: "/images/Rectangle(3).png",
    name: "Jennifer",
  },
  {
    title: "From sluggish to unstoppable.",
    text: "I was dragged down by sluggish mornings—lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I’m more alert, active, and resilient.",
    img: "/images/Rectangle(4).png",
    name: "Rahul Harrison",
  },
  {
    title: "One scoop, so many wins.",
    text: "Travel, gym, work—NeoGreens travels with me. It’s like a reset button: better digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
    img: "/images/Rectangle(5).png",
    name: "Emily Johnson",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white lg:mb-20">
      {/* Header */}
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          What Choosing Better Looks Like
        </h3>
        <p className="text-gray-600 mb-10">
          Every Scoop, A Step Towards Better Living.
        </p>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="mySwiperTestimonials !pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border border-gray-200 rounded-lg p-5 h-[350px] flex flex-col text-left transition-shadow hover:shadow-sm">
                {/* Quote Icon - Top Left */}
                <Image
                  src="/images/quote.svg"
                  alt="Quote"
                  width={36}
                  height={36}
                  className="mb-3 opacity-20"
                />

                {/* Title */}
                <p className="text-[17px] font-semibold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </p>

                {/* Body Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  {item.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover border border-gray-100"
                  />
                  <p className="text-gray-800 font-medium text-sm">{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev !w-9 !h-9 !rounded-full !bg-white !border !border-gray-300 !shadow-sm after:!text-gray-500 after:!text-base !left-[-12px] md:!left-[-16px]"></div>
          <div className="swiper-button-next !w-9 !h-9 !rounded-full !bg-white !border !border-gray-300 !shadow-sm after:!text-gray-500 after:!text-base !right-[-12px] md:!right-[-16px]"></div>
        </Swiper>
      </div>
    </section>
  );
}

