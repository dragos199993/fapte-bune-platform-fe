import React, { FC } from 'react'
import Heading from '../../common/Heading'

export const AboutUs: FC = () => {
  return (
    <div
      className="bg-light dark:bg-primary border-secondary border-b"
      id="about-us"
    >
      <div className="container mx-auto py-16">
        <Heading className="w-full">Despre noi</Heading>
      </div>
    </div>
  )
}
