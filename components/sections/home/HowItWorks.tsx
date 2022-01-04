import React, { FC } from 'react'
import Heading from '../../common/Heading'

export const HowItWorks: FC = () => {
  return (
    <div
      className="bg-light dark:bg-primary border-secondary border-b"
      id="how-it-works"
    >
      <div className="container mx-auto py-16">
        <Heading className="w-full">How it works</Heading>
      </div>
    </div>
  )
}
