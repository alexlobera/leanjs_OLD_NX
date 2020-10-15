import React from 'react';
import styled from 'styled-components';

import SheetSection from '../layout/SheetSection';
import { H3, H4, P } from '../display';
import Link from '../navigation/Link';
import { Box } from '../layout';

const StyledStars = styled.div`
  unicode-bidi: bidi-override;
  direction: rtl;
  display: inline-block;
  margin-bottom: 1rem;
  padding-top: 3px;
  > span {
    font-size: 1.5rem;
    color: yellow;
    text-shadow: -1px 0 rgba(0, 0, 0, 0.5), 0 1px rgba(0, 0, 0, 0.5),
      1px 0 rgba(0, 0, 0, 0.5), 0 -1px rgba(0, 0, 0, 0.5);
    display: inline-block;
    position: relative;
    width: 1.1em;
  }
`;

const Rating = () => (
  <StyledStars>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
  </StyledStars>
);

interface Props {
  top?: boolean;
  date: string;
  fullname: string;
  courseTitle: string;
}

function TestimonialSheet({ top, date, fullname, courseTitle }: Props) {
  return (
    <SheetSection top={top}>
      <Box
        sx={{
          gridColumn: ['1/ -1', '1/ 8'],
        }}
      >
        <H3 sx={{ mt: 0 }}>{fullname}</H3>
        <H4 sx={{ mt: 0 }}>{courseTitle}</H4>
        <P>
          a ljaks lfaj lfjas a ljaks lfaj lfjas a ljaks lfaj lfjas a ljaks lfaj
          lfjas a ljaks lfaj lfjas a ljaks lfaj lfjas a ljaks lfaj lfjas
        </P>
      </Box>
      <Box
        sx={{
          gridColumn: ['1/ -1', '9/ -1'],
          textAlign: 'right',
        }}
      >
        <Rating /> <br />
        <strong>{date}</strong>
      </Box>
    </SheetSection>
  );
}

export default TestimonialSheet;
