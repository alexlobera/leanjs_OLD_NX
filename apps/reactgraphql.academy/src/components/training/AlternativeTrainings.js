import React from 'react';

import { H2 } from '../text';
import UpcomingTrainings from './UpcomingTrainings';
import selectUpcomingTrainings from './selectUpcomingTrainings';
import { LinkButton } from '../buttons';
import Link from '../navigation/Link';
import { Row, Col } from '../layout/Grid';
import Flex from '../layout/Flex';
import Section from '../layout/Section';

import {
  ADVANCED_REACT,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
} from '../../config/data';

const AlternativeTrainings = ({
  trainings,
  titleText = 'You may also be interested in',
  city,
  hideAllBtn,
  type = 'react',
}) =>
  trainings && trainings.length ? (
    <React.Fragment>
      <H2>{titleText}</H2>
      <Row>
        <UpcomingTrainings
          className="suggested-courses"
          limit={3}
          city={city}
          trainings={trainings}
        />
      </Row>
      {!hideAllBtn && (
        <Flex sx={{ flexDirection: ['column', 'row'] }}>
          <LinkButton
            sx={{ mr: 4 }}
            className="suggested-courses"
            to="#upcoming"
          >
            See all public training
          </LinkButton>
          <Link
            sx={{ pt: [3, 1] }}
            to={type === 'react' ? '/react/training/corporate/' : ''}
          >
            See private corporate training
          </Link>
        </Flex>
      )}
    </React.Fragment>
  ) : null;

export const AlternativeTrainingSection = ({
  hideAllBtn = true,
  trainings,
}) => (
  <Section>
    <Row>
      <Col lg={10} lgOffset={1}>
        <AlternativeTrainings hideAllBtn={hideAllBtn} trainings={trainings} />
      </Col>
    </Row>
  </Section>
);

export const AlternativeBootcampTrainings = ({ trainings, city }) => {
  const reactTrainings = selectUpcomingTrainings({
    trainings,
    city,
    types: [REACT_FUNDAMENTALS, REACT_WORKSHOP, ADVANCED_REACT],
    limit: 3,
  });

  return (
    <AlternativeTrainings
      trainings={reactTrainings}
      titleText="Alternatives to the React Bootcamp"
    />
  );
};

export default AlternativeTrainings;
