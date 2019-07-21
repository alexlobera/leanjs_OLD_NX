import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './Alert'

storiesOf('Atoms | Alert', module)
  .add('Default', () => <Alert>Standard Alert</Alert>)
  .add('Danger', () => <Alert variant="danger">Watch out!</Alert>)
