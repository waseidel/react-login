import React from 'react'
import PropTypes from 'prop-types'

import { IconDefinition, IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { classNames } from '../../utils/classNames'

interface Props {
  icon: IconDefinition | IconName
  className?: string
}

const Icon = ({ icon, className }: Props) => {
  return (
    <span className={classNames(className)}>
      <FontAwesomeIcon icon={icon} />
    </span>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string
}

export default Icon
