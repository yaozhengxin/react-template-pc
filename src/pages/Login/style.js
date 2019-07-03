import styled from 'styled-components'

export const LoginWrapper = styled.div`
z-index: 0;
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 56px;
`

export const NormalLoginFormBox = styled.div`
  width: 360px;
  padding: 16px 32px;
  margin:0 auto;
  background: #eee;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
  .login-header-title{
    font-size: 18px;
    text-align: center;
    padding: 16px;
    color: #808080;
  }
  .error-tip{
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: red;
  }
`
