import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Link<T extends As = 'a'>(props: LeanProps<T>) {
  const { sx = {} } = props;

  return (
    <Box
      {...props}
      as={props.as || 'a'}
      sx={{ mt: 1, ...sx }}
      variant="a"
      __themeKey="styles"
    />
  );
}

// 🎉 works well, fff fails. The type requires the As = 'default' <T extends As = 'label'> so it works here
// const B = (props) => <Link fff />;
// ❌ this doesn't work since it doesnt fail when spreading {...props}
// const B = (props) => <Link {...props} fff />;
