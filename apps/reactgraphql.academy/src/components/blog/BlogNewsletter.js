import React from 'react';
import { navigate } from 'gatsby';

import Link from '../navigation/Link';
import { Button } from '../buttons';
import { H3, P } from '../text';
import { InputField, Form } from '../form';
import { composeValidators, required, mustBeEmail } from '../form/validations';
import { triggerSubscribe } from '../../api/rest';
import Spinner from '../form/Spinner';

const BlogNewsletter = () => {
  const handleFormSubmit = async ({ email }) => {
    await triggerSubscribe({ email, resources: false });
    navigate('/thanks-for-signing-up');
  };
  return (
    <React.Fragment>
      <H3 sx={{ mb: 3 }}>Join our newsletter</H3>
      {/* <P>Sign up for our newsletter and don't miss a thing!</P> */}
      <Form onSubmit={handleFormSubmit}>
        {({ formSubmitted, submitting }) =>
          !formSubmitted && (
            <>
              <InputField
                validate={composeValidators(mustBeEmail, required)}
                label="Your email address:"
                name="email"
                placeholder="eg. steve@wozniak.com"
              />
              <Button
                type="submit"
                disabled={submitting}
                className="newsletter-submit-button"
              >
                {submitting ? <Spinner color="#4a4a4a" /> : 'Submit email'}
              </Button>
            </>
          )
        }
      </Form>
      <P sx={{ pt: 3 }}>
        We won't spam you as per our{' '}
        <Link className="footer-privacy-policy" to="/privacy-policy">
          Privacy Policy
        </Link>
        .
      </P>
      {/* <P>
        Looking to{' '}
        <Link to="/unsubscribe/" className="footer-unsubscribe">
          unsubscribe?
        </Link>
      </P> */}
    </React.Fragment>
  );
};

export default React.memo(BlogNewsletter);
