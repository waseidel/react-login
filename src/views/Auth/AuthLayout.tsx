// eslint-disable-next-line no-use-before-define
import React from 'react'

interface Props {
  children: React.ReactNode
  footer: React.ReactNode
  text: string
}

const AuthLayout = ({ children, text, footer }: Props) => {
  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-5/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className='flex-auto p-4 pb-7 lg:px-10'>
              <div className='text-blueGray-400 text-center my-6 text-3xl font-semibold'>
                { text }
              </div>
              { children }
            </div>
            { footer }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
