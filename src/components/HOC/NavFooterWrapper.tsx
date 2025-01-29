import { PropsWithChildren } from 'react'
import Navbar from '../Navbar'
import Contact from '../custom/Contact'

const NavFooterWrapper = ({children}: PropsWithChildren) => {

  return (
    <div>
      <Navbar/>
      {children}
      <Contact/>
    </div>
  )
}

export default NavFooterWrapper
