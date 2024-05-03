import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Theme from '@/components/shared/Theme'

const Navbar = () => {
  return (
    <nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 sm:px-12 dark:shadow-none '>
      <Link href='/' className='flex items-center gap-2'>
        <Image src={'/assets/images/site-logo.svg'} alt={'Stack Overflow Clone'} width={23} height={23}/>
        <p className='h3-bold font-spaceGrotesk text-dark-100 max-sm:hidden dark:text-light-900'>
          Dev<span className='h2-bold ml-0.5 text-primary-500'>OverFlow</span>
        </p>
      </Link>

      Global Search

      <div className='flex-between gap-5'>
        <Theme />
        <SignedIn >
          <UserButton afterSignOutUrl='/' appearance={{
            elements: {
              avatarBox: 'h-10 w-10'
            }
          }}/>
        </SignedIn>

        <SignedOut>

      {/*  sign in button */}
          <div className=' max-sm:block'>
            <Link href='/sign-in'>
            <span className='button-primary-gradient'>
              Sign In
            </span>
            </Link>
          </div>
        </SignedOut>
      </div>

      

    </nav>
  )
}

export default Navbar
