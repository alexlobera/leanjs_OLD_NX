import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4, H5 } from './H'
import P from './P'
import Label from './Label'
import Link from '../navigation/Link'
import Span from './Span'

storiesOf('Atoms | Text | Headings', module)
  .add('P', () => <P>Standard Paragraph Style</P>)
  .add('Small', () => <P small>Small text</P>)
  .add('Link', () => <Link>Link to another page</Link>)
  .add('H1', () => <H1>Heading 1</H1>)
  .add('H2', () => <H2>Heading 2</H2>)
  .add('H3', () => <H3>Heading 3</H3>)
  .add('H4', () => <H4>Heading 4</H4>)
  .add('H5', () => <H5>Heading 5</H5>)
  .add('Label', () => <Label>Label</Label>)
  .add('Strikethrough', () => <Span lineThrough>Strikethrough</Span>)
// ^ This Span component - why don't we use P and create a prop for strikethrough?
