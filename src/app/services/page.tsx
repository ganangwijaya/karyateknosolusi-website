import TopNav from "@/components/layout/top-nav";

import { GridPattern } from "@/components/global-custom/pattern";
import CTAFooter from "@/components/sections/home/cta-footer";
import ServicesDetails from "@/components/sections/services/details";
import Image from "next/image";

export default function ServicesDetailsPage() {
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
        <ServicesDetails />
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
              <stop stop-color="#FDBB58" stop-opacity="0.22" />
              <stop offset="1" stop-color="#FDBB58" stop-opacity="0" />
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
            stroke-width="0"
            fill="url(#hero)"
          ></rect>
        </svg>
      </div>
    </>
  );
}
