import React from 'react';
import createDecorator from 'final-form-focus';
import { gql } from '@apollo/client';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import CheckboxField from '../../../../App/Components/Forms/CheckboxField';
import Flex from '../../../../App/Components/Layout/Flex';
import Box from '../../../../App/Components/Layout/Box';
import Button from '../../../../App/Components/Buttons/Button';
import { Col, Row, LocationAutocomplete } from '../../../../App';
import Heading from '../../../../App/Components/Text/Heading';
import TimeInput from '../../../../App/Components/Forms/TimeInput';
import DatePicker from '../../../../App/Components/Forms/DatePicker';
import Select from '../../../../App/Components/Forms/Select';
import TextAreaField from '../../../../App/Components/Forms/TextAreaField';
import { Field, Form, TextField } from '../../../../App/Components/Forms';
import Link from '../../../../App/Components/Navigation/Link';
import { P } from '../../../../App/Components/Text/P';
import {
  required,
  requiredTime,
  onlyPositiveNumbers,
  twoDecimals,
  mustBeUrl,
  composeValidators,
  atLeastFiveCharacters,
} from '../../../../App/Components/Forms/validators';
import {
  formatToNumber,
  parseToInt,
  isOnline,
} from '../../../../App/Components/Forms/utils';

import { formatInitialValues, transformSubmitValues } from './dataUtils';

const focusOnError = createDecorator();
export const FORM_SPEAKERS = 'speakers';
export const FORM_SPEAKERS_LINKS = 'links';
export const FORM_SPONSORS = 'sponsors';
export const FORM_AGENDA = 'agenda';
export const FORM_AGENDA_SESSIONS = 'sessions';

interface OnChangePlace {
  utcOffset: number;
  city: string;
}

