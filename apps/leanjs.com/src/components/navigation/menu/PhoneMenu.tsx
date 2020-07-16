import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import React from 'react';

import Link from '../Link';
import MenuData from './Menu';
import './PhoneMenu.css';
import { SPACING_SMALL } from '../../../config/styles';

const PhoneMenuItem = styled(Link)`
  display: block;
  padding-top: ${SPACING_SMALL};
  padding-bottom: ${SPACING_SMALL};
  color: white;
`;

const BurgerBar = styled.span`
  position: absolute;
  height: 20%;
  left: 0px;
  right: 0px;

  opacity: 1;
  background: white;
  &.first {
    top: 0%;
  }
  &.second {
    top: 40%;
  }
  &.third {
    top: 80%;
  }
`;

const BurgerLabel = styled.span`
  margin-top: 36px;
  display: inline-block;
  color: white;
  font-size: 0.9rem;
  text-align: center;
`;

PhoneMenuItem.displayName = 'PhoneMenuItem';

class PhoneMenu extends React.Component {
  state = {
    isOpen: false,
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { closeMenu } = this;

    const items = MenuData.reduce((acc, item) => {
      if (item.children) {
        acc = [...acc, ...item.children];
      } else {
        acc = [...acc, item];
      }
      return acc;
    }, []);

    return (
      <Menu
        isOpen={isOpen}
        customBurgerIcon={
          <span>
            <BurgerBar className="bm-burger-bars first" />
            <BurgerBar className="bm-burger-bars second" />
            <BurgerBar className="bm-burger-bars third" />
            <BurgerLabel>Menu</BurgerLabel>
          </span>
        }
      >
        {items.map((item, i) => (
          <PhoneMenuItem
            className="menu-item-mobile"
            onClick={closeMenu}
            key={i}
            to={item.to}
          >
            {item.text}
          </PhoneMenuItem>
        ))}
        <PhoneMenuItem
          onClick={closeMenu}
          key="phonemenu-contact"
          to="contact"
          className="menu-contact-phone"
          scroll
        >
          Contact us
        </PhoneMenuItem>
      </Menu>
    );
  }
}

export default PhoneMenu;
