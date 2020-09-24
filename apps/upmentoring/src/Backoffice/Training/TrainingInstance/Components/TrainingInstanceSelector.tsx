import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { formatUTC } from '../../../../App/Utils';
import { Table, Tbody, Tr, Td } from '../../../../App/Components/Table';
import FinalFormFocus from '../../../../App/Components/Forms/FinalFormFocus';
import Button from '../../../../App/Components/Buttons/Button';
import { P } from '../../../../App/Components/Text/P';
import ErrorMessage from '../../../../App/Components/Forms/ErrorMessage';

const TrInstance = ({
  instance,
  selectTrainingInstance,
  index,
  clickedIndex,
}: any) => (
  <Tr key={instance.id}>
    <Td>{instance.title}</Td>
    <Td>{formatUTC(instance.startDate, instance.utcOffset)}</Td>
    <Td>{instance.city}</Td>
    {selectTrainingInstance && (
      <Td>
        <Button
          variant={index === clickedIndex ? 'primary' : 'tertiary'}
          onClick={() => selectTrainingInstance(index)}
        >
          {index === clickedIndex ? 'Discount added' : 'Add discount'}
        </Button>
      </Td>
    )}
  </Tr>
);

const TrainingInstanceSelector = ({
  meta,
  input: { onChange, name },
  training,
  trainingInstance,
}: any) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const { data, loading, error } = useQuery(QUERY_TRAINING_INSTANCES, {
    skip: trainingInstance.id,
  });

  if (!data) {
    return null;
  } else if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <p>There's an error</p>;
  } else {
    const { edges } = data.trainingInstances || [];
    const selectTrainingInstance = (index: any) => {
      setClickedIndex(index);
      onChange(edges[index].node.id);
    };

    if (training) {
      return (
        <Table>
          <Tbody>
            <TrInstance training={training} instance={trainingInstance} />
          </Tbody>
        </Table>
      );
    }

    return (
      <>
        {meta && meta.error && meta.touched && (
          <ErrorMessage>{meta.error}. Please select a training</ErrorMessage>
        )}
        <FinalFormFocus name={name} />
        <Table>
          <Tbody>
            {edges.length > 0 ? (
              edges.map(({ node: instance }: any, index: number) => (
                <TrInstance
                  key={index}
                  training={instance.training}
                  instance={instance}
                  selectTrainingInstance={selectTrainingInstance}
                  index={index}
                  clickedIndex={clickedIndex}
                />
              ))
            ) : (
              <P>No course instances available</P>
            )}
          </Tbody>
        </Table>
      </>
    );
  }
};

export const QUERY_TRAINING_INSTANCES = gql`
  query trainings($first: Int = 40) {
    trainingInstances(
      first: $first
      filter: { startDate: future }
      orderBy: { sort: startDate, direction: ASC }
    ) {
      edges {
        node {
          id
          startDate
          utcOffset
          city
          title
        }
      }
    }
  }
`;

export default TrainingInstanceSelector;
