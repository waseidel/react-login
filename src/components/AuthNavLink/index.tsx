import React from 'react'
import PropTypes from 'prop-types'

import External from './External'
import Internal from './Internal'

interface Props {
  children: React.ReactNode
  to: string
  external?: boolean
}

const AuthNavLink = ({ children, to, external }: Props) => {
  if (external) {
    return <External to={to}>{children}</External>
  }
  return <Internal to={to}>{children}</Internal>
}

AuthNavLink.defaultProps = {
  external: false
}

AuthNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool
}

export default AuthNavLink
