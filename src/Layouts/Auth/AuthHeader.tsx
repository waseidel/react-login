import React from 'react'

// Assets
import GitHub from '../../assets/img/github.svg'
import Google from '../../assets/img/google.svg'

const AuthHeader = () => {
  return (
    <>
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="btn-wrapper text-center">
            <button
              className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
              type="button"
            >
            <img
              alt="..."
              className="w-5 mr-1"
              src={GitHub} />
              Github
            </button>
            <button
              className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
            <img
              alt="..."
              className="w-5 mr-1"
              src={Google} />
              Google
            </button>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
    </>
  )
}

export default AuthHeader
