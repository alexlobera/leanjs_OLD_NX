import React from 'react';

import { WHITE } from '../../config/styles';
import { Button } from '../buttons';
import { H3, P } from '../text';
import { InputField, Form, CheckboxField } from '.';

import { composeValidators, required, mustBeEmail } from './validations';
import { contactLeanJS } from '../../api/rest';

import Spinner from './Spinner';

const RSVPForm = ({ sx = {}, ...rest }) => (
  <Form onSubmit={contactLeanJS}>
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
            name="meetup-name"
            placeholder="eg. Steve Jobs"
            validate={required}
          />
          <InputField
            color={WHITE}
            label="Email (required)"
            name="meetup-email"
            placeholder="eg. name@company.com"
            validate={composeValidators(mustBeEmail, required)}
          />
          <InputField
            color={WHITE}
            label="Job title (required)"
            placeholder="Full-stack developer"
            name="meetup-job"
            validate={required}
          />
          <InputField
            color={WHITE}
            placeholder="Where are you based?"
            label="Location (required)"
            name="meetup-location"
            validate={required}
          />
          <CheckboxField
            color={WHITE}
            name="sign-up-newsletter"
            label="Sign up to our newsletter"
          />
          <Button
            variant={'primary'}
            type="submit"
            disabled={submitting}
            className="rsp-meetup-button"
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
