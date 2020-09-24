import React from 'react';

import { Field, Form, TextField } from '../../App/Components/Forms';
import Button from '../../App/Components/Buttons/Button';
import { useMagic } from '../Components/MagicProvider';
// import { getSession } from '../Utils';
import {
  required,
  mustBeEmail,
  composeValidators,
} from '../../App/Components/Forms/validators';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    minWidth: 300,
    textAlign: 'center',
  },
  avatar: {
    margin: '1em',
    textAlign: 'center ',
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    display: 'flex',
  },
  hint: {
    textAlign: 'center',
    marginTop: '1em',
    color: '#ccc',
  },
};

const Login = ({ history }) => {
  const { login, loggedIn } = useMagic();

  if (loggedIn) {
    history.push('/backoffice');

    return null;
  }

  return (
    <div style={{ ...styles.main }}>
      <div style={styles.card}>
        <div style={styles.form}>
          <p style={styles.hint}>Up Mentoring Login</p>
        </div>
        {/* <Link target="_self" to={`${API_BASE_URL}/auth/github`}>
          Login with GitHub
        </Link> */}
        <Form onSubmit={login}>
          {({ formSubmitted, submitting }) =>
            formSubmitted ? null : (
              <>
                <Field
                  component={TextField}
                  validate={composeValidators(mustBeEmail, required)}
                  label="Enter your email address and we'll email you a login link:"
                  name="email"
                  placeholder="eg. steve@wozniak.com"
                />
                <Button type="submit" disabled={submitting}>
                  {submitting ? '...' : 'Submit'}
                </Button>
              </>
            )
          }
        </Form>
      </div>
    </div>
  );
};

export default Login;
