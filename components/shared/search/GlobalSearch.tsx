import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

const GlobalSearch = () => {
  return (
    <div className={' w-full  pl-[5.2rem] max-lg:hidden'}>
      <div
        className={
          'background-light800_darkgradient relative my-0 flex min-h-[56px] max-w-[600px] items-center gap-1 px-4 '
        }
      >
        <Image
          src={'/assets/icons/search.svg'}
          alt={'search'}
          width={24}
          height={24}
          className={'my-0 mr-2 cursor-pointer'}
        />
        <Input
          type={'text'}
          placeholder={'Search globally '}
          className={
            'paragraph-regular text-dark200_light800 no-focus rounded-none border-none bg-transparent shadow-none outline-none  '
          }
        />
      </div>
    </div>
  )
}

export default GlobalSearch
