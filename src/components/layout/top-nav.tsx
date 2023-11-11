"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ModeToggle } from "./dark-theme-switch";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function TopNav() {
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
    <header className="w-full container mx-auto flex justify-between items-center gap-3 py-6">
      <div className="flex gap-4 items-center">
        <Image
          alt="Logo Karya Tekno Solusi"
          width={30}
          height={30}
          style={{ width: "auto", height: "auto" }}
          src={logoImageUrl}
        />
        <span className="font-bold">Karya Tekno Solusi</span>
      </div>
      <div className="flex gap-4">
        <Button size="sm" title="Email: info@karyateknosolusi.com" asChild>
          <a href="mailto:info@karyateknosolusi.com">Contact Us</a>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}