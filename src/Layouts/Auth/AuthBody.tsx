import React from 'react'
import PropTypes from 'prop-types'

import RegisterBg2 from '../../assets/img/register_bg_2.png'

import FooterSmall from '../../components/Footers/FooterSmall'

interface Props {
  children: React.ReactNode
}

const styles = {
  backgroundImage:
  'url(' + RegisterBg2 + ')'
}

const AuthBody = ({ children }: Props) => {
  return (
    <section className='relative w-full h-full py-40 min-h-screen'>
      <div className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full' style={ styles } />
        { children }
      <FooterSmall absolute />
    </section>
  )
}

AuthBody.propTypes = {
  children: PropTypes.node
}

export default AuthBody
