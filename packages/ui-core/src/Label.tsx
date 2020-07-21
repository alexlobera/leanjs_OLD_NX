import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Label<T extends As = 'label'>(props: LeanProps<T>) {
  return <Box as="label" variant="label" {...props} __themeKey="forms" />;
}

export default Label;

// 🎉 works well, fff fails. The type requires the As = 'default' <T extends As = 'label'> so it works here
// const B = (props) => <Label fff />;
// ❌ this doesn't work since it doesnt fail when spreading {...props}
// const B = (props) => <Label {...props} fff />;
