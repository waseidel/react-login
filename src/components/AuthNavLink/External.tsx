import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  children: React.ReactNode
  to: string
}
const External = ({ children, to }: Props) => {
  return (
    <a
      className='lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
      href={to}
    >
      { children }
    </a>
  )
}

External.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

export default External
