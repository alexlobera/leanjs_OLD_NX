import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Box from './Box';

export const TabList = styled.ul`
  display: inline;
  list-style: none;
  margin: 0;
  li {
    display: inline-block;
    padding: 15px;
    cursor: pointer;
    border-bottom: 2px solid #0b7382;
  }
`;

export const TabItem = props => {
  const { name } = props;
  const { onChange, value } = useTabsContext();
  const isSelected = name === value;
  const backgroundColor = isSelected ? '#0B7382' : null;
  const color = isSelected ? 'white' : null;

  return (
    <Box
      as="li"
      ariaSelected={isSelected}
      backgroundColor={backgroundColor}
      color={color}
      textAlign="center"
      cursor="pointer"
      role="tab"
      {...props}
      onClick={e => {
        e.preventDefault();
        onChange(name);
      }}
      name={null}
    ></Box>
  );
};

TabItem.displayName = 'TabItem';

// TODO ADD aria-labelledby and tabindex -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
export const TabPanel = props => {
  const { value } = useTabsContext();

  return value === props.name ? (
    <div role="tabpanel" {...props} name={null} />
  ) : null;
};

TabPanel.displayName = 'TabPanel';

const TabsContext = React.createContext({ onChange: null, value: null });

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      `Tab components such as TabList need a parent Tabs component in the component tree`,
    );
  }

  return context;
};

export const Tabs = function ({
  value: valueProp = null,
  defaultValue = null,
  onChange: onChangeProp = value => {},
  children,
}) {
  const [value, setValue] = useState(defaultValue);

  const onChange = value => {
    onChangeProp && onChangeProp(value);
    // if it's a controlled component then there is no need to update the state and trigger another rerender
    !valueProp && setValue(value);
  };

  return (
    <TabsContext.Provider
      value={{
        onChange,
        value: valueProp || value,
      }}
      children={children}
    />
  );
};
