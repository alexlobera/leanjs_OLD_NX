import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import withWidth, { MEDIUM } from '../../layout/WithWidth';
import DesktopMenu from './DesktopMenu';
import PhoneMenu from './PhoneMenu';

export { DesktopMenu, PhoneMenu };

export const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined';
  const data = useStaticQuery(graphql`
    query MenuQuery {
      navbar: sanityNavigationMenu(name: { eq: "navbar" }) {
        items {
          title
          link
          landingPage {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  return canIGuessTheScreenSizeUsingJS && width <= MEDIUM ? (
    <PhoneMenu items={data.navbar.items} />
  ) : (
    <DesktopMenu items={data.navbar.items} />
  );
};

export default withWidth()(React.memo(Menu));
