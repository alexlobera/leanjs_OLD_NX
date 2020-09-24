import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeInterface } from '../../Config/theme';
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import MenuHamburger from '../Icons/MenuHamburger';
import Flex from '../Layout/Flex';

interface StyledMenuProps {
  isOpen: boolean;
  theme: ThemeInterface;
}

const StyledMenu = styled(Flex)`
  flex-direction: column;
  background: ${(props: StyledMenuProps) => props.theme.colors.GREY_MEDIUM};
  transition: width 0.3s ease-in-out;
  width: ${(props: StyledMenuProps) => (props.isOpen ? 'auto' : '3.5rem')};
  min-height: 100vh;
`;

const StyledMenuHeader = styled('div')`
  padding: 0.9rem;
`;

const Navigation = styled('nav')`
  padding: 1rem 0 0 0.5rem;
`;

export type MenuData = {
  title: string;
  to?: string;
  onClick?: (args: any) => void;
  component?: any;
  icon?: ReactNode;
  subMenu?: MenuData[];
};

interface Props {
  data: MenuData[];
}

const Menu: React.SFC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledMenu isOpen={isOpen}>
      <StyledMenuHeader onClick={() => setIsOpen(!isOpen)}>
        <MenuHamburger />
      </StyledMenuHeader>
      <Navigation>
        {data &&
          data.map((menu, index) => (
            <MenuList key={`menu-${index}`}>
              <MenuItem
                to={menu.to}
                isOpen={isOpen}
                icon={menu.icon}
                key={`menuItem-${index}`}
              >
                {menu.title}
              </MenuItem>
              {menu.subMenu &&
                menu.subMenu.map((subMenu, subIndex) => (
                  <MenuList key={`menu-${subIndex + index}`}>
                    <MenuItem
                      to={subMenu.to}
                      isOpen={isOpen}
                      key={`menuItem-${subIndex + index}`}
                      component={subMenu.component}
                    >
                      {subMenu.title}
                    </MenuItem>
                  </MenuList>
                ))}
            </MenuList>
          ))}
      </Navigation>
    </StyledMenu>
  );
};

export default Menu;
