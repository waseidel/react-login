/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'

enum Variant {
  ERROR,
  WARNING,
  PRIMARY,
  SUCCESS,
  INFO,
  CUSTOM
}

enum Size {
  LARGE,
  SMALL,
}

enum State {
  ACTIVE,
  DISABLED,
}

type Props = {
  variant: Variant
  children?: ReactNode
  size: Size
  state?: State
  type: 'submit' | 'button' | 'reset' | undefined
  className?: string
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-4 text-xs py-2',
  [Size.LARGE]: 'px-3 text-sm'
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.ERROR]: 'text-white bg-red-500 active:bg-red-600 hover:bg-red-700',
  [Variant.WARNING]: 'text-white bg-orange-500 active:bg-orange-600 hover:bg-orange-700',
  [Variant.PRIMARY]: 'text-white bg-indigo-800 active:bg-indigo-600 hover:bg-indigo-700',
  [Variant.SUCCESS]: 'text-white bg-green-600 active:bg-green-600 hover:bg-green-700',
  [Variant.INFO]: 'text-white bg-blueGray-600 active:bg-blueGray-600 hover:bg-blueGray-700',
  [Variant.CUSTOM]: ''
}

const Button = (props: Props) => {
  const { children, variant, size, state, type, className } = props
  return (
      <button
          className={classNames(
            'rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150',
            VARIANT_MAPS[variant],
            SIZE_MAPS[size],
            className
          )}
          disabled={state === State.DISABLED}
          type={type}
      >
          {children}
      </button>
  )
}

Button.defaultProps = {
  variant: Variant.PRIMARY,
  size: Size.SMALL,
  state: State.ACTIVE,
  className: ''
}

Button.variant = Variant
Button.size = Size
Button.state = State

export default Button
