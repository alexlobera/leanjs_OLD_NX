import React from 'react';
import Link from '../navigation/Link';
import Image from '../display/Image';
import { H3, P } from '../display';
import Card from '../layout/Card';
import { Box } from '../layout';

interface Props {
  fluidImage: any;
  title: string;
  excerpt: string;
  to: string;
}

function PostCard({ fluidImage, title, excerpt, to }: Props) {
  return (
    <Card sx={{ p: 2, pb: 3, mb: 3, bg: 'background' }}>
      <Link to={to} sx={{ pl: 2, pr: 2, pt: 2 }}>
        <Image fluid={fluidImage} sx={{ mb: 0, maxHeight: '180px' }} />
      </Link>
      <Box sx={{ p: 3, mt: 1 }}>
        <Link to={to}>
          <H3 sx={{ mt: 0 }}>{title}</H3>
        </Link>
        <P>{excerpt}</P>
        <Link to={to}>Leer mas</Link>
      </Box>
    </Card>
  );
}

export default PostCard;
