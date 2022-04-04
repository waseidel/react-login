import React from 'react'
import { Link } from 'react-router-dom'

const LoginFooter = () => {
  return (
    <div className='flex flex-wrap pb-6 mx-11 relative justify-between'>
      <div className='w-1/2'>
        <Link
          to='/auth/forgot-password'
          className='text-blueGray-400 text-md font-semibold'
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <div className='w-1/2 text-right'>
        <Link to='/auth/register' className='text-blueGray-400 text-md font-semibold'>
          Crear una nueva cuenta
        </Link>
      </div>
    </div>
  )
}

export default LoginFooter
