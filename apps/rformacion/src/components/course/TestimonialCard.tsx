import React from 'react';
import { LinkButton } from '../navigation/Link';
import Image from '../display/Image';
import { P } from '../display';
import YouTube from '../display/YouTube';
import Card from '../layout/Card';

interface Props {
  fuildImage?: any;
  youtubeId?: string;
  quote: string;
  fullname: string;
}

function TestimonialCard({ fuildImage, youtubeId, quote, fullname }: Props) {
  return (
    <Card variant="secondary">
      {youtubeId ? (
        <YouTube youtubeId={youtubeId} />
      ) : (
        <Image fluid={fuildImage} />
      )}
      <P sx={{ mb: 0 }}>
        <em>"{quote}"</em>
      </P>
      <P>{fullname}</P>
      <LinkButton to="/testimonios">Leer mas testiminios</LinkButton>
    </Card>
  );
}

export default TestimonialCard;
