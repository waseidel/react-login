/* eslint-disable no-unused-vars */
import React from 'react'
import { ErrorMessage, useField } from 'formik'

import { classNames } from '../../utils/classNames'

interface Props {
  label: string
  name: string
  type: string
  placeholder?: string
  id?: string
  className?: string
  value?: string
}

const InputField = (props: Props) => {
  const { label, ...rest } = props
  const [field, meta] = useField(rest)
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        className={
          classNames(
            'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
            meta.touched && meta.error && 'border-red-500')
        }
        {...field}
        {...rest} />
      <ErrorMessage name={field.name}>
        {(msg) => <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

export default InputField
