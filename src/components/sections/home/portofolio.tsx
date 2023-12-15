"use client";

import { useRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardOverlay,
  CardOverlayBorder,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    title: "Kontrakan Telkom Foundation",
    description:
      "A crowdfunding platform dedicated to aiding financially constrained students, ensuring uninterrupted education. Beyond financial assistance, our foundation pioneers moral support, fostering a community where students can unite, providing mutual encouragement and social connectivity.",
    image: "/images/portofolio/kontrakan-telkom-foundation-web.webp",
    link: "https://foundation.kontelers.com",
  },
];

export default function OurPortofolioSection() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    cardsRef.current.forEach((cardRef) => {
      if (!cardRef) return;

      const rect = cardRef.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.style.setProperty("--cursorX", `${x}px`);
      cardRef.style.setProperty("--cursorY", `${y}px`);
    });
  };

  return (
    <section className="container space-y-6 py-8 bg-slate-50/30 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
          Our Portofolio
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our dynamic portfolio showcasing expertise in application
          development, infrastructure services, and managed solutions.
        </p>
      </div>
      <div
        className="mx-auto grid justify-center gap-4 md:max-w-[64rem] grid-cols-1 groupborder"
        onMouseMove={onMouseMove}
      >
        {servicesData.map((service, i) => (
          <Card
            className="p-0 m-0 groupcontent relative"
            key={i}
            ref={(element) => (cardsRef.current[i] = element)}
          >
            <CardOverlay />
            <CardOverlayBorder />
            <div className="bg-card text-card-foreground h-[calc(100%-2px)] w-[calc(100%-2px)] [border-radius:inherit] m-[1px] mt-[1.2px] z-[2] relative">
              <a href={service.link} target="_blank" className="cursor-pointer">
                <CardHeader className="gap-4 pb-6 min-h-fit">
                  <Image
                    alt={`${service.title} Portofolio`}
                    src={service.image}
                    className="w-full rounded-lg"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-3">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
