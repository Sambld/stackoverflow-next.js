"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Navbar from "@/components/shared/navbar/Navbar";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          alt={"mobile nav"}
          width={36}
          height={36}
          className={"invert-colors sm:hidden "}
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className={
          "background-light900_dark200 flex flex-col border-none max-w-80 overflow-y-auto"
        }
      >
        <SheetClose asChild>
          <Link href="/" className="ml-6 flex gap-2">
            <Image
              src={"/assets/images/site-logo.svg"}
              alt={"Stack Overflow Clone"}
              width={23}
              height={23}
            />
            <p className="h3-bold text-dark100_light900 font-spaceGrotesk">
              Dev
              <span className="h2-bold ml-0.5 text-primary-500">OverFlow</span>
            </p>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <SheetClose asChild>
          <SignedOut>
            <div className={"flex flex-col gap-3"}>
              <SheetClose asChild>
                <Link href="/sign-in " className="focus:outline-none">
                  <Button
                    className={
                      "small-medium btn-secondary min-h-[41px] w-full px-4 py-3 rounded-none outline-none shadow-none"
                    }
                  >
                    <span className={"primary-text-gradient"}>Sign In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button
                    className={
                      "small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] rounded-none w-full px-4 py-3 shadow-none "
                    }
                  >
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className={"flex flex-col justify-start gap-2 pt-6 "}>
      {sidebarLinks.map((item, index) => {
        const isActive =
          (pathName.includes(item.route) && item.route !== "/") ||
          item.route === pathName;

        return (
          <Link
            href={item.route}
            key={index}
            className={`${
              isActive
                ? "primary-gradient text-light-900 "
                : "text-dark300_light900 "
            } hover:btn-secondary rounded-none flex items-center gap-3  bg-transparent p-4 px-6`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={22}
              height={22}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <span className={"body-medium"}>{item.label}</span>
          </Link>
        );
      })}
    </section>
  );
};

export default MobileNav;
