import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
type FilterProps = {
  filters: {
    name: string;
    value: string;
  }[];
  containerClassNames?: string;
  className?: string;
};

function Filter ({ filters, containerClassNames, className }: FilterProps) {
  return (
    <div className={`${containerClassNames}`}>
      <Select>
        <SelectTrigger
          className={`${className} light-border background-light800_darkgradient text-dark200_light800 no-focus relative rounded-none border py-2.5 pl-4  `}
        >
          <div className="line-clamp-1">
            <SelectValue placeholder="Select Filter " />
          </div>
        </SelectTrigger>
        <SelectContent className="background-light800_dark300 text-dark200_light800 rounded-none">
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
