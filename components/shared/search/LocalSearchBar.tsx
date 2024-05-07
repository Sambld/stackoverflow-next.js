import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

type LocalSearchBarProps = {
  route: string;
  iconPosition?: 'left' | 'right';
  placeholder: string;
  imgSrc: string;
  className?: string;
};

export default function LocalSearchBar ({
  route,
  iconPosition = 'left',
  placeholder,
  imgSrc,
  className
}: LocalSearchBarProps) {
  return (
    <div
      className={`background-light800_darkgradient relative my-0 flex min-h-[50px] w-full items-center gap-1 border px-4 dark:border-none ${className} `}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt={'search'}
          width={24}
          height={24}
          className={'my-0 mr-2 cursor-pointer'}
        />
      )}
      <Input
        type={'text'}
        placeholder={placeholder}
        className={
          'paragraph-regular text-dark200_light800 no-focus rounded-none border-none bg-transparent shadow-none outline-none  '
        }
      />
      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt={'search'}
          width={24}
          height={24}
          className={'my-0 ml-2 cursor-pointer'}
        />
      )}
    </div>
  )
}
