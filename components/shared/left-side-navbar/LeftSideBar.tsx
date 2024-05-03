'use client'
import React from 'react';
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {SheetClose} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {SignedOut} from "@clerk/nextjs";

const LeftNavBar = () => {
  const pathName = usePathname()
  return (
    <div>
      <section className={'flex h-full flex-col justify-start gap-2 pt-6 '}>
        {sidebarLinks.map((item, index) => {
          const isActive = (pathName.includes(item.route) && item.route !== '/') || item.route === pathName

          return (
            <Link href={item.route} key={index}
                  className={`${isActive ? 'primary-gradient text-light-900 ' : 'text-dark300_light900 '} hover:btn-secondary flex items-center gap-3 rounded-lg bg-transparent p-4 px-6`}>

              <Image src={item.imgURL} alt={item.label} width={22} height={22}
                     className={`${isActive ? '' : 'invert-colors'}`}/>
              <span className={'body-medium'}>{item.label}</span>

            </Link>
          )
        })}

      </section>
      <SignedOut>
        <div className={'flex flex-col gap-3'}>
            <Link href='/sign-in'>
              <Button className={'small-medium btn-secondary min-h-[41px] w-full px-4 py-3 shadow-none'}>
                <span className={'primary-text-gradient'}>Sign In</span>
              </Button>
            </Link>




            <Link href='/sign-up'>
              <Button
                className={'small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full px-4 py-3 shadow-none '}>
                Sign Up
              </Button>
            </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default LeftNavBar;