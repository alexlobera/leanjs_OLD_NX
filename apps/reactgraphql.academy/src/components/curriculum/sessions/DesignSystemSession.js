import React from 'react';
import Ul, { Li } from '../../layout/Ul';
import Session from './Session';

export const titleSession = 'Design Systems';

const DesignSystemSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Design system tokens: spacing, fonts, and colors</Li>
      <Li>Theme specification</Li>
      <Li>Build a box</Li>
      <Li>
        Design System based on props
        <Ul>
          <Li>Array props</Li>
          <Li>Variants</Li>
        </Ul>
      </Li>
      <Li>
        Responsive design
        <Ul>
          <Li>Using props instead of writting media queries by hand</Li>
          <Li>Array scales</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
);

DesignSystemSession.defaultProps = {
  title: titleSession,
};

export default DesignSystemSession;
