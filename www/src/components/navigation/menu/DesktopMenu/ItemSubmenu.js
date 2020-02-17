import styled from 'styled-components'
import React from 'react'
import Link from '../../Link'
import DefaultUl from '../../../layout/Ul'
import { WHITE, DARK_BLUE_075 } from '../../../../config/styles'
import { DesktopMenuItem } from '.'

export const Ul = styled(DefaultUl)`
  background-color: ${DARK_BLUE_075};
  position: absolute;
  list-style: none;
  margin: 33px 0 0 -18px !important;
  padding: 18px 18px 36px 18px;
  li {
    padding-left: 0;
  }
`
export const SubmenuButton = styled.i`
  cursor: pointer;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  display: inline-block;
  margin-left: 9px;
  padding-bottom: 2px;
  ${props =>
    props.open
      ? `border-bottom: 8px solid ${WHITE};`
      : `border-top: 8px solid ${WHITE};`};
`

class ItemSubmenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  wrapperRef = React.createRef()

  componentWillUnmount() {
    this.removeMousedownListener()
  }

  addMousedownListener = () => {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  removeMousedownListener = () => {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = event => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.current.contains(event.target) &&
      this.state.isOpen
    ) {
      this.toggle()
      this.removeMousedownListener()
    }
  }

  toggle = () => {
    if (!this.state.isOpen) {
      this.addMousedownListener()
    }
    this.setState({ isOpen: !this.state.isOpen })
  }

  onToggleSubmenuClicked = event => {
    event.preventDefault()
    this.toggle()
  }

  render() {
    const { text, items, className, ...props } = this.props
    const { isOpen } = this.state

    return (
      <div ref={this.wrapperRef}>
        <Link
          {...props}
          className={className}
          onClick={this.onToggleSubmenuClicked}
        >
          {text}
          <SubmenuButton open={isOpen} />
        </Link>
        {isOpen ? (
          <Ul>
            {items.map(child => (
              <DesktopMenuItem text={child.text} key={child.to} to={child.to} />
            ))}
          </Ul>
        ) : null}
      </div>
    )
  }
}

export default ItemSubmenu
