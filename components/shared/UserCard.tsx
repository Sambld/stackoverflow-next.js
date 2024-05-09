import Image from 'next/image'
import React from 'react'
import RenderTag from './navbar/RenderTag'
import Link from 'next/link'
import { getTopInteractedTags } from '@/lib/actions/tag.actions'

export type UserCardProps = {
  user: {

    _id: string;
    clerkId: string;
    name: string;
    username: string;
    picture: string;
  }
}

export const UserCard = async ({ user }: UserCardProps) => {
  const topIneractedTags = await getTopInteractedTags({ userId: user._id, limit: 3 })

  return (
    <div className='light-border flex min-h-[200px] w-[250px] flex-col  items-center gap-3 p-3 py-8'>
      <Image
        src={user.picture}
        alt={user.name}
        width={82}
        height={82}
        className='rounded-full'
      />
      <Link href={`/profile/${user._id}`} passHref>

      <p className='text-dark200_light800 h3-bold '>{user.name}</p>
         </Link>
      <p className='text-dark200_light800 small-regular '>@{user.username}</p>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {topIneractedTags.map((tag, index) => (
          <RenderTag key={tag._id} name={tag.name} />
        ))}
      </div>

    </div>
  )
}
