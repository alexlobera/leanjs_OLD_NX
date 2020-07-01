import React from 'react';

import Ul, { Li } from '../layout/Ul';
import Trainline from '../logos/Trainline';
import Telegraph from '../logos/Telegraph';
import Xing from '../logos/Xing';
import IBM from '../logos/IBM';
import Nationwide from '../logos/Nationwide';
import Asos from '../logos/ASOS';
import NetAPorter from '../logos/NetAPorter';

const TrustedByLogoList2 = ({ colour }) => (
  <Ul variant="unstyled">
    <Li>
      <NetAPorter colour={colour} height={90} />
    </Li>
    <Li>
      <Nationwide colour={colour} height={100} />
    </Li>
    <Li mb={3}>
      <Asos colour={colour} height={40} />
    </Li>
    <Li>
      <Trainline colour={colour} height={65} />
    </Li>
    <Li>
      <Telegraph colour={colour} height={75} width={250} />
    </Li>
    <Li>
      <IBM colour={colour} height={65} />
    </Li>
    <Li>
      <Xing colour={colour} height={75} y={20} />
    </Li>
  </Ul>
);

export default TrustedByLogoList2;
