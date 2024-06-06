"use client";

import logo from "@/assets/images/ATRAI Bike_logo_new.png";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../language-switcher";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();

  const lng = pathname.split("/")[1];

  return (
    <nav className="flex items-center justify-between flex-wrap py-6">
      {!pathname.endsWith(`/${lng}`) ? (
        <Link href={`/${lng}`}>
          <Button variant={"ghost"}>
            <ArrowLeftIcon className="mr-2 h-5" />
            Home
          </Button>
        </Link>
      ) : (
        <img src={logo.src} className="h-20" />
      )}

      <LanguageSwitcher currentLng={lng} />
    </nav>
  );
}
