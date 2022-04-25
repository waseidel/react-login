import React from 'react'
import { Link } from 'react-router-dom'

const RegisterFooter = () => {
  return (
    <div className='flex flex-wrap pb-6 mx-7 relative justify-center'>
      <div className='w-1/2 text-center'>
        <Link to='/auth/login' className='text-blueGray-400 text-md font-semibold '>
          ¿Ya tienes una cuenta?
        </Link>
      </div>
    </div>
  )
}

export default RegisterFooter
