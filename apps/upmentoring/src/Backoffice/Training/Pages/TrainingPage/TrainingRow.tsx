import * as React from 'react';
import { gql } from '@apollo/client';

import { formatUTC } from '../../../../App/Utils';
import Link from '../../../../App/Components/Navigation/Link';
import { Tr, Td } from '../../../../App/Components/Table';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';

function TrainingRow({ trainingInstance }: any) {
  if (!trainingInstance?.published) {
    return;
  }

  const { published } = trainingInstance;

  return (
    <Tr key={published.id}>
      <Td>
        <Link
          to={`${appPaths.backoffice}${backofficePaths.training}/instances/${trainingInstance.id}`}
        >
          {trainingInstance.title}
        </Link>
      </Td>
      <Td>{formatUTC(published.startDate, published.utcOffset)}</Td>
      <Td>{published.city}</Td>
    </Tr>
  );
}

export const FRAGMENT_TRAINING_ROW = gql`
  fragment TrainingInstanceRow on trainingInstance {
    trainingId
    id
    published {
      city
      startDate
      utcOffset
      title
    }
  }
`;

export default TrainingRow;
