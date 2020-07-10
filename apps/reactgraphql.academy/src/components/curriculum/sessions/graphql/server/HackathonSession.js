import React from 'react';
import Ul, { Li } from '../../../../layout/Ul';
import Session from '../../Session';

const HackathonSession = () => (
  <Session>
    <Ul>
      <Li>
        Consolidate your GraphQL API knowleadge by building a real-world project
        from scratch
      </Li>
      <Li>Get advice and guidance from our GraphQL mentors</Li>
      <Li>Work on real-world problems with other devs</Li>
      <Li>Deploy your GraphQL project to the cloud</Li>
      <Li>
        Demo your GraphQL project at the end of the day to all the attendees
        (optional)
      </Li>
    </Ul>
  </Session>
);

// HackathonSession.defaultProps = {
//   title: 'Hackathon (optional)',
// };

export default HackathonSession;
