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

const servicesData = [
  {
    title: "Managed Services",
    description:
      "Drive business growth through seamless digital transformation.",
  },
  {
    title: "FTTx (Fiber to the x)",
    description:
      "Deliver multimedia services, including broadcast and streaming IP video, internet data, and VoIP, to multiple devices from a single subscriber.",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage the power of cloud computing for scalable and flexible solutions.",
  },
  {
    title: "IT Consulting",
    description:
      "We offer consulting services in the field of information technology, covering network infrastructure, applications, and a cybersecurity perspective to provide optimal solutions.",
  },
];

export default function OurProductssSection() {
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
          Our Products
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Elevate your business with our innovative products designed to meet
          the demands of the modern digital landscape:
        </p>
      </div>
      <div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 groupborder"
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
              <CardHeader className="gap-4 pb-0"></CardHeader>
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-3">
                  {service.description}
                </CardDescription>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
