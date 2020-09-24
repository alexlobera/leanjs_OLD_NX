import React from 'react';
import createDecorator from 'final-form-focus';
import { gql } from '@apollo/client';

import Flex from '../../../../../App/Components/Layout/Flex';
import Label from '../../../../../App/Components/Forms/Label';
import { Ul, Li } from '../../../../../App/Components/Text/Ul';
import Button from '../../../../../App/Components/Buttons/Button';
import { Col, Row, LocationAutocomplete } from '../../../../../App';
import Link from '../../../../../App/Components/Navigation/Link';
import Heading from '../../../../../App/Components/Text/Heading';
import TimeInput from '../../../../../App/Components/Forms/TimeInput';
import DatePicker from '../../../../../App/Components/Forms/DatePicker';
import CheckboxField from '../../../../../App/Components/Forms/CheckboxField';
import Select from '../../../../../App/Components/Forms/Select';
import { Field, Form, TextField } from '../../../../../App/Components/Forms';
import {
  required,
  requiredTime,
  priceValidator,
} from '../../../../../App/Components/Forms/validators';
import {
  formatToNumber,
  parseToInt,
  isOnline,
} from '../../../../../App/Components/Forms/utils';
import CoachesSelector from '../../../../../Backoffice/People/Components/CoachesSelector';
import { formatInitialValues, transformSubmitValues } from './dataUtils';

const focusOnError = createDecorator();

const TrainingInstanceForm = ({
  onSubmit,
  initialValues = {},
  training,
}: any) => {
  const trainingInstanceTypes =
    training && training.trainingInstanceTypes
      ? training.trainingInstanceTypes
      : [];

  return (
    <>
      <Form
        onSubmit={transformSubmitValues(onSubmit)}
        initialValues={formatInitialValues(initialValues)}
        decorators={[focusOnError]}
      >
        {({ form, submitting, pristine, values }: any) => {
          const isInstanceOnline = isOnline(values);

          return (
            <>
              <Flex flexDirection="column">
                <Heading variant="h6">
                  {initialValues.id ? 'Update the ' : 'Create a new '} instance
                  of this course: {training?.title}
                </Heading>
                {/* {initialValues.trainingId ? (
                  <Field name="trainingId" render={() => null} />
                ) : (
                  <Field
                    name="trainingId"
                    component={TrainingSelector}
                    validate={required}
                  />
                )} */}
                <Field name="trainingId" render={() => null} />
                {trainingInstanceTypes.length ? (
                  <Field
                    name="trainingInstanceTypeId"
                    component={Select}
                    items={trainingInstanceTypes.reduce(
                      (acc: any, item: any) => {
                        if (item.trainingInstanceType) {
                          const {
                            trainingInstanceType: { id, title },
                          } = item;
                          acc.push({
                            value: id,
                            title,
                          });
                        }

                        return acc;
                      },
                      []
                    )}
                    label="Training Type"
                    validate={required}
                  />
                ) : null}

                <Field
                  name="venueName"
                  component={TextField}
                  label="Venue name"
                  type="text"
                  placeholder="Enter the venue name here"
                />
                <Field
                  name="cityCountry"
                  validate={required}
                  component={LocationAutocomplete}
                  label="City / Time zone"
                  onChangePlace={({ utcOffset, city }: any) => {
                    form.change('utcOffset', utcOffset);
                    form.change('city', city);
                  }}
                  type="text"
                  placeholder="Enter the city here"
                />
                <CheckboxField name="isOnline" value={true} label="Is online" />
                {!isInstanceOnline && (
                  <>
                    <Field
                      name="address"
                      component={TextField}
                      label="Venue address"
                      type="text"
                      placeholder="Enter the venue address here"
                    />
                  </>
                )}
                <Field
                  name="mapUrl"
                  component={TextField}
                  label={`${isInstanceOnline ? 'Room' : 'Map'} Url`}
                  type="text"
                  placeholder="Enter the URL here"
                />
                <Label>Dates and timings</Label>

                <Ul m={0} p={0} display="inherit">
                  <Li mr={3}>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Mon"
                      label="Mon"
                    />
                  </Li>
                  <Li mr={3}>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Tue"
                      label="Tue"
                    />
                  </Li>
                  <Li mr={3}>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Wed"
                      label="Wed"
                    />
                  </Li>
                  <Li mr={3}>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Thu"
                      label="Thu"
                    />
                  </Li>
                  <Li mr={3}>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Fri"
                      label="Fri"
                    />
                  </Li>
                  <Li mr={3}>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Sat"
                      label="Sat"
                    />
                  </Li>
                  <Li>
                    <CheckboxField
                      name="daysOfTheWeek[]"
                      value="Sun"
                      label="Sun"
                    />
                  </Li>
                </Ul>
                <Row>
                  <Col md={3}>
                    <Field
                      name="startDate"
                      component={DatePicker}
                      validate={required}
                      label="Enter start date"
                    />
                  </Col>
                  <Col md={3}>
                    <Field
                      name="endDate"
                      component={DatePicker}
                      validate={required}
                      label="Enter end date"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <Field
                      name="startTime"
                      validate={requiredTime}
                      component={TimeInput}
                      label="Enter start time"
                    />
                  </Col>
                  <Col md={3}>
                    <Field
                      name="endTime"
                      validate={requiredTime}
                      component={TimeInput}
                      label="End time"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <Field
                      name="maxAttendees"
                      component={TextField}
                      label="Maximum number of students"
                      type="text"
                      parse={parseToInt}
                      placeholder="20"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <Field
                      name="standardPrice"
                      component={TextField}
                      label="Price"
                      type="text"
                      parse={formatToNumber}
                      validate={priceValidator}
                      placeholder="2000"
                    />
                  </Col>
                  <Col md={3}>
                    <Field
                      name="currency"
                      component={Select}
                      items={['gbp', 'eur', 'usd']}
                      label="Currency"
                      validate={required}
                    />
                  </Col>
                </Row>
                <Heading mt={6} variant="h5">
                  Teaching staff
                </Heading>

                <Link>Assign Teaching Staff</Link>
                <Flex>
                  <Field
                    name="coaches"
                    initialValues={
                      initialValues.coaches ? initialValues.coaches : undefined
                    }
                    component={CoachesSelector}
                    validate={required}
                  />
                </Flex>

                <Flex mt={5} flexDirection="column" width={1 / 2}>
                  <Button variant="primary" type="submit">
                    Confirm and continue
                  </Button>
                </Flex>
              </Flex>
            </>
          );
        }}
      </Form>
    </>
  );
};

export const TRAINING_INSTANCE_FORM_QUERY_FRAGMENT = gql`
  fragment trainingInstanceTypesQueriesFragment on Query {
    trainingInstanceTypes {
      edges {
        node {
          id
          name
          title
        }
      }
    }
  }
`;

export default TrainingInstanceForm;
