import React from 'react';
import { gql } from '@apollo/client';
import createDecorator from 'final-form-focus';
import arrayMutators from 'final-form-arrays';

import { Col, Row } from '../../../../App/Components/Layout/Grid';
import CheckboxField from '../../../../App/Components/Forms/CheckboxField';
import Flex from '../../../../App/Components/Layout/Flex';
import {
  Field,
  Form,
  TextField,
  RichTextField,
  TextAreaField,
} from '../../../../App/Components/Forms';
import {
  formatToNumber,
  formatArrayToFirstArgument,
} from '../../../../App/Components/Forms/utils';
import Label from '../../../../App/Components/Forms/Label';
import Button from '../../../../App/Components/Buttons/Button';
import Box from '../../../../App/Components/Layout/Box';
import {
  required,
  composeValidatorsFactory,
  composeValidators,
  minAmount,
  twoDecimals,
} from '../../../../App/Components/Forms/validators';
import Select from '../../../../App/Components/Forms/Select';
import { formatInitialValues, formatSubmitValues } from './dataUtils';
import Autocomplete from '../../../../App/Components/Forms/Autocomplete';

const focusOnError = createDecorator();

const priceValidator = composeValidators(minAmount(0.5), twoDecimals);

const TrainingForm = ({
  fields,
  trainingInstanceTypes,
  onSubmit,
  initialValues,
  allVideos,
}: any) => {
  const onSubmitOptions = {
    redirectToCreateTrainingInstance: false,
  };
  const formatedInitialValues = formatInitialValues(initialValues);

  return (
    <>
      <Form
        mutators={arrayMutators}
        onSubmit={(values: any) =>
          onSubmit(onSubmitOptions)(formatSubmitValues(values))
        }
        initialValues={formatedInitialValues}
        decorators={[focusOnError]}
      >
        {({
          form: {
            mutators: { push },
          },
          submitting,
          values,
        }: any) => {
          return (
            <>
              <Flex flexDirection="column">
                <Field
                  name="title"
                  component={TextField}
                  validate={required}
                  label="Course name"
                  type="text"
                  placeholder="Insert name of course"
                />
                <Field
                  name="subtitle"
                  component={TextField}
                  label="Course subtitle"
                  type="text"
                  placeholder="Insert subtitle of the course"
                />
                <CheckboxField
                  mt={1}
                  mb={'-20px'}
                  name="onDemand"
                  label="On demand"
                />
                {values.onDemand && (
                  <Row>
                    <Col md={3}>
                      <Field
                        name="standardPrice"
                        component={TextField}
                        label="Price"
                        type="text"
                        parse={formatToNumber}
                        validate={priceValidator}
                        placeholder="99"
                      />
                    </Col>
                    <Col md={3}>
                      <Field
                        name="currency"
                        component={Select}
                        items={['gbp', 'eur', 'usd']}
                        label="Currency"
                        validate={(value: string) =>
                          values.standardPrice && required(value)
                        }
                      />
                    </Col>
                  </Row>
                )}
                {fields &&
                  fields.edges &&
                  fields.edges.map(({ node }: any) => {
                    // TODO create a serializer for this
                    const {
                      id,
                      validators,
                      title,
                      options: { layout = null, list = null } = {},
                    } = node;
                    return (
                      <Field
                        key={id}
                        name={`customFieldsValues.${id}.`}
                        component={layout === 'select' ? Select : null}
                        label={title}
                        items={list}
                        validate={composeValidatorsFactory(validators)}
                        format={formatArrayToFirstArgument}
                      />
                    );
                  })}
                {trainingInstanceTypes &&
                trainingInstanceTypes.edges &&
                trainingInstanceTypes.edges.length ? (
                  <>
                    <Label>Training Instance Types</Label>
                    {trainingInstanceTypes.edges.map(
                      ({ node: { id, title } }: any = {}) => {
                        const name = `trainingInstanceTypes[${id}]`;

                        return (
                          <Flex key={id}>
                            <CheckboxField
                              name={`${name}.selected`}
                              label={title}
                            />
                            {values &&
                              values.trainingInstanceTypes &&
                              values.trainingInstanceTypes[id] &&
                              values.trainingInstanceTypes[id].selected && (
                                <Field
                                  name={`${name}.alternativeTitle`}
                                  component={TextField}
                                  type="text"
                                  flex={{
                                    justifyContent: 'center',
                                    ml: 5,
                                    flex: 1,
                                  }}
                                  placeholder="Optional alternative title"
                                />
                              )}
                          </Flex>
                        );
                      }
                    )}
                  </>
                ) : null}

                <Field
                  name="previewVideoId"
                  items={allVideos}
                  component={Autocomplete}
                  label="Select preview video"
                />
                <Field
                  name="description.syllabus"
                  component={RichTextField}
                  label="Insert curriculum"
                  type="text"
                />
                <Field
                  name="description.objectives"
                  component={RichTextField}
                  label="Enter learning objectives"
                  type="text"
                />
                <Field
                  name="description.description"
                  component={TextAreaField}
                  label="Enter description"
                  type="text"
                />
                {values.id ? (
                  <Box>
                    <Button variant="tertiary" mt={5} mr={2} type="submit">
                      Update course
                    </Button>
                  </Box>
                ) : (
                  <Box mt={5}>
                    <Button variant="tertiary" mr={2} type="submit">
                      Save course
                    </Button>
                    <Button
                      onClick={() => {
                        onSubmitOptions.redirectToCreateTrainingInstance = true;
                      }}
                      variant="tertiary"
                      type="submit"
                    >
                      Save and create instance
                    </Button>
                  </Box>
                )}
              </Flex>
            </>
          );
        }}
      </Form>
    </>
  );
};

export const TRAINING_FORM_FRAGMENT = gql`
  fragment trainingFormFragment on Training {
    id
    title
    subtitle
    standardPrice
    currency
    onDemand
    previewVideoId
    description {
      syllabus
      objectives
      description
    }
    customFieldsValues {
      fieldId
      values
    }
    trainingInstanceTypes {
      trainingInstanceTypeId
      alternativeTitle
    }
  }
`;

export const TRAINING_FORM_QUERY_FRAGMENT = gql`
  fragment trainingQueriesFragment on Query {
    trainingInstanceTypes {
      edges {
        node {
          name
          title
          id
        }
      }
    }
    fields(filter: { scopes: [{ name: Training }] }) {
      edges {
        node {
          name
          id
          title
          type
          scopes {
            name
          }
          validators {
            name
            payload {
              type
              value
            }
          }
          options {
            list {
              value
              title
            }
            layout
          }
        }
      }
    }
  }
`;

export default React.memo(TrainingForm);
