"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <section
      className={
        "custom-scrollbar background-light900_dark200 flex-between  sticky left-0 top-0 h-screen flex-col overflow-y-auto p-6 pt-28 shadow-light-300 dark:shadow-none max-sm:hidden lg:min-w-[266px] "
      }
    >
      <section
        className={"mb-8 flex w-full flex-col justify-start gap-2 pt-6 "}
      >
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
              } hover:btn-secondary flex  items-center gap-3  bg-transparent p-4  px-6 max-lg:px-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={22}
                height={22}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <span className={"body-medium max-lg:hidden"}>{item.label}</span>
            </Link>
          );
        })}
      </section>
      <SignedOut>
        <div className={"flex w-full flex-col gap-3"}>
          <Link href="/sign-in">
            <Button
              className={
                "small-medium btn-secondary min-h-[41px] w-full rounded-none px-4 py-3 shadow-none"
              }
            >
              <span className={"primary-text-gradient max-lg:hidden"}>
                Sign In
              </span>
              <Image
                src="/assets/icons/account.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              className={
                "small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-none px-4 py-3 shadow-none"
              }
            >
              <span className="max-lg:hidden">Sign Up</span>
              <Image
                src="/assets/icons/sign-up.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
