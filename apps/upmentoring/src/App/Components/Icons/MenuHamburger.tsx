import React from 'react';

import SvgIcon from './SvgIcon';
import { withTheme } from '../../Config/styled-components';
import { Props } from '../../Types/React';
import { ThemeInterface } from '../../Config/old-theme';

interface MenuHamburguerProps extends Props {
  theme: ThemeInterface;
}
const MenuHamburger: React.FunctionComponent<MenuHamburguerProps> = (props) => (
  <SvgIcon
    height={30}
    width={30}
    viewBox="0 0 30 30"
    fill={props.theme.colors.GREY_DARK}
    {...props}
  >
    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
  </SvgIcon>
);

export default withTheme(MenuHamburger);
