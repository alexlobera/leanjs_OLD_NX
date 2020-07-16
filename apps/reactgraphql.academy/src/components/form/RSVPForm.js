import React from 'react';

import { WHITE } from '../../config/styles';
import { Button } from '../buttons';
import { H3, P } from '../text';
import { InputField, Form, CheckboxField } from '.';

import { composeValidators, required, mustBeEmail } from './validations';
import { rsvpMeetup } from '../../api/rest';

import Spinner from './Spinner';

const RSVPForm = ({
  eventName,
  autopilotListId = 'ea558878-d951-4a88-a510-83186dbf9aae',
}) => (
  <Form
    onSubmit={(data) => rsvpMeetup({ ...data, eventName, autopilotListId })}
  >
    {({ submitSucceeded, submitting }) =>
      submitSucceeded ? (
        <>
          <H3 large color={WHITE}>
            Thank you for your submission! We will be in touch shortly.
          </H3>
          <P>
            If you haven’t received an email with the Zoom link it might be
            because of your email settings. Please, contact lena@leanjs.com to
            get the Zoom link.
          </P>
        </>
      ) : (
        <>
          <InputField
            color={WHITE}
            label="Full name (required)"
            name="name"
            placeholder="eg. Steve Jobs"
            validate={required}
          />
          <InputField
            color={WHITE}
            label="Email (required)"
            name="email"
            placeholder="eg. name@company.com"
            validate={composeValidators(mustBeEmail, required)}
          />
          <InputField
            color={WHITE}
            label="Job title (required)"
            placeholder="Full-stack developer"
            name="job"
            validate={required}
          />
          <InputField
            color={WHITE}
            placeholder="Where are you based?"
            label="Location (required)"
            name="location"
            validate={required}
          />
          <CheckboxField
            color={WHITE}
            name="signUpNewletters"
            value="09792B5E-7B03-4A73-8712-17BC26E332CD"
            label="Sign up to our newsletter"
          />
          <Button
            variant={'primary'}
            type="submit"
            disabled={submitting}
            className="rsp-button"
            sx={{ mt: 3 }}
          >
            {submitting ? <Spinner /> : 'RSVP'}
          </Button>
        </>
      )
    }
  </Form>
);

export default RSVPForm;
