import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWarpper = styled.div`
  height: 58px;
  border-bottom:1px solid #000;
  position:relative;

`
export const Logo = styled.a`
  height: 58px;
  position:absolute;
  width:100px;
  height:56px;
  top:0;
  left:0;
  display:block;
  background: url(${logoPic});
  background-size: contain;
`
