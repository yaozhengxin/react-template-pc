import React, { Component } from 'react'
import { HeaderWarpper, Logo } from './style'

class Header extends Component {
  render () {
    return (
      <HeaderWarpper><Logo href="/"/>header</HeaderWarpper>
    )
  }
}
export default Header
