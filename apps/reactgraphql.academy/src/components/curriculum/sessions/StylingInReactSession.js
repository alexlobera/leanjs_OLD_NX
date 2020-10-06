import React from 'react';
import Ul, { Li } from '../../layout/Ul';
import Session from './Session';

export const titleSession = 'Styling in React';

const StylingInReactSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>CSS-in-JS with Styled-components</Li>
      <Li>
        UI component libraries comparison: SemanticUI, MaterialUI, Rebass, and
        React-Bootstrap
      </Li>
      <Li>Storybook</Li>
      <Li>Themes</Li>
    </Ul>
  </Session>
);

StylingInReactSession.defaultProps = {
  title: titleSession,
};

export default StylingInReactSession;
