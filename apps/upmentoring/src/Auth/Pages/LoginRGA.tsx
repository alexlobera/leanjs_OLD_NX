import React from 'react';
import { useMagic } from '@leanjs/magic-link';
import { useClient } from '@leanjs/graphql-client';

// import { Flex, Card } from '../components/layout';
// import { H1, H2, P, Spinner } from '../components/display';
// import {
//     Form,
//     Field,
//     Input,
//     Button,
//     composeValidators,
//     mustBeEmail,
//     required,
//     ErrorMessage,
// } from '../components/form';
// import Link from '../components/navigation/Link';
// import RGAOLogo from '../components/logos/RGAOLogo';
// import CheckboxField from '../components/form/CheckboxField';
import {
    Flex,
    Card,
    H1,
    H2,
    H3,
    P,
    Spinner,
    Input,
    Button,
    ErrorMessage,
    Box,
} from '@leanjs/ui-core';
import {
    Form,
    Field,
    composeValidators,
    mustBeEmail,
    required,
} from '@leanjs/ui-final-form';
import { useHistory } from 'react-router-dom';

import RGAOLogo from './RGAOLogo';
import Link from '../../App/Components/Navigation/Link';
import CheckboxField from '../../App/Components/Forms/CheckboxField';
import {
    triggerSubscribe,
    requireSignup,
    isContact,
    isOrgMember,
} from '../Api';

function LoginPage() {
    const { login, loggedIn, loading } = useMagic();
    const history = useHistory();

    React.useEffect(() => {
        if (loggedIn) {
            if (window.document.referrer) {
                window.location.replace(
                    window.document.referrer);
            } else {
                isOrgMember('@VVNFOjVhYWE5YjA3ZjE0NmU1Y2ZhZmFkMTg5ZQ==').then(
                    (isMember) => {
                        if (isMember) {
                            history.push('/backoffice');
                        } else {
                            window.location.replace('http://online.reactgraphql.academy/');
                        }
                    }
                );
            }
        }
    }, [loggedIn]);

    return (
        <Flex
            sx={{
                minHeight: '100vh',
                bg: 'react',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Flex sx={{ flexDirection: 'column', my: 6 }}>
                <Link to="/" sx={{ mx: 'auto' }}>
                    <RGAOLogo width={'200px'} />
                </Link>

                <Card sx={{ maxWidth: '500px', mt: 7 }}>
                    <Box sx={{ position: 'relative' }}>
                        {(loading || loggedIn) && (
                            <Flex
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(255,255,255, 0.9)',
                                }}
                            >
                                <H3>Loading</H3>
                            </Flex>
                        )}
                        <H1 sx={{ textAlign: 'center' }}>Login</H1>
                        <H2 sx={{ textAlign: 'center' }}>No sign up requied!</H2>
                        <Form
                            onSubmit={async ({ email, signUpNewsletter }: any) => {
                                const [
                                    islreadyContact,
                                    hasNotBoughtCourse,
                                ] = await Promise.all([isContact(email), requireSignup(email)]);

                                if (
                                    !signUpNewsletter &&
                                    !islreadyContact &&
                                    hasNotBoughtCourse
                                ) {
                                    return {
                                        signUpNewsletter: 'Sign up to our newsletter is required',
                                    };
                                }

                                const token = await login(email);

                                if (token && signUpNewsletter) {
                                    // clearStore();
                                    //if (signUpNewsletter)
                                    triggerSubscribe({ email, resources: false });
                                }
                            }}
                        >
                            {({
                                formSubmitted,
                                submitting,
                                submitErrors,
                                dirtySinceLastSubmit,
                                values,
                            }) => {
                                return formSubmitted ? null : (
                                    <>
                                        <Field
                                            component={Input}
                                            validate={composeValidators(mustBeEmail, required)}
                                            label="Enter your email address and we'll email you a login link:"
                                            name="email"
                                            placeholder="eg. steve@wozniak.com"
                                        />
                                        <CheckboxField
                                            name="signUpNewsletter"
                                            label="To access free videos, please sign up to our newsletter"
                                        />
                                        {!dirtySinceLastSubmit &&
                                            !submitting &&
                                            submitErrors?.signUpNewsletter &&
                                            !values.signUpNewsletter && (
                                                <ErrorMessage>
                                                    {submitErrors?.signUpNewsletter}
                                                </ErrorMessage>
                                            )}
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={submitting}
                                            className="login-submit-button"
                                            sx={{ mt: 4 }}
                                        >
                                            {submitting ? <Spinner /> : 'Submit'}
                                        </Button>
                                        <P>
                                            We won't spam you as per our{' '}
                                            <Link
                                                className="footer-privacy-policy"
                                                to="https://reactgraphql.academy/privacy-policy/"
                                            >
                                                Privacy Policy
                      </Link>
                      .
                    </P>
                                    </>
                                );
                            }}
                        </Form>

                        <P>
                            Do you have problems logging in with your registered email? Please
              contact us at{` `}
                            <Link
                                to="mailto:hello@reactgraphql.academy?subject=Login%20issue&body=Hi%20RGA%20team,"
                                className="login-contact-us-mailto"
                            >
                                hello@reactgraphql.academy
              </Link>
              .
            </P>
                    </Box>
                </Card>
            </Flex>
        </Flex>
    );
}

export default LoginPage;
