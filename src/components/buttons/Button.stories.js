import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { ButtonSecondary } from './Button'

storiesOf('Button', module)
  .add('Default', () => <Button>Click me</Button>)
  .add('Call to action', () => <Button cta>Call to action</Button>)
  .add('Secondary button', () => (
    <ButtonSecondary large>Secondary button>></ButtonSecondary>
  ))
