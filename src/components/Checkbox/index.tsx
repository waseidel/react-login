import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, useField } from 'formik'

import { classNames } from '../../utils/classNames'

// Interfaces
interface Props {
  name: string
  children: React.ReactNode
  id?: string
}

const Checkbox = (props: Props) => {
  const { children, ...rest } = props
  const [field, meta] = useField(rest)

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={
            classNames(
              'form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150',
              meta.touched && meta.error && 'text-red-500'
            )
          }
          {...field}
          {...rest}
        />
          <span className="ml-2 text-sm font-semibold text-blueGray-600">
            {props.children}
          </span>
      </label>
      <ErrorMessage name={field.name}>
        {(msg) => <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string
}

export default Checkbox
