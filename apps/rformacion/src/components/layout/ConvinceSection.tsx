import React from 'react';
import { Container, Grid, Box } from '.';
import { Section } from './Section';
import { H2, H3 } from '../display';
import TestimonialCard from '../course/TestimonialCard';

interface Props {
  testimonialImageSrc: string;
  testimonialQuote: string;
  testimonialFullname: string;
  title: string;
  subtitle?: string;
  text: JSX.Element;
}

function ConvinceSection({
  testimonialImageSrc,
  testimonialQuote,
  testimonialFullname,
  title,
  subtitle = null,
  text,
}: Props) {
  return (
    <Section>
      <Container>
        <Grid columns={12}>
          <Box
            sx={{
              gridColumn: ['1/ -1', '1/ 5'],
            }}
          >
            <TestimonialCard
              src={testimonialImageSrc}
              quote={testimonialQuote}
              fullname={testimonialFullname}
            />
          </Box>
          <Box
            sx={{
              gridColumn: ['1/ -1', '6/ -1'],
            }}
          >
            <H2 sx={{ mt: 0 }}>{title}</H2>
            {subtitle && <H3 sx={{ mt: 0 }}>{subtitle}</H3>}
            {text}
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}

export default ConvinceSection;
