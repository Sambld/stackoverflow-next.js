import Image from 'next/image'
import React from 'react'

export type UserCardProps = {
    user: {

        _id : string;
        clerkId: string;
        name: string;
        username: string;
        picture: string;
    }
}

export const UserCard = ({ user }: UserCardProps) => {
  console.log(user.username)

  return (
    <div>
        <div>
            <Image width={25} height={25} src={user.picture} alt={user.name} />
        </div>
        <div>
            <h1>{user.name}</h1>
        </div>
    </div>
  )
}
