import React from 'react';
import { Container, Grid } from '../layout';
import { Section } from '../layout/Section';
import { H2 } from '../display';
import Image from '../display/Image';

// interface Course {
//   image: any;
//   title: string;
//   description: string;
//   slug: {
//     current: string;
//   };
//   available?: boolean;
// }

interface Props {
  partners: any[];
  title?: string;
  top?: boolean;
}

function PartnerSection({ partners, title, top }: Props) {
  return (
    <Section top={top}>
      <Container>
        <H2 sx={{ mt: 0 }}>{title}</H2>
        <Grid columns={{ minWidth: '300px' }}>
          {partners?.map(({ logo, name }) => (
            <Image
              fluid={logo?.asset?.localFile?.childImageSharp?.fluid}
              alt={name}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PartnerSection;
