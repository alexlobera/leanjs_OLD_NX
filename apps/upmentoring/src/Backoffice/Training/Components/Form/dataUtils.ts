import memoize from 'lodash.memoize';

export const formatInitialValues = memoize((values) => {
  const { customFieldsValues, trainingInstanceTypes, ...rest } = values || {};
  const initialValues = {
    ...rest,
    ...(trainingInstanceTypes
      ? {
          trainingInstanceTypes: trainingInstanceTypes.reduce(
            (acc: any, { trainingInstanceTypeId, alternativeTitle }: any) => {
              acc[trainingInstanceTypeId] = {
                selected: true,
                alternativeTitle,
              };
              return acc;
            },
            {}
          ),
        }
      : {}),
    // TODO EXTRACT THIS INTO A REUSABLE FUNCTION. HEADS UP IT'S A LAYOUT LIST AND FOR INPUT TEXT LIKE IN TRAINING UNITS THE FUNCTION IS DIFFERENT
    ...(customFieldsValues
      ? customFieldsValues.reduce(
          (acc: any, { fieldId, values: fieldValues }: any) => {
            acc.customFieldsValues = {
              ...(acc.customFieldsValues || {}),
              [fieldId]: fieldValues,
            };
            return acc;
          },
          {}
        )
      : {}),
  };

  return initialValues;
});

export const formatSubmitValues = ({
  customFieldsValues,
  trainingInstanceTypes: rawTrainingInstanceTypes,
  standardPrice,
  ...rest
}: any) => {
  const trainingInstanceTypesObject: any = {};
  if (rawTrainingInstanceTypes) {
    trainingInstanceTypesObject.trainingInstanceTypes = Object.keys(
      rawTrainingInstanceTypes
    ).reduce((acc: any, id) => {
      const item = rawTrainingInstanceTypes[id];

      if (item.selected) {
        const alternativeTitleObj: any = {};
        if (item.alternativeTitle) {
          alternativeTitleObj.alternativeTitle = item.alternativeTitle;
        }
        acc.push({ trainingInstanceTypeId: id, ...alternativeTitleObj });
      }

      return acc;
    }, []);
  }
  const data = {
    ...rest,
    ...trainingInstanceTypesObject,
    ...(standardPrice
      ? { standardPrice: Number(standardPrice) }
      : { standardPrice: null }),
    customFieldsValues:
      customFieldsValues &&
      Object.keys(customFieldsValues).map((fieldId) => ({
        fieldId,
        values: customFieldsValues[fieldId],
      })),
  };

  return data;
};
