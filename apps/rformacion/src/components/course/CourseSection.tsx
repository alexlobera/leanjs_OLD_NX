import React from 'react';
import { Container, Grid } from '../layout';
import { Section } from '../layout/Section';
import { H2 } from '../display';
import CourseCard from './CourseCard';

interface Course {
  image: any;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  available?: boolean;
}

interface Props {
  courses: Course[];
  title?: string;
  sx?: any;
  top?: boolean;
}

function getCoursePath(slug) {
  return `/cursos/${slug?.current}`;
}

function CourseSection({ sx, top, courses, title }: Props) {
  return (
    <Section top={top}>
      <Container>
        <H2 sx={{ mt: 0 }}>{title}</H2>
        <Grid columns={{ minWidth: '300px' }}>
          {courses.map(({ image, title, description, slug, available }) => (
            <CourseCard
              sx={sx}
              image={image}
              title={title}
              description={description}
              slug={getCoursePath(slug)}
              available={available}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default CourseSection;
