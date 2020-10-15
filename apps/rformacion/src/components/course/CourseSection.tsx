import React from 'react';
import { Container, Grid } from '../layout';
import { Section } from '../layout/Section';
import { H2 } from '../display';
import CourseCard from './CourseCard';

interface Course {
  imageSrc: string;
  title: string;
  excerpt: string;
}

interface Props {
  courses: Course[];
  title?: string;
  sx?: any;
  top?: boolean;
}

function CourseSection({ sx, top, courses, title }: Props) {
  return (
    <Section top={top}>
      <Container>
        <H2 sx={{ mt: 0 }}>{title}</H2>
        <Grid columns={{ minWidth: '300px' }}>
          {courses.map(({ imageSrc, title, excerpt }) => (
            <CourseCard
              sx={sx}
              src={imageSrc}
              title={title}
              excerpt={excerpt}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default CourseSection;
