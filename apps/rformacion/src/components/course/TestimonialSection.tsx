import React from 'react';
import TestimonialSheet, { Testimonial } from './TestimonialSheet';
import { getBlockContent } from '../../utils';

interface Props {
  // testimonials: Testimonial[];
  testimonials: any[];
}

function TestimonialSection({ testimonials }: Props) {
  return (
    <>
      {testimonials.map(
        (
          { date, fullname, courseTitle, image, youtubeId, _rawText },
          index
        ) => (
          <TestimonialSheet
            top={index === 0}
            date={date}
            fullname={fullname}
            courseTitle={courseTitle}
            fluidImage={image?.asset?.localFile?.childImageSharp?.fluid}
            youtubeId={youtubeId}
            text={getBlockContent(_rawText)}
          />
        )
      )}
    </>
  );
}

export default TestimonialSection;
