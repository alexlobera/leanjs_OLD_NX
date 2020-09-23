import React, { useState } from 'react';
import Link from '../Navigation/Link';

interface ExpandTextProps {
  children: any;
  parsedChildren?: number;
  maxLength: number;
}
const ExpandText = ({ maxLength, children }: ExpandTextProps) => {
  const parsedChildren = parseInt(children, 0);
  const [hidden, setHidden] = useState(true);
  if (!children) {
    return null;
  }
  if (!maxLength) {
    return null;
  }
  if (parsedChildren <= maxLength) {
    return children;
  }

  return (
    <>
      {hidden ? `${children.substring(0, maxLength).trim()}` : children}
      {hidden ? (
        <>
          {' '}
          <br />
          <Link onClick={() => setHidden(false)}>read more</Link>
        </>
      ) : (
          <>
            <br />
            <Link onClick={() => setHidden(true)}>read less</Link>
          </>
        )}
    </>
  );
};

export default ExpandText;
