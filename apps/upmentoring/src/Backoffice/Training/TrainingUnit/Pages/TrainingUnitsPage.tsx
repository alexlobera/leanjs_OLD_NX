import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams, useRouteMatch } from 'react-router-dom';
import { ReactSortable } from 'react-sortablejs';

import Link from '../../../../App/Components/Navigation/Link';
//import { TrainingUnitType } from '../../GraphQL';
import Header from '../../../../App/Components/Layout/Header';
import { P } from '../../../../App/Components/Text/P';
import Box from '../../../../App/Components/Layout/Box';
import Flex from '../../../../App/Components/Layout/Flex';
import { paths as backofficePaths } from '../../../../Backoffice';
import { removeLastDirectoryPath } from '../../../../App/Utils';

const SortableTrainingUnits = React.memo(
  ({ units, setList, grandParentPath }: any) => {
    const list = [...(units || []).map((unit: any) => ({ ...unit }))];
    return (
      <ReactSortable setList={setList} list={list} animation={150}>
        {list &&
          list.map((unit: any, index: number) => {
            const current = unit.draft ? unit.draft : unit.published;
            return (
              <Flex
                key={`${unit.id}${index}`}
                backgroundColor="white"
                alignItems="center"
                style={{
                  padding: '5px 10px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                }}
              >
                <Box>{`${index + 1} - ${current.title}`}</Box>
                <Flex ml="auto" alignItems="center">
                  <Link
                    mb={2}
                    button
                    to={`${grandParentPath}${backofficePaths.trainingUnit}/${unit.id}`}
                  >
                    Edit
                  </Link>
                </Flex>
              </Flex>
            );
          })}
      </ReactSortable>
    );
  }
);

const TrainingUnitsPage = () => {
  const { trainingId } = useParams();
  const match = useRouteMatch();
  const [updatingOrder, setUpdatingOrder] = React.useState(false);

  const { data, loading, error } = useQuery(QUERY_TRAINING_UNIT_LIST, {
    variables: { trainingId },
  });

  const [sortTrainingUnits] = useMutation(SORT_TRAINING_UNITS);

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else if (!data.trainingById) {
    return null;
  }

  const { title, units: immutableUnits } = data.trainingById;
  const units = [...immutableUnits];
  const parentPath = removeLastDirectoryPath(match.url);
  const grandParentPath = removeLastDirectoryPath(parentPath);

  async function mutateTrainingUnitsOrder({ trainingUnitIds }: any) {
    setUpdatingOrder(true);
    try {
      await sortTrainingUnits({
        variables: {
          trainingId,
          trainingUnitIds,
        },
        // update: (store: any) => {
        //   const cacheData = store.readQuery({
        //     query: QUERY_TRAINING_UNIT_LIST,
        //     variables: { trainingId },
        //   });
        //   debugger;

        //   cacheData.trainingById.units = units;

        //   store.writeQuery({
        //     query: QUERY_TRAINING_UNIT_LIST,
        //     variables: { trainingId },
        //     data: cacheData,
        //   });
        // },
      });

      // TODO UPDATE LOCAL CACHE
      // } catch (e) {
    } finally {
      setUpdatingOrder(false);
    }
  }

  const setList = (
    sortedList: any[]
    // sortable: any,
    // store: any
  ) => {
    const sameList = sortedList.reduce(
      (acc, item, index) => acc && item.id === units[index].id,
      true
    );
    if (!sameList) {
      const trainingUnitIds = sortedList.map(({ id }: any) => id);
      mutateTrainingUnitsOrder({ trainingUnitIds });
    }
  };

  return (
    <>
      <Header
        title={
          <>
            Training Units: <Link to={parentPath}>{title}</Link>
          </>
        }
      />
      <Box style={{ position: 'relative' }}>
        {updatingOrder && (
          <Flex
            style={{ position: 'absolute', height: '100%' }}
            backgroundColor="rgba(255,255,255, 0.8)"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            Loading...
          </Flex>
        )}
        <SortableTrainingUnits
          setList={setList}
          units={units}
          grandParentPath={grandParentPath}
        />
        {/* <ReactSortable setList={setList} list={units} animation={150}>
          {units &&
            units.map((unit: any, index: number) => {
              const current = unit.draft ? unit.draft : unit.published;
              return (
                <Flex
                  key={`${unit.id}${index}`}
                  backgroundColor="white"
                  alignItems="center"
                  style={{
                    padding: '5px 10px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                  }}
                >
                  <Box>{`${index + 1} - ${current.title}`}</Box>
                  <Flex ml="auto" alignItems="center">
                    <Link
                      mb={2}
                      button
                      to={`${grandParentPath}${backofficePaths.trainingUnit}/${unit.id}`}
                    >
                      Edit
                    </Link>
                  </Flex>
                </Flex>
              );
            })}
        </ReactSortable> */}
      </Box>
      <Flex pt={2}>
        <Link
          button={true}
          to={`${match.url}${backofficePaths.createTrainingUnit}`}
        >
          {units && units.length ? 'Add unit' : 'Add your first unit'}
        </Link>
      </Flex>
    </>
  );
};

const FRAGMENT_TRAINING_UNIT_LIST = gql`
  fragment TrainingUnitList on Training {
    units {
      id
      published {
        title
      }
      # draft {
      #   title
      # }
    }
  }
`;

export const QUERY_TRAINING_UNIT_LIST = gql`
  query trainingUnits($trainingId: ID!) {
    trainingById(id: $trainingId) {
      id
      title
      trainingUnitsOrder
      updatedAt
      ...TrainingUnitList
    }
  }

  ${FRAGMENT_TRAINING_UNIT_LIST}
`;

const SORT_TRAINING_UNITS = gql`
  mutation sortTrainingUnits($trainingId: ID!, $trainingUnitIds: [ID!]!) {
    sortTrainingUnits(
      input: { trainingId: $trainingId, trainingUnitIds: $trainingUnitIds }
    ) {
      training {
        id
        updatedAt
        ...TrainingUnitList
      }
    }
  }

  ${FRAGMENT_TRAINING_UNIT_LIST}
`;

export default TrainingUnitsPage;
// const withTrainingUnitOrderMutation = graphql(SORT_TRAINING_UNITS);
