import TopNav from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";

import { GridPattern } from "@/components/global-custom/pattern";
import OurProductsSection from "@/components/sections/home/our-products";
import OurServicesSection from "@/components/sections/home/our-services";
import ResourcesSection from "@/components/sections/home/resources";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CTAFooter from "@/components/sections/home/cta-footer";
import OurPortofolioSection from "@/components/sections/home/portofolio";

export default function Home() {
  return (
    <>
      <div className="relative isolate -z-10">
        <div className="w-full md:mx-auto md:container overflow-hidden">
          <Image
            alt="bg-light"
            src={"/images/light-bg-hero.png"}
            width={100}
            height={100}
            className="absolute right-0 md:left-0 top-0 w-full"
          />
        </div>
        <GridPattern />
      </div>
      <TopNav />
      <main className="flex-1">
        <section className="space-y-6 py-24 md:py-32 lg:py-64">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              ⚡ Engineering - Design - Networking ⚡
            </span>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Karya Tekno Solusi
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Trusted IT solutions for your digital transformation
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                className={cn(
                  "h-11 px-8 font-bold relative hover:bg-primary",
                  "before:absolute before:-z-20 before:flex before:content-[''] before:bg-[#FDBB58] before:blur-md before:opacity-0 hover:before:opacity-50 before:w-full before:h-full",
                  "before:transition-opacity before:duration-300",
                  "after:absolute after:[border-radius:inherit] after:opacity-50 after:-z-10 after:flex after:content-[''] after:bg-[#FDBB58] after:w-[calc(100%+5px)] after:h-[calc(100%+5px)]"
                )}
                title="Email: info@karyateknosolusi.com"
                asChild
              >
                <a href="mailto:info@karyateknosolusi.com">Contact Us</a>
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "h-11 px-8 font-bold relative  hover:border-[#075e54]  hover:bg-background",
                  "before:absolute before:-z-20 before:flex before:content-[''] before:bg-[#075e54] before:blur-md before:opacity-0 hover:before:opacity-50 before:w-full before:h-full"
                )}
                title="WhatsApp: +6281908195855"
                asChild
              >
                <a href="https://wa.me/6281908195855" target="_blank">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
        <OurServicesSection />
        <ResourcesSection />
        <OurProductsSection />
        <OurPortofolioSection />
        <CTAFooter />
      </main>
      <footer className="container mx-auto text-center p-4 text-sm">
        © 2023 Karya Tekno Solusi. All Rights Reserved.
      </footer>
      <div className="relative w-full -z-10">
        <svg
          className="w-full md:h-[1000px] absolute bottom-0 left-0 "
          viewBox="0 0 1440 874"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="url(#paint0_radial_626_545)" />
          <defs>
            <radialGradient
              id="paint0_radial_626_545"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 983) rotate(90) scale(555.047 624.107)"
            >
              <stop stopColor="#FDBB58" stopOpacity="0.22" />
              <stop offset="1" stopColor="#FDBB58" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg className="w-full h-[620px] absolute left-0 bottom-0 [mask-image:radial-gradient(50%_100%_at_bottom_center,white,transparent)]">
          <defs>
            <pattern
              id="hero"
              width="80"
              height="80"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#hero)"
          ></rect>
        </svg>
      </div>
    </>
  );
}
