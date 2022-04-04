import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// components

import AdminNavbar from '../../components/Navbars/AdminNavbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import HeaderStats from '../../components/Headers/HeaderStats'
import FooterAdmin from '../../components/Footers/FooterAdmin'

// views
import Dashboard from '../../views/admin/Dashboard'
import Settings from '../../views/admin/Settings'
import Tables from '../../views/admin/Tables'

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/tables" element={<Tables />} />
            <Route path='/*' element={<Navigate replace to="/admin/dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  )
}

export default Admin
