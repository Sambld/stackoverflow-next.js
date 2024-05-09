import { HomeFilters } from '@/components/shared/home/HomeFilters'
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { UserFilters } from '@/constants/Filters'
import Filter from '@/components/shared/Filter'
import React from 'react'
import { getAllUsers } from '@/lib/actions/user.actions'
import { UserCard } from '@/components/shared/UserCard'

const Page = async () => {
  const users = await getAllUsers({})
  return (
    <>
      <div className="flex  justify-between px-4 max-sm:flex-col-reverse ">
        <h1 className="h2-bold text-dark200_light900 items-center">
          All Users
        </h1>

      </div>

      <div className="flex justify-between gap-5 px-4 pt-6 max-sm:flex-col sm:items-center md:flex-row lg:flex-col ">
        <LocalSearchBar
          imgSrc="/assets/icons/search.svg"
          route="/"
          placeholder="Search users"
          className=""
        />

        <Filter
          filters={UserFilters}
          className="min-h-[56px] sm:min-w-[170px]"
          containerClassNames="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className=' m-4 mt-6 flex flex-wrap  gap-5'>
        {
          users.length > 0
            ? users.map((User) => (

                  <UserCard key={User._id} user={User} />

            ))
            : <div>No users found</div>
        }
      </div>

    </>
  )
}

export default Page
