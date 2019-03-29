import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { ButtonSecondary } from './Button'

storiesOf('Button', module)
  .add('Default', () => <Button>Click me</Button>)
  .add('Call to action', () => (
    <Button variant="primary">Call to action</Button>
  ))
