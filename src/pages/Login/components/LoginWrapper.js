import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, NormalLoginFormBox } from './../style'
import { Helmet } from 'react-helmet'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { actionCreators } from './../store'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class Login extends PureComponent {
  componentDidMount () {
    const { form: { validateFields ,setFieldsValue},userName ,passWord} = this.props
    // 一开始禁用提交按钮
    validateFields(() => void 0)
    if (process.env.NODE_ENV === 'development') {
      setFieldsValue({userName, passWord});
    }
    // this.props.login()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.changeLoadingStatus(true)
        // const { userName, password } = values
        setTimeout(() => {
          this.props.changeLoadingStatus(false)
          //   // 当需要指定登陆用户时，前端可以写死
          // let userA = userName === 'admin' && password === '111'
          // let userB = userName === 'admin2' && password === '222'
          // if (userA || userB) {
          // } else {
          //   this.props.changeErrorTipsMessage('用户名或密码错误！!' )
          // }
        }, 1000)
      }
    })
  };
  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const { loading, message } = this.props
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwordError = isFieldTouched('passWord') && getFieldError('passWord')
      return (
        <LoginWrapper>
          <Helmet
              title="登录"
          />
          <NormalLoginFormBox>
            <div className="login-header-title">欢迎登录</div>
            <Form className="login-form"
                onSubmit={this.handleSubmit}
            >
              <Form.Item
                  help={userNameError || ''}
                  validateStatus={userNameError ? 'error' : ''}
              >
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }]
                })(
                  <Input allowClear
                      autoFocus
                      placeholder="Username"
                      prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }}
                          type="user"
                              />}
                  />
                )}
              </Form.Item>
              <Form.Item
                  help={passwordError || ''}
                  validateStatus={passwordError ? 'error' : ''}
              >
                {getFieldDecorator('passWord', {
                  rules: [{ required: true, message: 'Please input your password!' }]
                })(
                  <Input.Password
                      placeholder="Password"
                      prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }}
                          type="lock"
                              />}
                      type="password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                <a
                    className="login-form-forgot"
                    href="javascript:void(0)"
                >
                  Forgot password
                </a>
                <Button
                    className="login-form-button"
                    disabled={hasErrors(getFieldsError())}
                    htmlType="submit"
                    loading={loading}
                    type="primary"
                >
                  Log in
                </Button>
                Or <a href="javascript:void(0)">register now!</a>
              </Form.Item>
            </Form>
            <div className="error-tip">{message}</div>
          </NormalLoginFormBox>
        </LoginWrapper>
      )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)

const mapStateToProps = (state) => ({
  loading: state.getIn(['login', 'loginBtnLoadingStatus']),
  message: state.getIn(['login', 'errorTipsMessage']),
  userName: state.getIn(['login', 'devUserName']),
  passWord: state.getIn(['login', 'devPassWord'])
})

const mapDispathToProps = (dispatch) => ({
	changeLoadingStatus(value) {
    dispatch(actionCreators.changeLoadingStatus(value))
  },
	changeErrorTipsMessage(value) {
    dispatch(actionCreators.changeErrorTipsMessage(value))
  },
  login(){
    dispatch(actionCreators.login())
  }
})

export default connect(mapStateToProps, mapDispathToProps)(WrappedNormalLoginForm)
