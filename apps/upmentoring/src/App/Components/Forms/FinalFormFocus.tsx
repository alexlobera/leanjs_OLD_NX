import React from 'react';

interface FinalFormFocusProps {
  name: string;
}
const FinalFormFocus = ({ name }: FinalFormFocusProps) => (
  <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
    <input name={name} />
  </div>
);

export default FinalFormFocus;
