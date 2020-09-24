import React, { useState, ReactNode } from 'react';

import Box from './Box';
import Link from '../Navigation/Link';

interface ToggleContentProps {
  children: ReactNode;
  hideContentText: string;
  showContentText: string;
  direction?: 'below' | 'above';
}
const ToggleContent = ({
  children,
  hideContentText,
  showContentText,
  direction = 'below',
}: ToggleContentProps) => {
  const [isShown, setIsShown] = useState(false);

  return direction === 'below' ? (
    <>
      {isShown ? (
        <Link onClick={() => setIsShown(false)}>{hideContentText}</Link>
      ) : (
        <Link onClick={() => setIsShown(true)}>{showContentText}</Link>
      )}
      {isShown ? <Box mt={2}>{children}</Box> : null}
    </>
  ) : direction === 'above' ? (
    <>
      {isShown ? (
        <>
          <Box mt={2}>{children}</Box>
          <Link onClick={() => setIsShown(false)}>{hideContentText}</Link>
        </>
      ) : (
        <Link onClick={() => setIsShown(true)}>{showContentText}</Link>
      )}
    </>
  ) : null;
};

export default ToggleContent;
