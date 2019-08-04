import React from 'react'

import Ul, { Li } from '../layout/Ul'
import SainBurys from '../logos/SainBurys'
import Trainline from '../logos/Trainline'
import Telegraph from '../logos/Telegraph'
import Xing from '../logos/Xing'
import IBM from '../logos/IBM'
import Microsoft from '../logos/Microsoft'
import Asos from '../logos/ASOS'
import { LIGHT_BLUE } from '../../config/styles'

const TrustedByLogoList2 = () => (
  <Ul variant="unstyled">
    <Li>
      <Microsoft colour={LIGHT_BLUE} height={60} />
    </Li>
    <Li>
      <Trainline colour={LIGHT_BLUE} height={65} />
    </Li>
    <Li>
      <Telegraph colour={LIGHT_BLUE} height={75} width={250} />
    </Li>
    <Li>
      <SainBurys colour={LIGHT_BLUE} height={75} width={250} />
    </Li>
    <Li>
      <Asos colour={LIGHT_BLUE} height={45} />
    </Li>
    <Li>
      <IBM colour={LIGHT_BLUE} height={90} />
    </Li>
    <Li>
      <Xing colour={LIGHT_BLUE} height={85} y={20} />
    </Li>
  </Ul>
)

export default TrustedByLogoList2
