import React from 'react';
import BaseLayout from '../../layouts/base.layout';
import Heading from '../../components/common/Heading';
import Divider from '../../components/common/Divider';

const Login = () => {
  return (
    <BaseLayout>
      <div className="bg-light dark:bg-primary">
        <div className="container mx-auto py-16">
          <Heading className="text-center w-full">
            Autentificare
            <Divider className='w-1/4 mx-auto'/>
          </Heading>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
