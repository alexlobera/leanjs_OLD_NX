import React from 'react';
import Link from '../navigation/Link';
import Image from '../display/Image';
import { H3, P } from '../display';
import Card from '../layout/Card';
import { Box } from '../layout';

interface Props {
  src: string;
  title: string;
  excerpt: string;
}

function PostCard({ src, title, excerpt }: Props) {
  return (
    <Card sx={{ pb: 3 }}>
      <Link to="" sx={{ pl: 2, pr: 2, pt: 2 }}>
        <Image src={src} sx={{ mb: 0, maxHeight: '200px' }} />
      </Link>
      <Box sx={{ p: 3, mt: 1 }}>
        <Link to="">
          <H3 sx={{ mt: 0 }}>{title}</H3>
        </Link>
        <P>{excerpt}</P>
        <Link to="">Leer mas</Link>
      </Box>
    </Card>
  );
}

export default PostCard;
