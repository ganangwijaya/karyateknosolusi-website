"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CTAFooter() {
  const { theme, systemTheme } = useTheme();

  const [logoImageUrl, setLogoImageUrl] = useState<string>(
    "/images/logo-kt-white.png"
  );

  useEffect(() => {
    const setTheme = () => {
      if (theme === "system") {
        if (systemTheme === "dark") {
          setLogoImageUrl("/images/logo-kt-white.png");
        } else setLogoImageUrl("/images/logo-kt-black.png");
      } else if (theme === "dark") {
        setLogoImageUrl("/images/logo-kt-white.png");
      } else {
        setLogoImageUrl("/images/logo-kt-black.png");
      }
    };

    setTheme();
  }, [systemTheme, theme]);

  return (
    <section className="container space-y-6 py-8  md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div
          className={cn(
            "mb-4 relative bg-card shadow-sm rounded-2xl border border-[#FDBB58]/50",
            "before:absolute before:-z-20 before:flex before:content-[''] before:bg-[#FDBB58] before:blur-md before:opacity-20 before:w-full before:h-full"
          )}
        >
          <Image
            alt="Logo Karya Tekno Solusi"
            width={50}
            height={50}
            style={{ width: "50px", height: "auto" }}
            className="m-6"
            src={logoImageUrl}
          />
        </div>
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
          We Are Karya Tekno Solusi
        </h2>
        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          Turning Challenges into Opportunities: Karya Tekno Solusi, <br /> Your
          Trusted Partner in Digital Transformation
        </p>
      </div>
    </section>
  );
}
