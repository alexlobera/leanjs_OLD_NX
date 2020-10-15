import React from 'react';
import {
  Section as LeanSection,
  ThemeProvider,
  useTheme,
} from '@leanjs/ui-core';
import { BoxProps, As } from '.';
import { Container, Grid, Box } from './';
import { H2, H3, P, Image } from '../display';
import { Card } from './Card';

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

export function PageSection({
  imageSrc = null,
  imageLeft = true,
  title,
  subtitle = '',
  text,
  variant = null,
}) {
  let imageCol;
  if (imageSrc) {
    imageCol = (
      <Box
        sx={{
          gridColumn: ['1/ -1', imageLeft ? '1/ 6' : '8/ -1'],
        }}
      >
        <Card>
          <Image src={imageSrc} />
        </Card>
      </Box>
    );
  }

  return (
    <Section variant={variant}>
      <Container>
        <Grid columns={12}>
          {imageLeft && imageCol}
          <Box
            sx={{
              gridColumn: [
                '1/ -1',
                imageCol && imageLeft
                  ? '7/ -1'
                  : imageCol && !imageLeft
                  ? '1/ 7'
                  : '1/-1',
              ],
            }}
          >
            {title && <H2 sx={{ mt: 0 }}>{title}</H2>}

            {subtitle && <H3>{subtitle}</H3>}

            {text && <P>{text}</P>}
          </Box>
          {!imageLeft && imageCol}
        </Grid>
      </Container>
    </Section>
  );
}

export default Section;
