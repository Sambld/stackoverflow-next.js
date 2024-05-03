'use client'

import React, {useContext} from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'
import {useTheme} from "@/context/ThemeProvider";
import Image from "next/image";
import {themes} from "@/constants";

const Theme = () => {
  const {mode, setMode} = useTheme();
  return (
    <Menubar className='relative border-none bg-transparent shadow-none '>
      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
          {mode === 'dark' ? <Image src={'/assets/icons/moon.svg'} alt={'dark mode icon'} width={20} height={20}/> : <Image src={'/assets/icons/sun.svg'} alt={'dark mode icon'} width={20} height={20} className='active-theme' />}
        </MenubarTrigger>
        <MenubarContent className='absolute -right-12 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
          {
            themes.map((item, index) => (
              <MenubarItem key={index} onClick={() => {
                setMode(item.value)
                if (item.value !== 'system') {
                  localStorage.setItem('theme', item.value)
                }
                else{
                  localStorage.removeItem('theme')
                }
              }}>
                <div className='flex items-center space-x-2'>
                  <Image src={item.icon} alt={item.label} width={20} height={20} className={mode === item.value ? 'active-theme' : ''}/>
                  <span className={`body-semibold  ${mode === item.value ? 'text-primary-500' : 'text-dark100_light900'} `}>{item.label}</span>
                </div>
              </MenubarItem>
            ))

          }


        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
