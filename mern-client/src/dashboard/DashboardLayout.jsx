import React from 'react'
import { Outlet } from 'react-router-dom'
import DashbaordSidebar from './DashboardSidebar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <DashbaordSidebar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout