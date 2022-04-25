import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  to: string
}

const Internal = ({ children, to }: Props) => {
  return (
    <NavLink
      className='lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
      to={to}
      >
      { children }
    </NavLink>
  )
}

Internal.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

export default Internal
