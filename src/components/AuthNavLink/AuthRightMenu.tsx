import React from 'react'

import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import AuthNavLink from '.'
import Button from '../Button'
import Icon from '../Icon'

const AuthRightMenu = () => {
  return (
    <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
      <AuthNavLink external to='#'>
        <Icon className='lg:text-slate-200 text-slate-400 text-lg leading-lg mr-2' icon={faFacebook} />
        <span className='lg:hidden inline-block ml-2'>Share</span>
      </AuthNavLink>
      <AuthNavLink external to=''>
        <Icon className='lg:text-slate-200 text-slate-400 text-lg leading-lg mr-2' icon={faTwitter} />
        <span className='lg:hidden inline-block ml-2'>Tweet</span>
      </AuthNavLink>
      <AuthNavLink external to='#'>
          <Icon className='lg:text-slate-200 text-slate-400 text-lg leading-lg mr-2' icon={faGithub} />
          <span className='lg:hidden inline-block ml-2'>Star</span>
      </AuthNavLink>
      <li className='flex items-center'>
        <Button
          variant={Button.variant.CUSTOM}
          size={Button.size.SMALL}
          type='button'
          className='inline-flex bg-white text-slate-700 active:bg-slate-50 text-xs uppercase font-bold'
        >
          <Icon className='mr-2' icon={faDownload} /> Download
        </Button>
      </li>
    </ul>
  )
}

export default AuthRightMenu
