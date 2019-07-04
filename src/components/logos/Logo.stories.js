import React from 'react'
import { storiesOf } from '@storybook/react'
import Capgemini from './Capgemini'
import ASOS from './ASOS'
import FinancialTimes from './FinancialTimes'
import JohnLewis from './JohnLewis'
import { RGALogo } from './RGALogo'
import SainBurys from './SainBurys'
import Telegraph from './Telegraph'
import Tesco from './Tesco'
import Trainline from './Trainline'
import IBM from './IBM'
import IKEA from './IKEA'
import LeanJS from './LeanJS'
import Microsoft from './Microsoft'
import ReactLogo from './ReactLogo'
import Xing from './Xing'

storiesOf('Atoms | Logos', module)
  .add('ASOS', () => <ASOS />)
  .add('Capgemini', () => <Capgemini />)
  .add('Financial Times', () => <FinancialTimes />)
  .add('IBM', () => <IBM />)
  .add('IKEA', () => <IKEA />)
  .add('John Lewis', () => <JohnLewis />)
  .add('LeanJS', () => <LeanJS />)
  .add('Microsoft', () => <Microsoft />)
  .add('React', () => <ReactLogo />)
  .add('React GraphQL Academy', () => <RGALogo />)
  .add('Sainburys', () => <SainBurys />)
  .add('Telegraph', () => <Telegraph />)
  .add('Tesco', () => <Tesco />)
  .add('Trainline', () => <Trainline />)
  .add('Xing', () => <Xing />)
