import React from 'react';
import { Ul, Li } from '../../layout/Ul';

const Session = ({ children, title }) =>
  !title ? (
    children
  ) : (
    <Ul sx={{ mt: 1 }}>
      <Li>{title}</Li>
      {children}
    </Ul>
  );

export default Session;
