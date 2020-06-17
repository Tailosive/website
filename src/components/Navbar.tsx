import * as React from 'react'
import { Navbar } from 'rbx'

// @ts-ignore
import logo from '../images/tlogo.png'

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item style={{ padding: 0, fontSize: 25 }}>
          <img src={logo} alt='tailosive logo' />
        </Navbar.Item>
        <Navbar.Item style={{ padding: 0, fontSize: 25, paddingLeft: 20 }}>
          <strong style={{ fontWeight: 900 }}>Tailosive</strong>
        </Navbar.Item>
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavBar
