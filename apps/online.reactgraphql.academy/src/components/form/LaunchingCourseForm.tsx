import React from 'react';
import { navigate } from 'gatsby';
import { Spinner } from '../display';
import {
  Form,
  Field,
  Input,
  Button,
  composeValidators,
  mustBeEmail,
  required,
} from '.';
import { useMagic } from '../auth/MagicProvider';
import { courseSubscribe } from '../../api';

interface Props {
  courseName: string;
  autopilotListId: string;
}

function LaunchingCourseForm(props: Props) {
  const { getMetadata } = useMagic();
  const { courseName, autopilotListId } = props;
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    getMetadata().then((metaData) => {
      metaData?.email && setEmail(metaData.email);
    });
  }, []);

  return (
    <Form
      onSubmit={async ({ email }: any) => {
        await courseSubscribe({ courseName, autopilotListId, email });
        navigate('/launching-course-thanks');
      }}
      initialValues={{ email }}
    >
      {({ formSubmitted, submitting }) =>
        formSubmitted ? null : (
          <>
            <Field
              component={Input}
              color="#fff"
              validate={composeValidators(mustBeEmail, required)}
              label="Enter your email address and we'll notify you we launch this course"
              name="email"
              placeholder="eg. steve@wozniak.com"
            />
            <Button
              variant="primary"
              type="submit"
              disabled={submitting}
              className="login-submit-button"
              sx={{ mt: 4 }}
            >
              {submitting ? <Spinner /> : 'Submit'}
            </Button>
          </>
        )
      }
    </Form>
  );
}

export default LaunchingCourseForm;
