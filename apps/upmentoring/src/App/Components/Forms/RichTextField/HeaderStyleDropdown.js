import React from 'react';

const HeaderStyleDropdown = props => {
  const onToggle = e => {
    props.onToggle(e.target.value);
  };

  return (
    <select value={props.active} onChange={onToggle}>
      {/* <option value="">Header Levels</option> */}
      {props.headerOptions.map((heading, i) => {
        return (
          <option key={i} value={heading.style}>
            {heading.label}
          </option>
        );
      })}
    </select>
  );
};

export default HeaderStyleDropdown;