const EventForm = ({ onSubmit, initialValues = {} }: any) => {
  const formatedInitialValues = formatInitialValues(initialValues);

  return (
    <>
      <Form
        onSubmit={transformSubmitValues(onSubmit)}
        initialValues={formatedInitialValues}
        decorators={[focusOnError]}
        mutators={arrayMutators}
      >
        {({
          form,
          values,
          submitting,
          pristine,
          form: {
            mutators: { push },
          },
        }: any) => {
          const isEventOnline = isOnline(values);

          return (
            <>
              <Flex flexDirection="column">
                <Field
                  name="meetup.id"
                  component={TextField}
                  label="Meetup id"
                  type="text"
                  placeholder="Enter the id of the event in meetup.com"
                  validate={onlyPositiveNumbers}
                />
                <Field
                  name="title"
                  component={TextField}
                  label="Title"
                  type="text"
                  placeholder="Enter the title here"
                  validate={required}
                />
                <Field
                  name="overview"
                  displayLink
                  component={TextAreaField}
                  label="Overview"
                  type="text"
                  placeholder="Enter the overview here"
                />
                <Field
                  name="venueName"
                  component={TextField}
                  label="Venue name"
                  type="text"
                  placeholder="Enter the venue name here"
                />
                <Field
                  name="address"
                  component={TextField}
                  label="Venue address"
                  type="text"
                  placeholder="Enter the venue address here"
                />
                <Field
                  name="cityCountry"
                  validate={required}
                  component={LocationAutocomplete}
                  label="City"
                  onChangePlace={({ utcOffset, city }: OnChangePlace) => {
                    form.change('utcOffset', utcOffset);
                    form.change('city', city);
                  }}
                  type="text"
                  placeholder="Enter the city here"
                />
                <CheckboxField name="isOnline" value={true} label="Is online" />
                {!isEventOnline && (
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
                  label="Map Url"
                  type="text"
                  placeholder="Enter the map URL here"
                />
                <Heading variant="h4">Dates and timings</Heading>
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
                      label="Maximum number of attendees"
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
                      validate={composeValidators(twoDecimals, required)}
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
                <Box as="hr" mt={6} />
                <FieldArray name={FORM_SPONSORS}>
                  {({ fields: sponsorFields }) => {
                    return (
                      <>
                        <Heading variant="h4">Sponsors</Heading>
                        {sponsorFields.map((sponsorsFormName, sponsorIndex) => (
                          <React.Fragment key={sponsorsFormName}>
                            <Field
                              name={`${sponsorsFormName}.url`}
                              component={TextField}
                              label="Website URL"
                              type="text"
                              placeholder="eg. https://someurl.com"
                              validate={composeValidators(mustBeUrl)}
                            />
                            <Field
                              name={`${sponsorsFormName}.imageUrl`}
                              component={TextField}
                              label="Logo URL"
                              type="text"
                              placeholder="eg. https://someurl.com/image"
                              validate={composeValidators(mustBeUrl, required)}
                            />
                            <P mt={2} mb={2}>
                              <Link
                                onClick={() =>
                                  sponsorFields.remove(sponsorIndex)
                                }
                              >
                                Delete sponsor
                              </Link>
                            </P>
                          </React.Fragment>
                        ))}
                        <Flex mt={5} flexDirection="column" width={1 / 2}>
                          <Button
                            disabled={submitting}
                            variant="tertiary"
                            onClick={() => push(FORM_SPONSORS, undefined)}
                          >
                            Add another sponsor
                          </Button>
                        </Flex>
                      </>
                    );
                  }}
                </FieldArray>
                <Box as="hr" mt={6} />
                <Field
                  name="callForPapersUrl"
                  component={TextField}
                  label="Call for papers URL"
                  type="text"
                  validate={mustBeUrl}
                />
                <Heading variant="h4">Speakers</Heading>
                <FieldArray name={FORM_SPEAKERS}>
                  {({ fields }) => (
                    <>
                      {fields.map((speakersFormName, index) => (
                        <React.Fragment key={speakersFormName}>
                          <Field
                            name={`${speakersFormName}.fullName`}
                            component={TextField}
                            label="Full name"
                            type="text"
                            placeholder="eg. John Doo"
                            validate={composeValidators(
                              atLeastFiveCharacters,
                              required
                            )}
                          />
                          <Field
                            name={`${speakersFormName}.profilePicUrl`}
                            component={TextField}
                            label="Profile picture URL"
                            type="text"
                            placeholder="eg. https://someurl.com"
                            validate={composeValidators(mustBeUrl, required)}
                          />
                          <Field
                            name={`${speakersFormName}.jobTitle`}
                            component={TextField}
                            label="Job title"
                            type="text"
                          />
                          <Field
                            name={`${speakersFormName}.companyName`}
                            component={TextField}
                            label="Company name"
                            type="text"
                          />
                          <Field
                            name={`${speakersFormName}.bio`}
                            component={TextAreaField}
                            label="Biography"
                          />

                          <FieldArray
                            name={`${speakersFormName}.${FORM_SPEAKERS_LINKS}`}
                          >
                            {({ fields: linkFields }) => {
                              return (
                                <>
                                  <Heading variant="h6">
                                    Speaker's links
                                  </Heading>
                                  {linkFields.map(
                                    (linksFormName, linkIndex) => (
                                      <React.Fragment key={linksFormName}>
                                        <Field
                                          name={`${linksFormName}.name`}
                                          component={TextField}
                                          label="Name"
                                          validate={required}
                                        />
                                        <Field
                                          name={`${linksFormName}.url`}
                                          component={TextField}
                                          label="URL"
                                          type="text"
                                          placeholder="eg. https://someurl.com"
                                          validate={composeValidators(
                                            mustBeUrl,
                                            required
                                          )}
                                        />
                                        <P mt={2} mb={2}>
                                          <Link
                                            onClick={() =>
                                              linkFields.remove(linkIndex)
                                            }
                                          >
                                            Delete link
                                          </Link>
                                        </P>
                                        <hr />
                                      </React.Fragment>
                                    )
                                  )}
                                  <Flex mt={5}>
                                    <Button
                                      disabled={submitting}
                                      variant="tertiary"
                                      onClick={() =>
                                        push(
                                          `${speakersFormName}.${FORM_SPEAKERS_LINKS}`,
                                          undefined
                                        )
                                      }
                                    >
                                      Add another speaker's link
                                    </Button>
                                  </Flex>
                                </>
                              );
                            }}
                          </FieldArray>
                          <Box as="hr" mt={6} />
                          <P mt={2} mb={2}>
                            <Link onClick={() => fields.remove(index)}>
                              Delete speaker
                            </Link>
                          </P>
                        </React.Fragment>
                      ))}
                      <Flex mt={5} flexDirection="column" width={1 / 2}>
                        <Button
                          disabled={submitting}
                          variant="tertiary"
                          onClick={() => push(FORM_SPEAKERS, undefined)}
                        >
                          Add another speaker
                        </Button>
                      </Flex>
                    </>
                  )}
                </FieldArray>
                <Box as="hr" mt={6} />
                <Heading variant="h4">Agenda</Heading>
                <FieldArray name={FORM_AGENDA}>
                  {({ fields: sectionFields }) => (
                    <>
                      {sectionFields.map((agendaFormName, sectionIndex) => (
                        <React.Fragment key={agendaFormName}>
                          <Heading variant="h6">
                            Section {sectionIndex + 1}
                          </Heading>
                          <Field
                            name={`${agendaFormName}.title`}
                            component={TextField}
                            label="Title"
                            type="text"
                            validate={composeValidators(required)}
                          />

                          <FieldArray
                            name={`${agendaFormName}.${FORM_AGENDA_SESSIONS}`}
                          >
                            {({ fields: sessionFields }) => {
                              return (
                                <>
                                  {sessionFields.map(
                                    (sessionsFormName, sessionsIndex) => (
                                      <React.Fragment key={sessionsFormName}>
                                        <Heading variant="h6">
                                          Session {sessionsIndex + 1} of section{' '}
                                          {sectionIndex + 1}
                                        </Heading>
                                        <Field
                                          name={`${sessionsFormName}.title`}
                                          component={TextField}
                                          label="Title"
                                          validate={required}
                                        />
                                        <Field
                                          name={`${sessionsFormName}.description`}
                                          component={TextField}
                                          label="Description"
                                          type="text"
                                        />
                                        <P mt={2} mb={2}>
                                          <Link
                                            onClick={() =>
                                              sessionFields.remove(
                                                sessionsIndex
                                              )
                                            }
                                          >
                                            Delete session {sessionsIndex + 1}{' '}
                                            of section {sectionIndex + 1}
                                          </Link>
                                        </P>
                                        <hr />
                                      </React.Fragment>
                                    )
                                  )}
                                  <Flex mt={5}>
                                    <Button
                                      disabled={submitting}
                                      variant="tertiary"
                                      onClick={() =>
                                        push(
                                          `${agendaFormName}.${FORM_AGENDA_SESSIONS}`,
                                          undefined
                                        )
                                      }
                                    >
                                      Add another session to the section (ADD
                                      SECTION TITLE?)
                                    </Button>
                                  </Flex>
                                </>
                              );
                            }}
                          </FieldArray>
                          <Box as="hr" mt={6} />
                          <P mt={2} mb={2}>
                            <Link
                              onClick={() => sectionFields.remove(sectionIndex)}
                            >
                              Delete section {sectionIndex + 1}
                            </Link>
                          </P>
                        </React.Fragment>
                      ))}
                      <Flex mt={5} flexDirection="column" width={1 / 2}>
                        <Button
                          disabled={submitting}
                          variant="tertiary"
                          onClick={() => push(FORM_AGENDA, undefined)}
                        >
                          Add another section
                        </Button>
                      </Flex>
                    </>
                  )}
                </FieldArray>
                <Box as="hr" mt={6} />
                <Flex mt={5} flexDirection="column" width={1 / 2}>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={pristine || submitting}
                    loading={submitting}
                  >
                    Save all
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

export const EVENT_FORM_FRAGMENT = gql`
  fragment eventFormFragment on Event {
    id
    published {
      meetup {
        id
      }
      isOnline
      title
      overview
      sponsors {
        url
        imageUrl
      }
      agenda {
        title
        sessions {
          title
          description
        }
      }
      callForPapersUrl
      speakers {
        fullName
        bio
        profilePicUrl
        jobTitle
        companyName
        links {
          name
          url
        }
      }
      venueName
      address
      mapUrl
      city
      cityCountry
      startDate
      endDate
      utcOffset
      maxAttendees
      standardPrice
      currency
    }
  }
`;

export default EventForm;
