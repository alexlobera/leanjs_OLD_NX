import React from 'react';
import { LinkButton } from '../navigation/Link';
import Image from '../display/Image';
import { P, Blockquote } from '../display';
import Card from '../layout/Card';

interface Props {
  src: string;
  quote: string;
  fullname: string;
}

function TestimonialCard({ src, quote, fullname }: Props) {
  return (
    <Card variant="secondary">
      <Image src={src} />
      <P sx={{ mb: 0 }}>
        <em>"{quote}"</em>
      </P>
      <P>{fullname}</P>
      <LinkButton to="/testimonios">Leer mas testiminios</LinkButton>
    </Card>
  );
}

export default TestimonialCard;
