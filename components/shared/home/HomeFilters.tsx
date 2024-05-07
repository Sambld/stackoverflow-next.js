'use client'
import React, { useState } from 'react'
import { HomePageFilters } from '@/constants/Filters'
import { Badge } from '@/components/ui/badge'
export const HomeFilters = () => {
  const [active, setActive] = useState('')

  const setFilterHandler = (value: string) => () => {
    console.log(value, value)

    setActive(value)
  }
  return (
    <div className="mt-8 hidden flex-wrap justify-start gap-4 px-4 md:flex">
      {HomePageFilters.map((filter) => (
        <Badge
          key={filter.name}
          className={`${filter.value === active ? 'bg-primary-100 text-primary-500 dark:bg-dark-400' : 'bg-light-800 text-dark-400 dark:bg-dark-300 dark:text-light-700'} small-light border-black-[0.5px] cursor-pointer rounded-lg px-6  py-2 dark:border-none `}
          onClick={setFilterHandler(filter.value)}
        >
          {filter.name}
        </Badge>
      ))}
    </div>
  )
}
