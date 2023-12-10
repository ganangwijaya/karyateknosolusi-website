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
import { cn } from "@/lib/utils";
import { AppWindow, CombineIcon, ServerCog } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    id: "application-service",
    title: "Application Services",
    description:
      "Tailored solutions for application development and maintenance, ensuring optimal performance and functionality.",
    icon: <AppWindow className="m-4" width={32} height={32} />,
  },
  {
    id: "infrastructure-service",
    title: "Infrastructure Services",
    description:
      "Comprehensive solutions for designing, implementing, and managing robust network infrastructures, emphasizing standardization and cybersecurity.",
    icon: <ServerCog className="m-4" width={32} height={32} />,
  },
  {
    id: "managed-service",
    title: "Managed Services",
    description:
      "Proactive management and support to optimize IT operations and enhance overall business efficiency.",
    icon: <CombineIcon className="m-4" width={32} height={32} />,
  },
];

export default function OurServicesSection() {
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
    <section
      id="our-services"
      className="container space-y-6 py-8 bg-slate-50/30 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
          Our Services
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We specialize in delivering tailored services to meet the diverse
          needs of our clients. Our service offerings include:
        </p>
      </div>
      <div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 groupborder"
        onMouseMove={onMouseMove}
      >
        {servicesData.map((service, i) => (
          <Card
            key={i}
            className="p-0 m-0 groupcontent relative"
            ref={(element) => (cardsRef.current[i] = element)}
          >
            <Link href={`/services#${service.id}`}>
              <CardOverlay />
              <CardOverlayBorder />
              <div className="bg-card text-card-foreground h-[calc(100%-2px)] w-[calc(100%-2px)] [border-radius:inherit] m-[1px] mt-[1.2px] z-[2] relative">
                <CardHeader className="flex items-center justify-center h-52 mb-6">
                  <div
                    className={cn(
                      "relative bg-card shadow-sm rounded-lg border border-[#FDBB58]/50",
                      "before:absolute before:-z-20 before:flex before:content-[''] before:bg-[#FDBB58] before:blur-md before:opacity-20 before:w-full before:h-full"
                    )}
                  >
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-3">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
