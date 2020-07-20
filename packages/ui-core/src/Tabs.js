import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Ul } from './List';
// import { selectTechColor, selectBorderStyle } from '../utils';
// import { TECH_GRAPHQL } from '../../config/data';
import { Box } from './Box';

export const StyledLi = styled(Box)`
  list-style-type: none;
  display: inline-block;
  @media (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin: 0 8px 14px;
    :last-child {
      margin-right: 0;
    }

    :first-child {
      margin-left: 0;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    display: block;
  }
`;
StyledLi.defaultProps = {
  box: 'li',
};

export const TabList = React.memo(({ sx = {}, ...rest }) => (
  <Ul
    role="tablist"
    variants={['inline', 'unstyled']}
    sx={{
      p: 0,
      m: 0,
      mb: 4,
      ...sx,
    }}
    {...rest}
  />
));

TabList.displayName = 'TabList';

export const StyledA = styled(Box)`
  cursor: pointer;
`;

const selectTabItemColorFn = ({ isSelected, tech }) =>
  isSelected ? 'inverseText' : undefined;
// isSelected && tech === TECH_GRAPHQL ? 'inverseText' : undefined;

// TODO add aria-controls and tabindex -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
export const TabItem = React.memo(
  ({
    name,
    sx = {},
    li: Li = StyledLi,
    a: A = StyledA,
    selectTabItemColor = selectTabItemColorFn,
    tech,
    trainingType,
    ...props
  }) => {
    const { onChange, value } = useTabsContext();
    const isSelected = name === value;
    const color = selectTabItemColor({ isSelected, tech });

    return (
      <Li name={name}>
        <A
          ariaSelected={isSelected}
          sx={{
            color,
            p: 2,
            borderStyle: isSelected ? [`1px solid`, ''] : undefined,
            borderColor: isSelected ? [`react`, ''] : undefined,
            borderBottom: `3px solid rgb(97, 218, 251);`,
            backgroundColor: isSelected ? 'rgb(97, 218, 251);' : undefined,
            position: isSelected
              ? ['relative', 'relative', 'unset']
              : undefined,
            textAlign: isSelected ? ['center', 'unset'] : undefined,
            cursor: 'pointer',
            display: 'block',
            ...sx,
          }}
          role="tab"
          isSelected={isSelected}
          name={name}
          {...props}
          onClick={(e) => {
            e.preventDefault();
            onChange(name);
          }}
        />
      </Li>
    );
  }
);

TabItem.displayName = 'TabItem';

// TODO ADD aria-labelledby and tabindex -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
export const TabPanel = React.memo(({ name, ...rest }) => {
  const { value } = useTabsContext();

  return value === name ? <div role="tabpanel" {...rest} /> : null;
});

TabPanel.displayName = 'TabPanel';

const TabsContext = React.createContext({});

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      `Tab components such as TabList need a parent Tabs component in the component tree`
    );
  }

  return context;
};

export const Tabs = React.memo(
  ({ value: valueProp, defaultValue, onChange: onChangeProp, ...rest }) => {
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
        {...rest}
      />
    );
  }
);
