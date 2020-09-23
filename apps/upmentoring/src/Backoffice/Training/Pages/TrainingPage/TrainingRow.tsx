import * as React from 'react';
import { gql } from '@apollo/client';

import { formatUTC } from '../../../../App/Utils';
import Link from '../../../../App/Components/Navigation/Link';
import { Tr, Td } from '../../../../App/Components/Table';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';

function TrainingRow({ trainingInstance }: any) {
    return (
        <Tr key={trainingInstance.id}>
            <Td>
                <Link
                    to={`${appPaths.backoffice}${backofficePaths.training}/instances/${trainingInstance.id}`}
                >
                    {trainingInstance.title}
                </Link>
            </Td>
            <Td>
                {formatUTC(trainingInstance.startDate, trainingInstance.utcOffset)}
            </Td>
            <Td>{trainingInstance.city}</Td>
        </Tr>
    )
}

export const FRAGMENT_TRAINING_ROW = gql`
    fragment TrainingInstanceRow on trainingInstance {
        trainingId
        id
        city
        startDate
        utcOffset
        title
    }
`;

export default TrainingRow
