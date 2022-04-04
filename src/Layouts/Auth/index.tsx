import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// components
import Navbar from '../../components/Navbars/AuthNavbar'

// views
import Login from '../../views/Auth/Login'
import Register from '../../views/Auth/Register'

// assets
import AuthBody from './AuthBody'

const Auth = () => {
  return (
    <>
      <Navbar transparent />
      <main>
        <AuthBody>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Navigate replace to='/auth/login' />} />
          </Routes>
        </AuthBody>
      </main>
    </>
  )
}

export default Auth
