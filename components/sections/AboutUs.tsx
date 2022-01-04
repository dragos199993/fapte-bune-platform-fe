import React, { FC } from 'react';
import Heading from '../common/Heading';
import Divider from '../common/Divider';

export const AboutUs: FC = () => {
  return (
    <div className="bg-light dark:bg-primary" id='about-us'>
      <div className="container mx-auto py-16">
        <Heading className="w-full">
          Despre noi
        </Heading>
      </div>
    </div>
  );
};
