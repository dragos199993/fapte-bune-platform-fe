import React from 'react'
import Heading from '../components/common/Heading'
import BaseLayout from '../layouts/base.layout'

const Dashboard = () => {
  return (
    <BaseLayout>
      <div className="bg-light dark:bg-primary py-16 ">
        <Heading>Dashboard</Heading>
      </div>
    </BaseLayout>
  )
}

export default Dashboard
