import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Link<T extends As = 'a'>(props: LeanProps<T>) {
  return (
    <Box as="a" variant="a" {...props} __sx={{ mt: 1 }} __themeKey="styles" />
  );
}

// 🎉 works well, fff fails. The type requires the As = 'default' <T extends As = 'label'> so it works here
// const B = (props) => <Link fff />;
// ❌ this doesn't work since it doesnt fail when spreading {...props}
// const B = (props) => <Link {...props} fff />;
// const B = <T extends As>({ removeProps, ...rest }: LeanProps<T>) => (
//   <Link {...rest} sx={{ m: 1 }} />
// );
