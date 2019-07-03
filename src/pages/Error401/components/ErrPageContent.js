import React, { PureComponent } from 'react'
import { Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

class ErrPageContent extends PureComponent {
  render () {
    return (
      <div>
        <Button type="primary">返回</Button>
        <Row>
          <Col span={12}>
            <h1 className="text-jumbo text-ginormous">
              Oops!
            </h1>
            <h2>你没有权限去该页面</h2>
            <h6>如有不满请联系你领导</h6>
            <ul className="list-unstyled">
              <li>或者你可以去:</li>
              <li className="link-type">
                <Link to="/">
                  回首页
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={12}>
            <img alt="Girl has dropped her ice cream."
                height="428"
                src={require('./../IMG/401.gif')}
                width="313"
            ></img>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ErrPageContent
