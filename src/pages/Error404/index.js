import React, { Component } from 'react'
import { WscnHttp404Container } from './style'
import WscnHttp404 from './components/WscnHttp404'

export default class Error404 extends Component {
  render () {
    return (
      <WscnHttp404Container>
        <WscnHttp404></WscnHttp404>
      </WscnHttp404Container>
    )
  }
}
