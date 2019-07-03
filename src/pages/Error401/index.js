import React, { Component } from 'react'
import { ErrPageContainer } from './style'
import ErrPageContent from './components/ErrPageContent'

export default class Error404 extends Component {
  render () {
    return (
      <ErrPageContainer>
        <ErrPageContent></ErrPageContent>
      </ErrPageContainer>
    )
  }
}
