import React from 'react';
import { Li } from '../../layout/Ul';
import Link from '../../navigation/Link';

const TargetAudienceList = () => (
  <React.Fragment>
    <Li>You know JavaScript, HTML, git, and a bit of React</Li>
    <Li>
      Intense training for extremely rapid learning by focusing on one thing
      during one week.
    </Li>
    <Li>You are interested in code reviews and pair programming.</Li>
    <Li>
      You agree to our{' '}
      <Link to="/blog/react-graphql-academy-teaching-method/">
        teaching method
      </Link>
      .
    </Li>
  </React.Fragment>
);

export default TargetAudienceList;
