import React, { PureComponent } from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginWrapper from './components/LoginWrapper'
// import { actionCreators } from './store'

class Login extends PureComponent {
  render () {
    // const { loginStatus } = this.props;
    // if(!loginStatus){
      return (
        <LoginWrapper />
      )
    // } else {
    //   return <Redirect to="/"/>
    // }
  }
}


const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
