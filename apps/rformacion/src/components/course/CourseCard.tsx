import React from 'react';
import Link, { LinkButton } from '../navigation/Link';
import Image from '../display/Image';
import { H3, P, Tag } from '../display';
import { Box, Flex } from '../layout';
import Card from '../layout/Card';

interface Props {
  image: any;
  title: string;
  description: string;
  sx?: any;
  slug: string;
  available?: boolean;
}

function CourseCard({ sx, image, description, title, slug, available }: Props) {
  return (
    <Card variant="primary" sx={{ pb: 2, mb: 7, ...sx }}>
      <Link to={slug}>
        <Image
          fluid={image?.asset?.localFile?.childImageSharp?.fluid}
          sx={{ mb: 0, maxHeight: '200px' }}
        />
      </Link>
      <Box sx={{ p: 3, mt: 1 }}>
        <Link to={slug}>
          <H3 sx={{ mt: 0 }}>{title}</H3>
        </Link>
        <P>{description}</P>
        <Flex>
          <LinkButton variant="primary" to={slug}>
            Ver curso
          </LinkButton>
          {available && (
            <Tag sx={{ ml: 'auto', alignSelf: 'center' }}>
              Inscripción abierta
            </Tag>
          )}
        </Flex>
      </Box>
    </Card>
  );
}

export default CourseCard;
