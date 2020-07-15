import styled from 'styled-components';
import React from 'react';
import DefaultUl, { Li } from '../../layout/Ul';
import Link, { styleChildLinkColor } from '../Link';
import MenuData from './Menu';
import { HideSingleComponentUsingCss } from '../../utils';
import { WHITE } from '../../../config/styles';
import ContactButton from '../../buttons/ContactButton';
import ItemSubmenu from './ItemSubmenu';

const Ul = styled(DefaultUl)`
  > li {
    margin: 0 !important;
    padding-left: 16px;
    padding-right: 16px;
    color: ${WHITE};
    ${styleChildLinkColor(WHITE)};
  }
`;

const Item = ({
  text,
  submenuItems,
  variant,
  variants,
  component,
  ...rest
}) => {
  const Component = component || Link;
  return (
    <Li variant={variant} variants={variants}>
      {submenuItems ? (
        <ItemSubmenu
          className="navigation"
          items={submenuItems}
          text={text}
          to={rest.to}
          {...rest}
        />
      ) : (
        <Component {...rest}>{text}</Component>
      )}
    </Li>
  );
};

export const DesktopMenuItem = styled(Item).attrs((props) => ({
  className: 'navigation',
}))`
  margin: 0 6px 0 6px;
`;
DesktopMenuItem.displayName = 'DesktopMenuItem';

const DesktopMenu = () => (
  <HideSingleComponentUsingCss xs sm>
    <Ul variant="inline" sx={{ my: '0.5rem' }}>
      {MenuData.map(({ to, children, ...rest }) => (
        <DesktopMenuItem key={to} to={to} submenuItems={children} {...rest} />
      ))}
      <Li>
        <ContactButton className="menu-contact-desktop" />
      </Li>
    </Ul>
  </HideSingleComponentUsingCss>
);

export default DesktopMenu;

// import styled from 'styled-components';
// import React from 'react';

// import Link, { styleChildLinkColor } from '../Link';
// import ContactButton from '../../buttons/ContactButton';
// import { Ul, Li as defaultLi } from '../../layout/Ul';
// import MenuData from './Menu';
// import { HideSingleComponentUsingCss } from '../../utils';
// import { WHITE, SPACING_STANDARD } from '../../../config/styles';

// const Li = styled(defaultLi)`
//   margin: 0 !important;
//   ul > & {
//     padding-right: ${SPACING_STANDARD};
//   }
//   color: ${WHITE};
//   ${styleChildLinkColor(WHITE)};
// `;

// const Item = ({ children, ...props }) => (
//   <Li>
//     <Link {...props}>{children}</Link>
//   </Li>
// );

// const DesktopMenuItem = styled(Item)`
//   margin: 0;
// `;

// const MenuWrapper = styled.div`
//   display: inline-block;
//   margin-right: 0.5rem;
// `;

// DesktopMenuItem.displayName = 'DesktopMenuItem';

// // 'wide' prop necessary because otherwise Li styles override Item styles for some reason (in production only)
// const DesktopMenu = () => (
//   <HideSingleComponentUsingCss xs sm>
//     <MenuWrapper>
//       <Ul variants={['inline', 'unstyled']}>
//         {MenuData.map((item, i) => (
//           <DesktopMenuItem className="menu-item-desktop" key={i} to={item.to}>
//             {item.text}
//           </DesktopMenuItem>
//         ))}
//         <Li>
//           <ContactButton className="menu-contact-desktop" />
//         </Li>
//       </Ul>
//     </MenuWrapper>
//   </HideSingleComponentUsingCss>
// );

// export default DesktopMenu;
