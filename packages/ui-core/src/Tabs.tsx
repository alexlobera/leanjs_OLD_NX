import React, { useState, useContext } from 'react';

import { Ul } from './List';
import { Box, LeanProps, As } from './Box';

export const TabList = React.memo(function <T extends As = 'ul'>(
  props: LeanProps<T>
) {
  return (
    <Ul
      role="tablist"
      variants={['inline', 'unstyled']}
      {...props}
      sx={{
        p: 0,
        m: 0,
        mb: 4,
        ...props.sx,
      }}
    />
  );
});

const selectTabItemColorFn = ({ isSelected, tech }) =>
  isSelected ? 'text' : undefined;
// isSelected && tech === TECH_GRAPHQL ? 'inverseText' : undefined;

interface TabItemProps {
  name: string;
  color?: string;
}

// TODO add aria-controls and tabindex -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
export const TabItem = React.memo(function <T extends As = 'li'>(
  props: LeanProps<T, TabItemProps>
) {
  const {
    name,
    sx = {},
    // li: Li = StyledLi,
    // a: A = StyledA,
    selectTabItemColor = selectTabItemColorFn,
    //tech, -> color or variant
  } = props;
  const { onChange, value } = useTabsContext();
  const isSelected = name === value;
  // const color = selectTabItemColor({ isSelected, tech });
  const color = selectTabItemColor({ isSelected });

  return (
    <Box
      as="li"
      ariaSelected={isSelected}
      sx={{
        listStyleType: 'none',
        display: ['block', 'inline-block'],
        mt: 0,
        mr: 2,
        mb: 2,
        ml: 2,
        ':last-child': {
          mr: [2, 0],
        },
        ':first-child': {
          ml: [2, 0],
        },
        color,
        p: 3,
        borderStyle: isSelected ? [`1px solid`, ''] : undefined,
        borderColor: isSelected ? [`react`, ''] : undefined,
        borderBottom: `3px solid rgb(97, 218, 251);`,
        backgroundColor: isSelected ? 'rgb(97, 218, 251);' : undefined,
        position: isSelected ? ['relative', 'relative', 'unset'] : undefined,
        textAlign: 'center',
        cursor: 'pointer',
        ...sx,
      }}
      role="tab"
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onChange(name);
      }}
      name={null}
    ></Box>
  );
});

TabItem.displayName = 'TabItem';

interface TabPanelProps {
  name: string;
}
// TODO ADD aria-labelledby and tabindex -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
export const TabPanel = React.memo(function <T extends As = 'div'>(
  props: LeanProps<T, TabPanelProps>
) {
  const { value } = useTabsContext();

  return value === props.name ? (
    <div role="tabpanel" {...props} name={null} />
  ) : null;
});

TabPanel.displayName = 'TabPanel';

const TabsContext = React.createContext({ onChange: null, value: null });

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      `Tab components such as TabList need a parent Tabs component in the component tree`
    );
  }

  return context;
};

interface TabsProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: JSX.Element[];
}
export const Tabs = React.memo(function ({
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  children,
}: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value) => {
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
});
