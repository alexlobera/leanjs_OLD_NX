import React from 'react'
import { storiesOf } from '@storybook/react'
import LinkButton from './LinkButton'

storiesOf('Atoms | Buttons', module)
  .add('Default', () => <LinkButton>Default Button</LinkButton>)
  .add('Primary CTA', () => (
    <LinkButton variant="primary">Call To Action</LinkButton>
  ))
  .add('Secondary CTA', () => (
    <LinkButton variant="secondary">Call To Action</LinkButton>
  ))
