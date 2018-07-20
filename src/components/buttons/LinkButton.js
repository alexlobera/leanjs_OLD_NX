import styled from 'styled-components'
import Link from '../navigation/Link'

export default styled(Link)`
  font-size: ${props => {
    if (props.extraLarge) {
      return 20
    } else if (props.large) {
      return 16
    } else {
      return 12
    }
  }}px;
  ${props =>
    props.secondary
      ? 'box-shadow: rgb(0, 103, 238) 0px 0px 0px 2px inset;'
      : ''} font-weight: 700;
  line-height: 1.14286;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${props =>
    props.secondary ? 'rgb(0, 103, 238)' : 'rgb(255, 255, 255)'};
  background-color: ${props =>
    props.secondary ? 'transparent' : 'rgb(0, 103, 238)'};
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  -webkit-appearance: none;
  margin: 0px;
  border-radius: 4px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
`
