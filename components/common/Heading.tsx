import React, { FC } from 'react';

type HeadingProps = {
  className?: string;
};

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1 className={`font-bold text-4xl md:text-5xl text-primary dark:text-light ${className}`}>
      { children }
    </h1>
  );
};

export default Heading;