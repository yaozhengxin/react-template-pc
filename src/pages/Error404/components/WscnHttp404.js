import React, { PureComponent } from 'react'

class WscnHttp404 extends PureComponent {
  render () {
    return (
      <div className="wscn-http404">
        <div className="pic-404">
          <img alt=""
              className="pic-404__parent"
              src={require('./../IMG/404.png')}
          />
          <img alt="404"
              className="pic-404__child left"
              src={require('./../IMG/404_cloud.png')}
          />
          <img alt="404"
              className="pic-404__child mid"
              src={require('./../IMG/404_cloud.png')}
          />
          <img alt="404"
              className="pic-404__child right"
              src={require('./../IMG/404_cloud.png')}
          />
        </div>
        <div className="bullshit">
          <div className="bullshit__oops">OOPS!</div>
          <div className="bullshit__headline">The webmaster said that you can not enter this page...</div>
          <div className="bullshit__info">Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
          <a className="bullshit__return-home"
              href="/"
          >Back to home</a>
        </div>
      </div>
    )
  }
}

export default WscnHttp404
