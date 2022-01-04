import React, { FC } from 'react'

type DividerProps = {
  className?: string
}

const Divider: FC<DividerProps> = ({ className = 'w-full' }) => {
  return (
    <hr
      className={`h-1 bg-primaryAccent dark:bg-secondary rounded-full mt-8 ${className}`}
    />
  )
}

export default Divider
