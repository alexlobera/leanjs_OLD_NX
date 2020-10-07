import React from 'react';
import {
  Section as LeanSection,
  ThemeProvider,
  useTheme,
} from '@leanjs/ui-core';
import { BoxProps, As } from '.';

export function Section<T extends As = 'section'>(props: BoxProps<T>) {
  const theme: any = useTheme();

  return props.variant === 'secondary' ? (
    <ThemeProvider
      theme={{
        colors: { text: theme.colors.inverseText },
      }}
    >
      <LeanSection {...props} variant={props.variant} />
    </ThemeProvider>
  ) : (
    <LeanSection {...props} variant={props.variant || 'default'} />
  );
}

export default Section;
