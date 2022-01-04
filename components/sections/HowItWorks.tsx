import React, { FC } from 'react';
import Heading from '../common/Heading';
import Divider from '../common/Divider';

export const HowItWorks: FC = () => {
  return (
    <div className="bg-light dark:bg-primary" id='how-it-works'>
      <div className="container mx-auto py-16">
        <Heading className="w-full">
          How it works
        </Heading>
      </div>
    </div>
  );
};
