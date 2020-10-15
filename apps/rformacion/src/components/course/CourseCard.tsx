import React from 'react';
import Link, { LinkButton } from '../navigation/Link';
import Image from '../display/Image';
import { H3, P } from '../display';
import { Box } from '../layout';
import Card from '../layout/Card';

interface Props {
  src: string;
  title: string;
  excerpt: string;
  sx: any;
}

function CourseCard({ sx, src, excerpt, title }: Props) {
  return (
    <Card variant="primary" sx={{ pb: 2, ...sx }}>
      <Link to="">
        <Image src={src} sx={{ mb: 0, maxHeight: '200px' }} />
      </Link>
      <Box sx={{ p: 3, mt: 1 }}>
        <Link to="">
          <H3 sx={{ mt: 0 }}>{title}</H3>
        </Link>
        <P>{excerpt}</P>
        <LinkButton variant="primary">Ver curso</LinkButton>
      </Box>
    </Card>
  );
}

export default CourseCard;
