import React from 'react';

import Form, { required, composeValidators, mustBeEmail } from './Form';
import CheckboxField from './CheckboxField';
import InputField from './InputField';
// import Link, { styleChildLinkColor, MailtoLink } from "../navigation/Link"
import Button from '../buttons/Button';
import { Strong } from '../text';
import Spinner from '../elements/Spinner';
import { rsvpWebinar } from '../../api';
import { WHITE, DARKGREY } from '../../config/styles';
import { P } from '../text';
import Link from '../navigation/Link';

interface WebinarFormProps {
  eventName: string;
  autopilotListId: string;
}

export const WebinarForm = ({
  eventName,
  autopilotListId,
}: WebinarFormProps) => (
  <Form
    onSubmit={(data) => rsvpWebinar({ ...data, eventName, autopilotListId })}
  >
    {({ submitting, submitSucceeded }) =>
      submitSucceeded ? (
        <>
          <Strong large color={WHITE}>
            Thank you for your submission! We will be in touch shortly.
          </Strong>
          <P>
            If you haven’t received an email with the Zoom link it might be
            because of your email settings. Please, contact lena@leanjs.com to
            get a link to the Webinar
          </P>
        </>
      ) : (
        <React.Fragment>
          <InputField
            color={WHITE}
            label="Full name (required)"
            name={`name`}
            placeholder="eg. Steve Jobs"
            validate={required}
          />
          <InputField
            color={WHITE}
            label="Email (required)"
            name={`email`}
            placeholder="eg. name@company.com"
            validate={composeValidators(mustBeEmail, required)}
          />
          <InputField
            color={WHITE}
            label="Country (required)"
            name={`country`}
            placeholder="Where are you based?"
            validate={required}
          />
          <InputField
            color={WHITE}
            label="Company (required)"
            name={`company`}
            validate={required}
          />
          <InputField
            color={WHITE}
            label="Job title (required)"
            name={`job`}
            validate={required}
          />
          <CheckboxField
            color={WHITE}
            name="signUpNewletters"
            value="1481e8cf-7acc-48b5-a63f-45f0fd1db076"
            label="Sign up to the LeanJS newsletter"
          />
          <P sx={{ color: WHITE }}>
            We won't spam you as per our{' '}
            <Link className="footer-privacy-policy" to="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </P>
          <Button type="submit">
            {submitting ? (
              <Spinner color={DARKGREY} />
            ) : (
              'Sign up for the webinar'
            )}
          </Button>
        </React.Fragment>
      )
    }
  </Form>
);
