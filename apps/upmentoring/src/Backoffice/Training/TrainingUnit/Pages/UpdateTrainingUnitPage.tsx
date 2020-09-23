import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

import { P } from '../../../../App/Components/Text/P';
import Header from '../../../../App/Components/Layout/Header';
import TrainingUnitForm, {
  TRAINING_UNIT_FORM_FRAGMENT,
  TRAINING_UNIT_FORM_QUERY_FRAGMENT,
} from '../Components/Form/TrainingUnitForm';
import { ALL_VIDEOS_FRAGMENT } from '../../../../Backoffice/Video/videos.graphql.js';
import { QUERY_TRAINING_UNIT_LIST } from './TrainingUnitsPage';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';

const UpdateTrainingUnit = () => {
  const history = useHistory();
  const { unitId } = useParams();
  const { data, loading, error } = useQuery(QUERY_TRAINING_UNIT, {
    variables: { id: unitId },
  });

  const [updateTrainingUnit] = useMutation(UPDATE_TRAINING_UNIT);

  const onSubmit = async (trainingUnit: any) => {
    try {
      await updateTrainingUnit({
        variables: {
          trainingUnit,
        },
        refetchQueries: [
          {
            query: QUERY_TRAINING_UNIT_LIST,
            variables: { trainingId: tmpTrainingIdWhileOnly1UnitTo1TrainingId },
          },
        ],
      });

      history.push(unitListPagePath);
    } catch (e) {
      // empty
    }
  };

  if (error) {
    return <P>There's an error</P>;
  } else if (loading) {
    return <P>...loading</P>;
  } else if (!data) {
    // TODO IF NO DATA THEN SHOW ITEM DOES NOT EXIST ANYMORE. IT COULD BE THE USER VISITS A PAGE OF A UNIT THAT HAS BEEN DELETED
  }

  const tmpTrainingIdWhileOnly1UnitTo1TrainingId =
    data.trainingUnit.trainingIds[0];

  const unitListPagePath = `${appPaths.backoffice}${backofficePaths.training}/${tmpTrainingIdWhileOnly1UnitTo1TrainingId}${backofficePaths.trainingUnit}`;

  return (
    <>
      <Header title="Update Course Unit" />
      <TrainingUnitForm
        onSubmit={onSubmit}
        fields={data.fields}
        initialValues={data.trainingUnit}
        backUrl={unitListPagePath}
        selectVideos={data.videos}
      />
    </>
  );
};

const UPDATE_TRAINING_UNIT = gql`
  mutation updateTrainingUnit($trainingUnit: UpdateTrainingUnitInput!) {
    updateTrainingUnit(trainingUnit: $trainingUnit) {
      trainingUnit {
        ...TrainingUnitForm
      }
    }
  }
  ${TRAINING_UNIT_FORM_FRAGMENT}
`;

const QUERY_TRAINING_UNIT = gql`
  query editTrainingUnit($id: ID!) {
    ...trainingUnitQueriesFragment
    trainingUnit(id: $id) {
      ...TrainingUnitForm
      trainingIds
    }
    ...allVideos
  }
  ${TRAINING_UNIT_FORM_FRAGMENT}
  ${ALL_VIDEOS_FRAGMENT}
  ${TRAINING_UNIT_FORM_QUERY_FRAGMENT}
`;

export default UpdateTrainingUnit;
