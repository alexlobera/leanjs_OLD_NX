import React from 'react';

import LinkButton from '../buttons/LinkButton';
import { formatUTC } from '../utils';

const NextTrainingButton = ({ training, type }) =>
  training ? (
    <LinkButton variant="primary" to={training.toPath}>
      Next {type}: {formatUTC(training.startDate, training.utcOffset, 'D MMM')},{' '}
      {training.isOnline ? 'remote' : training.city}
    </LinkButton>
  ) : null;

export default NextTrainingButton;
