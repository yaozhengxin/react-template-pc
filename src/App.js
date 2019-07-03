import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { HashRouter, Route,Switch } from 'react-router-dom'
import './App.css'
import store from './store'
// import loadable from './utils/loadable'
// import Error404 from './pages/Error404'
// import Error401 from './pages/Error401'
// import Login from './pages/Login'

// import Header from './common/Header'
import Router from './router'

// const Header = loadable(() => import('./common/Header'))
// const Error404 = loadable(() => import('./pages/Error404'))
// const Error401 = loadable(() => import('./pages/Error401'))
// const Login = loadable(() => import('./pages/Login'))

class App extends Component {
  // constructor(props){
	// 	super	(props)
	// }
  render () {
		// const layoutRouter = (
    //   <div>
    //     <Header></Header>
    //     <Switch>
		// 			<Route path='/' exact component={Header}></Route>
		// 			<Route path='/401' exact component={Error401}></Route>
    //       <Route component={Error404}/>
		// 		</Switch>
    //   </div>
    // )
    return (
      <Provider store={store}>
        <Router></Router>
      </Provider>
    )
  }
}

export default App
