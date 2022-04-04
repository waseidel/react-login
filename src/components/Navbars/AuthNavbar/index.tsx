/*eslint-disable*/
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Icon from '../../Icon';
import AuthNavLink from '../../AuthNavLink';
import AuthRightMenu from '../../AuthNavLink/AuthRightMenu';

interface Props {
  transparent?: boolean
}

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            className='text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            to='/'
          >
            ETM Corp
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon className='text-white' icon={faBars} />
            <i className='text-white fas fa-bars'></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none mr-auto'>
            <AuthNavLink to='/docs'>
              <Icon className='lg:text-slate-200 text-slate-400 text-lg leading-lg mr-2' icon={faFileAlt} />
              Docs
            </AuthNavLink>
          </ul>
          <AuthRightMenu />
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  transparent: false
}

Navbar.propTypes = {
  transparent: PropTypes.bool
}

export default Navbar
