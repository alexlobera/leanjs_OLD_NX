import React from 'react';
import { Container, Grid, Box } from '.';
import { Section } from './Section';
import Sheet from './Sheet';

interface Props {
  variant?: string;
  children: JSX.Element | JSX.Element[] | string;
  top?: boolean;
}

function SheetSection({ top, variant, children }: Props) {
  return (
    <Section variant={variant} top={top}>
      <Container>
        <Sheet>
          <Grid columns={10}>{children}</Grid>
        </Sheet>
      </Container>
    </Section>
  );
}

export default SheetSection;
